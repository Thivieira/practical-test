<?php

namespace ProfileSubmitPro;

class PublicController {

	private $plugin_name;
	private $version;
	private $loader;

	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version     = $version;
		$this->loader      = new Loader();
		$this->define_hooks();
	}

	private function define_hooks() {
		add_action( 'wp_ajax_submit_profile_action', array( $this, 'submit_profile_action' ) );
		add_action( 'wp_ajax_nopriv_submit_profile_action', array( $this, 'submit_profile_action' ) );
		add_shortcode( 'profile_submit_pro', array( $this, 'profile_submit_pro_shortcode' ) );
	}

	public function profile_submit_pro_shortcode( $atts ) {
		$atts = shortcode_atts(
			array(
				'page' => 'default',
			),
			$atts
		);

		switch ( $atts['page'] ) {
			case 'profile':
				$user_id = get_current_user_id();
				require_once plugin_dir_path( __DIR__ ) . 'templates/public/profile-template.php';
				break;
			default:
				require_once plugin_dir_path( __DIR__ ) . 'templates/public/form-template.php';
				break;
		}
	}

	public function submit_profile_action() {
		if ( ! isset( $_POST['security'] ) || ! wp_verify_nonce( $_POST['security'], 'my_action' ) ) {
			wp_send_json_error( array( 'message' => 'Invalid security token' ) );
			wp_die();
		}

		$post_data = $_POST['post_data'];

		if ( empty( $post_data ) ) {
			wp_send_json_error( array( 'message' => 'No data received' ) );
			wp_die();
		}

		$submission = new Submission( $post_data );
		$submission->save();

		wp_send_json_success( array( 'message' => 'Profile submitted successfully.' ) );
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
			'action'   => 'submit_profile_action',
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

	public function enqueue_scripts() {
		if ( ! is_admin() && has_shortcode( get_post()->post_content, 'profile_submit_pro' ) ) {
			wp_enqueue_style(
				$this->plugin_name,
				plugin_dir_url( __DIR__ ) . 'assets/css/dist/profile-submit-pro.css',
				array(),
				$this->version,
				'all'
			);

			wp_enqueue_script(
				$this->plugin_name,
				plugin_dir_url( __DIR__ ) . 'assets/js/dist/profile-submit-pro_public.js',
				array( 'jquery' ),
				$this->version,
				array( 'strategy' => 'defer' )
			);

			wp_enqueue_style(
				'intlTelInput',
				'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/css/intlTelInput.css',
				array(),
				$this->version,
				'all'
			);

			$this->enqueue_alpine_form();
		}
	}
}
