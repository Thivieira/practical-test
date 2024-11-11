<?php

namespace ProfileSubmitPro;

use ProfileSubmitPro\Settings;

class AdminController {


	private $plugin_name;
	private $version;
	private $wpdb;

	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version     = $version;
		global $wpdb;
		$this->wpdb = $wpdb;
		$this->define_hooks();
	}

	private function define_hooks() {
		add_action( 'wp_ajax_get_plugin_settings', array( $this, 'get_plugin_settings' ) );
		add_action( 'wp_ajax_update_plugin_settings', array( $this, 'update_plugin_settings' ) );
		add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
		add_action( 'show_user_profile', array( $this, 'render_profile_in_user_account' ) );
		add_action( 'edit_user_profile', array( $this, 'render_profile_in_user_account' ) );
		add_action( 'wp_ajax_delete_submission', array( $this, 'delete_submission' ) );
	}

	public function add_admin_menu() {
		add_menu_page(
			Settings::MENU['settings']['title'],
			Settings::MENU['settings']['title'],
			Settings::MENU['settings']['capability'],
			Settings::MENU['settings']['slug'],
			array( $this, 'render_admin_page' ),
			Settings::MENU['settings']['icon'],
			Settings::MENU['settings']['position']
		);

		// Modify the automatically created submenu.
		add_submenu_page(
			Settings::MENU['settings']['slug'],
			Settings::MENU['settings']['submenu']['settings']['title'],
			__( Settings::MENU['settings']['submenu']['settings']['menu_title'], 'profile-submit-pro' ), // Changed submenu title.
			Settings::MENU['settings']['submenu']['settings']['capability'],
			Settings::MENU['settings']['submenu']['settings']['slug'],
			array( $this, 'render_admin_page' )
		);

		// Add submissions subpage.
		add_submenu_page(
			Settings::MENU['settings']['slug'], // Parent slug
			Settings::MENU['settings']['submenu']['submissions']['title'], // Page title
			Settings::MENU['settings']['submenu']['submissions']['menu_title'], // Menu title
			Settings::MENU['settings']['submenu']['submissions']['capability'], // Capability
			Settings::MENU['settings']['submenu']['submissions']['slug'], // Menu slug
			array( $this, 'render_submissions_page' ) // Callback function
		);
	}

	public function render_profile_in_user_account( $user ) {
		$public_key       = SubmissionManager::get_public_key_from_user_id( $user->ID );
		$edit_profile_url = get_option( 'profile_submit_pro_shortcode_url' ) . '?key=' . $public_key;

		if ( $public_key ) {
			$profile = SubmissionManager::get_profile_from_user_id( $user->ID );
			require_once plugin_dir_path( __DIR__ ) . 'templates/admin/partials/custom-profile-link.php';
			require_once plugin_dir_path( __DIR__ ) . 'templates/admin/partials/custom-profile-show.php';
		}
	}

	public function render_admin_page() {
		require_once plugin_dir_path( __DIR__ ) . 'templates/admin/settings-page.php';
	}

	public function render_submissions_page() {
		$limit       = isset( $_GET['limit'] ) ? intval( $_GET['limit'] ) : 10;
		$offset      = isset( $_GET['offset'] ) ? intval( $_GET['offset'] ) : 0;
		$data        = $this->get_submissions( $limit, $offset );
		$submissions = $data['submissions'];
		$pagination  = $data['pagination'];

		require_once plugin_dir_path( __DIR__ ) . 'templates/admin/submissions-page.php';
	}

	public function get_submissions( $limit = 10, $offset = 0 ) {
		$table_name  = $this->wpdb->prefix . Settings::SUBMISSIONS_TABLE;
		$submissions = $this->wpdb->get_results( "SELECT * FROM {$table_name} LIMIT {$limit} OFFSET {$offset}" );
		$pagination  = $this->get_pagination( $limit, $offset );
		return array(
			'submissions' => $submissions,
			'pagination'  => $pagination,
		);
	}

	public function delete_submission() {
		if ( ! isset( $_POST['security'] ) || ! wp_verify_nonce( $_POST['security'], Settings::DELETE_SUBMISSION_ACTION ) ) {
			wp_send_json_error( array( 'message' => 'Invalid security token' ) );
		}

		$submission_id = intval( $_POST['id'] );
		$delete_user   = isset( $_POST['deleteUser'] ) ? sanitize_text_field( $_POST['deleteUser'] ) : false;

		$this->wpdb->delete( $this->wpdb->prefix . Settings::SUBMISSIONS_TABLE, array( 'id' => $submission_id ) );
		if ( $delete_user ) {
			wp_delete_user( $submission_id );
		}

		wp_send_json_success( array( 'message' => $delete_user ? 'Submission and user deleted.' : 'Submission deleted.' ) );
	}

	public function get_pagination( $limit = 10, $offset = 0 ) {
		$table_name        = $this->wpdb->prefix . Settings::SUBMISSIONS_TABLE;
		$total_submissions = $this->wpdb->get_var( "SELECT COUNT(*) FROM {$table_name}" );
		$total_pages       = ceil( $total_submissions / $limit );
		$current_page      = ( $offset / $limit ) + 1;
		return array(
			'total'        => $total_submissions,
			'total_pages'  => $total_pages,
			'current_page' => $current_page,
		);
	}

	public function get_plugin_settings() {

		$settings = array();
		Settings::apply_settings_callback(
			function ( $key, $value ) use ( &$settings ) {
				$option = Settings::get_option( $key );
				if ( $key === 'notification_email_from' && empty( $value ) ) {
					$option = get_option( 'admin_email' );
				}
				$settings[ $key ] = $option;
			}
		);
		if ( empty( $settings ) ) {
			wp_send_json_error( array( 'message' => 'No settings found' ) );
		}
		wp_send_json_success( $settings );
	}

	public function update_plugin_settings() {

		if ( ! isset( $_POST['security'] ) || ! wp_verify_nonce( $_POST['security'], 'update_plugin_settings' ) ) {
			wp_send_json_error( array( 'message' => 'Invalid security token' ) );
			wp_die();
		}
		$post_data = sanitize_text_field( $_POST['post_data'] );

		if ( empty( $post_data ) ) {
			wp_send_json_error( array( 'message' => 'No data received' ) );
			wp_die();
		}

		Settings::apply_settings_callback(
			function ( $key, $value ) use ( $post_data ) {
				Settings::update_option( Settings::DEFAULT_PREFIX . 'settings_' . $key, $post_data[ $key ] );
			}
		);

		wp_send_json_success( array( 'message' => 'Plugin settings updated.' ) );
		wp_die();
	}

	public function enqueue_submissions_page_scripts() {
		$submissions_page_config = array(
			'action'   => Settings::DELETE_SUBMISSION_ACTION,
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'security' => wp_create_nonce( Settings::DELETE_SUBMISSION_ACTION ),
		);

		wp_localize_script( $this->plugin_name, 'submissionsPageConfig', $submissions_page_config );
	}

	public function enqueue_alpine_form() {
		$form_translations = array(
			'errors'       => array(
				'name'           => __( 'Name must be at least 3 characters long', 'profile-submit-pro' ),
				'email'          => __( 'Invalid email address', 'profile-submit-pro' ),
				'emailExists'    => __( 'Email already exists', 'profile-submit-pro' ),
				'username'       => __( 'Username must be at least 3 characters long', 'profile-submit-pro' ),
				'usernameExists' => __( 'Username already exists', 'profile-submit-pro' ),
				'password'       => __( 'Password must have at least 8 characters, including letters and numbers', 'profile-submit-pro' ),
				'phone'          => __( 'Invalid phone number', 'profile-submit-pro' ),
				'birthdate'      => __( 'It must be a valid date', 'profile-submit-pro' ),
				'address'        => array(
					'street'        => __( 'Street is too short', 'profile-submit-pro' ),
					'street_number' => __( 'street_number is too short', 'profile-submit-pro' ),
					'city'          => __( 'City is too short', 'profile-submit-pro' ),
					'state'         => __( 'State is too short', 'profile-submit-pro' ),
					'postal_code'   => __( 'Postal code is too short', 'profile-submit-pro' ),
					'country'       => __( 'Select a country', 'profile-submit-pro' ),
				),
				'interests'      => __( 'Please select at least 3 interests', 'profile-submit-pro' ),
				'cv'             => __( 'Your CV must be at least 20 characters long', 'profile-submit-pro' ),
				'formSuccess'    => __( 'Form submitted successfully!', 'profile-submit-pro' ),
				'formError'      => __( 'Please correct the errors before submitting', 'profile-submit-pro' ),
			),
			'placeholders' => array(
				'name'       => __( 'Your name', 'profile-submit-pro' ),
				'email'      => __( 'Your email', 'profile-submit-pro' ),
				'username'   => __( 'Your username', 'profile-submit-pro' ),
				'password'   => __( 'Your password', 'profile-submit-pro' ),
				'phone'      => __( 'Your phone number', 'profile-submit-pro' ),
				'birthdate'  => __( 'Your date of birth', 'profile-submit-pro' ),
				'address'    => __( 'Your address', 'profile-submit-pro' ),
				'interests'  => __( 'Your interests', 'profile-submit-pro' ),
				'cv'         => __( 'Your CV', 'profile-submit-pro' ),
				'dateFormat' => __( 'mm/dd/yyyy', 'profile-submit-pro' ),
			),
		);

		$form_config = array(
			'action'       => 'update_plugin_settings',
			'ajax_url'     => admin_url( 'admin-ajax.php' ),
			'security'     => wp_create_nonce( 'update_plugin_settings' ),
			'redirect_url' => '/',
		);

		wp_localize_script(
			$this->plugin_name,
			'formTranslations',
			$form_translations
		);
		wp_localize_script( $this->plugin_name, 'formConfig', $form_config );
	}

	public function enqueue_scripts( $hook ) {
		// Only enqueue on plugin pages
		if ( strpos( $hook, 'profile-submit-pro' ) === false ) {
			return;
		}

		wp_enqueue_style(
			$this->plugin_name,
			plugin_dir_url( __DIR__ ) . 'assets/css/dist/profile-submit-pro.css',
			array(),
			$this->version,
			'all'
		);

		wp_enqueue_script(
			$this->plugin_name,
			plugin_dir_url( __DIR__ ) . 'assets/js/dist/profile-submit-pro_admin.js',
			array( 'jquery' ),
			$this->version,
			array( 'strategy' => 'defer' )
		);

		$this->enqueue_alpine_form();
		$this->enqueue_submissions_page_scripts();
	}

	/**
	 * Delete all plugin data
	 */
	private function delete_all_data() {
		// Delete all data
	}

	public function uninstall() {
		if ( Settings::get_option( 'clean_uninstall' ) ) {
			$this->delete_all_data();
		}
	}
}
