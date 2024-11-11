<?php

namespace ProfileSubmitPro;

class Submission {


	private $validator;
	private $repository;
	private $notifier;
	private $post_data;

	public function __construct( $post_data ) {
		global $wpdb;
		$post_data        = stripslashes( $post_data );
		$this->wpdb       = $wpdb;
		$this->post_data  = json_decode( $post_data, true );
		$this->repository = new SubmissionRepository();
		$this->notifier   = new EmailNotifier();
		$this->validator  = new SubmissionValidator( $this->repository );
		$this->define_hooks();
	}

	private function define_hooks() {
		add_action(
			'rest_api_init',
			function () {
				register_rest_route(
					'profile-submit-pro/v1',
					'/submit',
					array(
						'methods'             => 'POST',
						'callback'            => array( $this, 'handle_api_submission' ),
						'permission_callback' => '__return_true',
					)
				);
			}
		);
		add_action(
			'rest_api_init',
			function () {
				register_rest_route(
					'profile-submit-pro/v1',
					'/verify_email_exists',
					array(
						'methods'             => 'POST',
						'callback'            => array( $this, 'verify_email_exists' ),
						'permission_callback' => '__return_true',
					)
				);
			}
		);
		add_action(
			'rest_api_init',
			function () {
				register_rest_route(
					'profile-submit-pro/v1',
					'/verify_username_exists',
					array(
						'methods'             => 'POST',
						'callback'            => array( $this, 'verify_username_exists' ),
						'permission_callback' => '__return_true',
					)
				);
			}
		);

		add_action( 'wp_ajax_verify_email_exists', array( $this, 'verify_email_exists' ) );
		add_action( 'wp_ajax_nopriv_verify_email_exists', array( $this, 'verify_email_exists' ) );
		add_action( 'wp_ajax_verify_username_exists', array( $this, 'verify_username_exists' ) );
		add_action( 'wp_ajax_nopriv_verify_username_exists', array( $this, 'verify_username_exists' ) );
		add_action( 'wp_ajax_get_profile', array( $this, 'get_profile' ) );
		add_action( 'wp_ajax_nopriv_get_profile', array( $this, 'get_profile' ) );
	}

	public function handle_api_submission( \WP_REST_Request $request ) {
		$post_data = $request->get_json_params();

		if ( ! $this->validator->validate( $post_data ) ) {
			return wp_send_json_error( array( 'message' => 'Invalid data' ), 400 );
		}

		$this->post_data = $post_data;

		$is_update = isset( $post_data['update'] ) && $post_data['update'] === true;

		$response = null;

		if ( $is_update ) {
			$response = $this->update( $post_data['id'] );
		} else {
			$response = $this->save();
		}

		if ( $response ) {
			return wp_send_json_success( array( 'message' => 'Submission successful' ) );
		} else {
			return wp_send_json_error( array( 'message' => 'Submission failed' ), 400 );
		}
	}

	public function verify_email_exists() {
		$email = sanitize_email( $_POST['email'] );

		if ( empty( $email ) ) {
			wp_send_json_error( array( 'message' => 'Email is required' ) );
			wp_die();
		}

		$id = $_POST['id'];
		if ( ! empty( $id ) ) {
			$existing_user_email = $this->repository->get_submission_attribute( 'email', 'id', $id );
			if ( $existing_user_email === $email ) {
				wp_send_json_success(
					array(
						'exists'  => false,
						'message' => 'Email does not exist',
					)
				);
				wp_die();
				return;
			}
		}

		$user = $this->repository->verify_email_exists( $email );

		if ( $user ) {
			wp_send_json_success(
				array(
					'exists'  => true,
					'message' => 'Email exists',
				)
			);
		} else {
			wp_send_json_success(
				array(
					'exists'  => false,
					'message' => 'Email does not exist',
				)
			);
		}

		wp_die();
	}

