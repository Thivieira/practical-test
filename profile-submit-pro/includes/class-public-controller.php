<?php

namespace ProfileSubmitPro;

class PublicController {


	private $plugin_name;
	private $version;
	private $loader;

	public function __construct( $plugin_name, $version ) {
		global $wpdb;
		$this->wpdb        = $wpdb;
		$this->plugin_name = $plugin_name;
		$this->version     = $version;
		$this->loader      = new Loader();
		$this->define_hooks();
		$this->ensure_shortcode_options();
	}

	private function define_hooks() {
		add_action( 'wp_ajax_' . Settings::PROFILE_FORM_SUBMIT_ACTION, array( $this, 'submit_profile_form_action' ) );
		add_action( 'wp_ajax_nopriv_' . Settings::PROFILE_FORM_SUBMIT_ACTION, array( $this, 'submit_profile_form_action' ) );
		add_action( 'wp_ajax_' . Settings::PUBLIC_FORM_SUBMIT_ACTION, array( $this, 'submit_public_form_action' ) );
		add_action( 'wp_ajax_nopriv_' . Settings::PUBLIC_FORM_SUBMIT_ACTION, array( $this, 'submit_public_form_action' ) );
		add_shortcode( 'profile_submit_pro', array( $this, 'profile_submit_pro_shortcode' ) );
		add_action( 'wp_footer', array( $this, 'check_profile_shortcode_removal' ) );
	}

	public function profile_submit_pro_shortcode( $atts ) {
		global $post;

		$atts = shortcode_atts(
			array(
				'page' => 'default',
			),
			$atts
		);

		$post_url = get_permalink( $post->ID );

		$stored_post_id = get_option( 'profile_submit_pro_shortcode_post_id' );
		$stored_url     = get_option( 'profile_submit_pro_shortcode_url' );

		if ( $atts['page'] === 'profile' && $stored_post_id && $stored_post_id != $post->ID ) {
			return 'This shortcode is already used on another page. Please remove it from there first.';
		}

		if ( $atts['page'] === 'profile' && ! $stored_post_id ) {
			update_option( 'profile_submit_pro_shortcode_post_id', $post->ID );
			update_option( 'profile_submit_pro_shortcode_url', $post_url );
		}

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

	public function submit_profile_form_action() {
		if ( ! isset( $_POST['security'] ) || ! wp_verify_nonce( wp_unslash( $_POST['security'] ), 'submit_profile_form_action' ) ) {
			wp_send_json_error( array( 'message' => 'Invalid security token' ) );
			wp_die();
		}

		$id        = $_POST['id'];
		$post_data = $_POST['post_data'];

		if ( empty( $post_data ) ) {
			wp_send_json_error( array( 'message' => 'No data received' ) );
			wp_die();
		}

		$submission = new Submission( $post_data );
		$submission->update( $id );

		wp_send_json_success( array( 'message' => 'Profile submitted successfully.' ) );
		wp_die();
	}

	public function submit_public_form_action() {
		if ( ! isset( $_POST['security'] ) || ! wp_verify_nonce( $_POST['security'], 'submit_public_form_action' ) ) {
			wp_send_json_error( array( 'message' => 'Invalid security token' ) );
			wp_die();
		}

		$post_data = $_POST['post_data'];

		if ( empty( $post_data ) ) {
			wp_send_json_error( array( 'message' => 'No data received' ) );
			wp_die();
		}

		if ( $this->daily_submission_limit_reached() ) {
			wp_send_json_error( array( 'message' => 'Daily submission limit reached' ), 400 );
			wp_die();
		}

		$submission = new Submission( $post_data );
		$submission->save();

		wp_send_json_success( array( 'message' => 'Profile submitted successfully.' ) );
		wp_die();
	}

	public function enqueue_public_form_translations() {
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
				'dateFormat' => Settings::get_option( 'date_format' ),
			),
		);

		$form_config = array(
			'action'       => 'submit_public_form_action',
			'ajax_url'     => admin_url( 'admin-ajax.php' ),
			'security'     => wp_create_nonce( 'submit_public_form_action' ),
			'redirect_url' => '/',
		);

