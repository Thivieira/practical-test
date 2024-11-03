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
		$action = 'submit_profile_action';
		$this->loader->add_action( "wp_ajax_{$action}", $this, "{$action}_handler" );
		$this->loader->add_action( "wp_ajax_nopriv_{$action}", $this, "{$action}_handler" );

		add_shortcode( 'profile_submit_pro', array( $this, 'profile_submit_pro_shortcode' ) );
	}

	public function profile_submit_pro_shortcode() {
		require_once plugin_dir_path( __DIR__ ) . 'templates/public/profile-template.php';
	}

	public function submit_profile_action_handler() {
		check_ajax_referer( 'submit_profile_action_handler_nonce', 'security' );

		$post_data = sanitize_text_field( $_POST['post_data'] );

		if ( $post_data ) {
			wp_send_json_success(
				array(
					'message'       => 'Data received successfully',
					'received_data' => $post_data,
				)
			);
		} else {
			wp_send_json_error( array( 'message' => 'Invalid data received' ) );
		}
	}

	public function send_submission_email( $submission ) {
		$to      = 'example@example.com';
		$subject = 'Hello from My Plugin';
		$message = 'This is a test email sent from a WordPress plugin.';

		$headers   = array( 'Content-Type: text/html; charset=UTF-8' );
		$headers[] = 'From: Your Name <you@example.com>';

		$sent = wp_mail( $to, $subject, $message, $headers );

		if ( $sent ) {
			echo 'Email sent successfully!';
		} else {
			echo 'Email failed to send.';
		}
	}

	public function enqueue_alpine_form() {
		// Pass translations to Alpine.js
		wp_localize_script(
			$this->plugin_name,
			'formTranslations',
			array(
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
				'ajax_url'     => admin_url( 'admin-ajax.php' ),
				'security'     => wp_create_nonce( 'submit_profile_action_handler_nonce' ),
			)
		);
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
				plugin_dir_url( __DIR__ ) . 'assets/js/dist/profile-submit-pro.js',
				array( 'jquery' ),
				$this->version,
				array(
					'strategy' => 'defer',
				)
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
