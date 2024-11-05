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
			Settings::MENU['settings']['title'],
			__( Settings::MENU['settings']['menu_title'], 'profile-submit-pro' ), // Changed submenu title.
			Settings::MENU['settings']['capability'],
			Settings::MENU['settings']['slug'],
			array( $this, 'render_admin_page' )
		);

		// Add submissions subpage.
		add_submenu_page(
			Settings::MENU['settings']['slug'], // Parent slug
			Settings::MENU['submissions']['title'], // Page title
			Settings::MENU['submissions']['menu_title'], // Menu title
			Settings::MENU['submissions']['capability'], // Capability
			Settings::MENU['submissions']['slug'], // Menu slug
			array( $this, 'render_submissions_page' ) // Callback function
		);
	}

	public function render_admin_page() {
		require_once plugin_dir_path( __DIR__ ) . 'templates/admin/settings-page.php';
	}

	public function render_submissions_page() {
		$submissions = $this->get_submissions();
		require_once plugin_dir_path( __DIR__ ) . 'templates/admin/submissions-page.php';
	}

	public function get_submissions() {
		$submissions = $this->wpdb->get_results( "SELECT * FROM {$this->wpdb->prefix}profile_submissions" );
		return $submissions;
	}

	public function get_plugin_settings() {

		$settings = array();
		Settings::apply_settings_callback(
			function ( $key, $value ) use ( &$settings ) {
				$option = Settings::get_option( $key );
				if ( $key === 'notification_email_to' && empty( $value ) ) {
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

		if ( ! isset( $_POST['security'] ) || ! wp_verify_nonce( $_POST['security'], 'my_action' ) ) {
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

	public function enqueue_alpine_form() {
		$form_translations = array(
			'errors'       => array(
				'name'        => __( 'Name must be at least 3 characters long', 'your-text-domain' ),
				'email'       => __( 'Invalid email address', 'your-text-domain' ),
				'username'    => __( 'Username must be at least 3 characters long', 'your-text-domain' ),
				'password'    => __( 'Password must have at least 8 characters, including letters and numbers', 'your-text-domain' ),
				'phone'       => __( 'Invalid phone number', 'your-text-domain' ),
				'birthDate'   => __( 'It must be a valid date', 'your-text-domain' ),
				'address'     => array(
					'street'  => __( 'Street is too short', 'your-text-domain' ),
					'unit'    => __( 'Unit is too short', 'your-text-domain' ),
					'city'    => __( 'City is too short', 'your-text-domain' ),
					'state'   => __( 'State is too short', 'your-text-domain' ),
					'zipCode' => __( 'ZipCode is too short', 'your-text-domain' ),
					'country' => __( 'Select a country', 'your-text-domain' ),
				),
				'interests'   => __( 'Please select at least 3 interests', 'your-text-domain' ),
				'cv'          => __( 'Your CV must be at least 20 characters long', 'your-text-domain' ),
				'formSuccess' => __( 'Form submitted successfully!', 'your-text-domain' ),
				'formError'   => __( 'Please correct the errors before submitting', 'your-text-domain' ),
			),
			'placeholders' => array(
				'name'       => __( 'Your name', 'your-text-domain' ),
				'email'      => __( 'Your email', 'your-text-domain' ),
				'username'   => __( 'Your username', 'your-text-domain' ),
				'password'   => __( 'Your password', 'your-text-domain' ),
				'phone'      => __( 'Your phone number', 'your-text-domain' ),
				'birthDate'  => __( 'Your date of birth', 'your-text-domain' ),
				'address'    => __( 'Your address', 'your-text-domain' ),
				'interests'  => __( 'Your interests', 'your-text-domain' ),
				'cv'         => __( 'Your CV', 'your-text-domain' ),
				'dateFormat' => __( 'mm/dd/yyyy', 'your-text-domain' ),
			),
		);

		$form_config = array(
			'action'   => 'update_plugin_settings',
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'security' => wp_create_nonce( 'my_action' ),
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
