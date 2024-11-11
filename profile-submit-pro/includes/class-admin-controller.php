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
		$ajax_actions = array(
			Settings::SUBMISSIONS_SETTINGS_ACTION,
			Settings::GENERAL_SETTINGS_ACTION,
			Settings::DELETE_SUBMISSION_ACTION,
			Settings::UPDATE_PLUGIN_SETTINGS_ACTION,
		);
		foreach ( $ajax_actions as $action ) {
			add_action( "wp_ajax_$action", array( $this, $action ) );
		}
		add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
		add_action( 'show_user_profile', array( $this, 'render_profile_in_user_account' ) );
		add_action( 'edit_user_profile', array( $this, 'render_profile_in_user_account' ) );
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
			__( Settings::MENU['settings']['submenu']['settings']['menu_title'], 'profile-submit-pro' ),
			Settings::MENU['settings']['submenu']['settings']['capability'],
			Settings::MENU['settings']['submenu']['settings']['slug'],
			array( $this, 'render_admin_page' )
		);

		// Add submissions subpage.
		add_submenu_page(
			Settings::MENU['settings']['slug'],
			Settings::MENU['settings']['submenu']['submissions']['title'],
			Settings::MENU['settings']['submenu']['submissions']['menu_title'],
			Settings::MENU['settings']['submenu']['submissions']['capability'],
			Settings::MENU['settings']['submenu']['submissions']['slug'],
			array( $this, 'render_submissions_page' )
		);
	}

	public function render_profile_in_user_account( $user ) {
		$public_key = SubmissionManager::get_public_key_from_user_id( $user->ID );
		if ( ! $public_key ) {
			return;
		}
		// Early return if no public key

		$profile = SubmissionManager::get_profile_from_user_id( $user->ID );
		require_once plugin_dir_path( __DIR__ ) . 'templates/admin/partials/custom-profile-link.php';
		require_once plugin_dir_path( __DIR__ ) . 'templates/admin/partials/custom-profile-show.php';
	}

	public function render_admin_page() {
		require_once plugin_dir_path( __DIR__ ) . 'templates/admin/settings-page.php';
	}

	public function render_submissions_page() {
		$limit  = intval( $_GET['limit'] ?? 10 );
		$offset = intval( $_GET['offset'] ?? 0 );
		$data   = $this->get_submissions( $limit, $offset );
		require_once plugin_dir_path( __DIR__ ) . 'templates/admin/submissions-page.php';
	}

	public function get_submissions( $limit = 10, $offset = 0 ) {
		$table_name  = $this->wpdb->prefix . Settings::SUBMISSIONS_TABLE;
		$submissions = $this->wpdb->get_results( "SELECT * FROM {$table_name} LIMIT {$limit} OFFSET {$offset}" );
		return array(
			'submissions' => $submissions,
			'pagination'  => $this->get_pagination( $limit, $offset ),
		);
	}

	public function delete_submission() {
		if ( ! isset( $_POST['security'] ) || ! wp_verify_nonce( $_POST['security'], Settings::DELETE_SUBMISSION_ACTION ) ) {
			wp_send_json_error( array( 'message' => 'Invalid security token' ) );
			return;
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
		return array(
			'total'        => $total_submissions,
			'total_pages'  => ceil( $total_submissions / $limit ),
			'current_page' => ( $offset / $limit ) + 1,
		);
	}

	public function general_settings() {
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
			return; // Early return
		}
		wp_send_json_success( $settings );
	}

	public function update_plugin_settings() {
		if ( ! isset( $_POST['security'] ) || ! wp_verify_nonce( $_POST['security'], Settings::UPDATE_PLUGIN_SETTINGS_ACTION ) ) {
			wp_send_json_error( array( 'message' => 'Invalid security token' ), 400 );
			return;
		}

		$post_data = $_POST['post_data'] ?? null;
		$post_data = json_decode( stripslashes( $post_data ), true );
		if ( is_null( $post_data ) ) {
			error_log( 'Post data is null after decoding. Check JSON format.' );
			wp_send_json_error( array( 'message' => 'Invalid JSON format' ), 400 );
			return;
		}

		if ( empty( $post_data ) ) {
			error_log( 'Post data is empty or not set.' . print_r( $_POST, true ) );
			wp_send_json_error( array( 'message' => 'No data received' ), 400 );
			return;
		}

		Settings::apply_settings_callback(
			function ( $key, $value ) use ( $post_data ) {
				if ( array_key_exists( $key, $post_data ) ) {
					Settings::update_option( $key, $post_data[ $key ] );
				}
			}
		);

		wp_send_json_success( array( 'message' => 'Plugin settings updated.' ) );
	}

	public function enqueue_settings_page_scripts() {
		wp_localize_script( $this->plugin_name, 'defaultOptions', Settings::DEFAULT_OPTIONS );

		$submissions_translations = array(
			'errors'       => array(
				'date_format'                => __( 'Date format must be a string', 'profile-submit-pro' ),
				'notification_email_subject' => __( 'Notification e-mail subject must be a string', 'profile-submit-pro' ),
				'notification_email_from'    => __( 'Notification email from must be a string', 'profile-submit-pro' ),
				'notification_email'         => __( 'Notification email must be a boolean', 'profile-submit-pro' ),
				'email_template'             => __( 'Email template must be a string', 'profile-submit-pro' ),
				'daily_submission_limit'     => __( 'Daily submissions limit must be a number', 'profile-submit-pro' ),
				'formSuccess'                => __( 'Form submitted successfully!', 'profile-submit-pro' ),
				'formError'                  => __( 'Please correct the errors before submitting', 'profile-submit-pro' ),
			),
			'placeholders' => array(
				'date_format'                => __( 'Date format', 'profile-submit-pro' ),
				'notification_email_from'    => __( 'Notification e-mail from address', 'profile-submit-pro' ),
				'notification_email_subject' => __( 'Notification e-mail subject', 'profile-submit-pro' ),
				'daily_submission_limit'     => __( 'Daily submissions limit', 'profile-submit-pro' ),
			),
		);

		$submissions_config = array(
			'get_action'  => Settings::GENERAL_SETTINGS_ACTION,
			'save_action' => Settings::UPDATE_PLUGIN_SETTINGS_ACTION,
			'ajax_url'    => admin_url( 'admin-ajax.php' ),
			'security'    => wp_create_nonce( Settings::UPDATE_PLUGIN_SETTINGS_ACTION ),
		);

		wp_localize_script( $this->plugin_name, 'submissionsTranslations', $submissions_translations );
		wp_localize_script( $this->plugin_name, 'submissionsConfig', $submissions_config );

		$general_settings_translations = array(
			'errors' => array(
				'clean_uninstall' => __( 'Clean uninstall must be a boolean', 'profile-submit-pro' ),
			),
		);

		$general_settings_config = array(
			'get_action'  => Settings::GENERAL_SETTINGS_ACTION,
			'save_action' => Settings::UPDATE_PLUGIN_SETTINGS_ACTION,
			'ajax_url'    => admin_url( 'admin-ajax.php' ),
			'security'    => wp_create_nonce( Settings::UPDATE_PLUGIN_SETTINGS_ACTION ),
		);

		wp_localize_script( $this->plugin_name, 'generalSettingsTranslations', $general_settings_translations );
		wp_localize_script( $this->plugin_name, 'generalSettingsConfig', $general_settings_config );
	}

	public function enqueue_submissions_page_scripts() {
		$submissions_page_config = array(
			'action'   => Settings::DELETE_SUBMISSION_ACTION,
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'security' => wp_create_nonce( Settings::DELETE_SUBMISSION_ACTION ),
		);

		wp_localize_script( $this->plugin_name, 'submissionsPageConfig', $submissions_page_config );
	}

	public function enqueue_scripts( $hook ) {
		if ( strpos( $hook, 'profile-submit-pro' ) === false ) {
			return;
		}
		// Early return

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

		$this->enqueue_settings_page_scripts();
		$this->enqueue_submissions_page_scripts();
	}

	private function delete_all_data() {
		// Delete all data
	}

	public function uninstall() {
		if ( Settings::get_option( 'clean_uninstall' ) ) {
			$this->delete_all_data();
		}
	}
}