	public function verify_username_exists() {
		$username = sanitize_user( $_POST['username'] );

		if ( empty( $username ) ) {
			wp_send_json_error( array( 'message' => 'Username is required' ) );
			wp_die();
		}

		$id = $_POST['id'];
		if ( ! empty( $id ) ) {
			$existing_user_username = $this->repository->get_submission_attribute( 'username', 'id', $id );
			if ( $existing_user_username === $username ) {
				wp_send_json_success(
					array(
						'exists'  => false,
						'message' => 'Username does not exist',
					)
				);
				wp_die();
				return;
			}
		}

		$user = $this->repository->verify_username_exists( $username );

		if ( $user ) {
			wp_send_json_success(
				array(
					'exists'  => true,
					'message' => 'Username exists',
				)
			);
		} else {
			wp_send_json_success(
				array(
					'exists'  => false,
					'message' => 'Username does not exist',
				)
			);
		}

		wp_die();
	}

	public function get_profile() {
		$user_id = SubmissionManager::get_user_id_from_public_key( $_POST['public_key'] );

		if ( ! $user_id ) {
			return wp_send_json_error(
				array(
					'message' => 'Profile not found',
				),
				404
			);

		}

		$current_user_id = get_current_user_id();
		$is_admin        = current_user_can( 'administrator' );

		if ( $user_id !== $current_user_id && ! $is_admin ) {
			return wp_send_json_error(
				array(
					'message' => 'Profile not found',
				),
				403
			);
		}

		$profile = $this->repository->get_profile_from_user_id( $user_id );

		if ( ! $profile ) {
			return wp_send_json_error(
				array(
					'message' => 'Profile not found',
				),
				404
			);
		}

		return wp_send_json_success( $profile, 200 );
	}

	private function format_data( $is_new_submission = true ) {
		if ( empty( $this->post_data ) ) {
			error_log( 'No data received' );
			return false;
		}

		$name       = sanitize_text_field( $this->post_data['name'] );
		$email      = sanitize_email( $this->post_data['email'] );
		$username   = sanitize_user( $this->post_data['username'] );
		$phone      = sanitize_text_field( $this->post_data['phone'] );
		$birth_date = $this->ensure_birth_date_format( sanitize_text_field( $this->post_data['birthdate'] ) );

		error_log( 'birth_date: ' . print_r( $birth_date, true ) );

		$street        = sanitize_text_field( $this->post_data['address']['street'] );
		$street_number = sanitize_text_field( $this->post_data['address']['street_number'] );
		$city          = sanitize_text_field( $this->post_data['address']['city'] );
		$state         = sanitize_text_field( $this->post_data['address']['state'] );
		$postal_code   = sanitize_text_field( $this->post_data['address']['postal_code'] );
		$country       = sanitize_text_field( $this->post_data['address']['country'] );

		$interests = json_encode( $this->post_data['interests'] );
		$cv        = $this->post_data['cv'];

		$input_data = array(
			'name'          => $name,
			'email'         => $email,
			'username'      => $username,
			'phone'         => $phone,
			'birthdate'     => $birth_date,
			'street'        => $street,
			'street_number' => $street_number,
			'city'          => $city,
			'state'         => $state,
			'postal_code'   => $postal_code,
			'country'       => $country,
			'interests'     => $interests,
			'cv'            => $cv,
		);

		if ( $is_new_submission ) {
			$public_key                 = $this->repository->generate_public_key();
			$input_data['public_key']   = $public_key;
			$input_data['submitted_at'] = date( 'Y-m-d H:i:s' );
		}

		return $input_data;
	}

	private function ensure_birth_date_format( $birth_date ) {

		if ( empty( $birth_date ) ) {
			return false;
		}

		error_log( 'birth_date: ' . print_r( $birth_date, true ) );

		// verify if format is valid
		if ( ! preg_match( '/^\d{2}\/\d{2}\/\d{4}$/', $birth_date ) ) {
			return $birth_date;
		}

		$date_format = Settings::get_option( 'date_format' );

		$date_format = str_replace( array( 'MM', 'DD', 'YYYY' ), array( 'm', 'd', 'Y' ), $date_format );

		$date = \DateTime::createFromFormat( $date_format, $birth_date );

		if ( ! $date ) {
			return false;
		}

		return $date->format( 'Y-m-d' );
	}

	public function save() {
		$data = $this->format_data();

		return $this->repository->save( $data );
	}

	public function update( $id ) {
		$data = $this->format_data( false );

		return $this->repository->update( $data, $id );
	}
}