		wp_localize_script(
			$this->plugin_name,
			'formTranslations',
			$form_translations
		);
		wp_localize_script( $this->plugin_name, 'formConfig', $form_config );
	}

	public function enqueue_profile_form_translations() {
		$form_translations = array(
			'errors'       => array(
				'name'           => __( 'Name must be at least 3 characters long', 'profile-submit-pro' ),
				'email'          => __( 'Invalid email address', 'profile-submit-pro' ),
				'emailExists'    => __( 'Email already exists', 'profile-submit-pro' ),
				'username'       => __( 'Username must be at least 3 characters long', 'profile-submit-pro' ),
				'usernameExists' => __( 'Username already exists', 'profile-submit-pro' ),
				'phone'          => __( 'Invalid phone number', 'profile-submit-pro' ),
				'birthdate'      => __( 'It must be a valid date', 'profile-submit-pro' ),
				'address'        => array(
					'street'        => __( 'Street is too short', 'profile-submit-pro' ),
					'street_number' => __( 'street_number is too short', 'profile-submit-pro' ),
					'city'          => __( 'City is too short', 'profile-submit-pro' ),
					'state'         => __( 'State is too short', 'profile-submit-pro' ),
					'postal_code'   => __( 'ZipCode is too short', 'profile-submit-pro' ),
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
				'phone'      => __( 'Your phone number', 'profile-submit-pro' ),
				'birthdate'  => __( 'Your date of birth', 'profile-submit-pro' ),
				'address'    => __( 'Your address', 'profile-submit-pro' ),
				'interests'  => __( 'Your interests', 'profile-submit-pro' ),
				'cv'         => __( 'Your CV', 'profile-submit-pro' ),
				'dateFormat' => Settings::get_option( 'date_format' ),
			),
		);

		$form_config = array(
			'action'       => 'submit_profile_form_action',
			'ajax_url'     => admin_url( 'admin-ajax.php' ),
			'security'     => wp_create_nonce( 'submit_profile_form_action' ),
			'redirect_url' => '/',
		);

		wp_localize_script(
			$this->plugin_name,
			'profileFormTranslations',
			$form_translations
		);
		wp_localize_script( $this->plugin_name, 'profileFormConfig', $form_config );
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

			$this->enqueue_public_form_translations();
			$this->enqueue_profile_form_translations();
		}
	}

	private function daily_submission_limit_reached() {
		$daily_limit       = Settings::get_option( 'daily_submission_limit' );
		$today_submissions = $this->get_today_submissions_count();
		return $today_submissions >= $daily_limit;
	}

	private function get_today_submissions_count() {
		$table_name = $this->wpdb->prefix . Settings::SUBMISSIONS_TABLE;
		return $this->wpdb->get_var( $this->wpdb->prepare( "SELECT COUNT(*) FROM {$table_name} WHERE DATE(submitted_at) = CURDATE()", $table_name ) );
	}

	public function check_profile_shortcode_removal() {
		global $post;

		$stored_post_id = get_option( 'profile_submit_pro_shortcode_post_id' );

		if ( $stored_post_id == $post->ID ) {
			if ( ! has_shortcode( $post->post_content, 'profile_submit_pro' ) ) {
				delete_option( 'profile_submit_pro_shortcode_post_id' );
				delete_option( 'profile_submit_pro_shortcode_url' );
			}
		}
	}

	private function ensure_shortcode_options() {
		$stored_post_id = get_option( 'profile_submit_pro_shortcode_post_id' );
		$stored_url     = get_option( 'profile_submit_pro_shortcode_url' );

		if ( empty( $stored_post_id ) || empty( $stored_url ) ) {
			$default_post_id = get_the_ID();
			$default_url     = get_permalink( $default_post_id );

			update_option( 'profile_submit_pro_shortcode_post_id', $default_post_id );
			update_option( 'profile_submit_pro_shortcode_url', $default_url );
		}
	}
}
