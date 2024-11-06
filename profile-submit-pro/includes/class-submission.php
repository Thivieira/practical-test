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
		$this->validator  = new SubmissionValidator();
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
		add_action( 'wp_ajax_verify_email_exists', array( $this, 'verify_email_exists' ) );
		add_action( 'wp_ajax_nopriv_verify_email_exists', array( $this, 'verify_email_exists' ) );
		add_action( 'wp_ajax_verify_username_exists', array( $this, 'verify_username_exists' ) );
		add_action( 'wp_ajax_nopriv_verify_username_exists', array( $this, 'verify_username_exists' ) );
	}

	public function handle_api_submission( WP_REST_Request $request ) {
		$post_data = $request->get_json_params();

		if ( ! $this->validator->validate( $post_data ) ) {
			return new WP_REST_Response( 'Invalid data', 400 );
		}

		$this->post_data = $post_data;

		if ( $this->save() ) {
			return new WP_REST_Response( 'Submission successful', 200 );
		} else {
			return new WP_REST_Response( 'Submission failed', 400 );
		}
	}

	public function verify_email_exists() {
		// Check if the email is provided
		if ( ! isset( $_POST['email'] ) ) {
			wp_send_json_error( array( 'message' => 'Email is required' ) );
			wp_die();
		}

		$email = sanitize_email( $_POST['email'] );

		// Query the database to check if the email exists
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
		// Check if the username is provided
		if ( ! isset( $_POST['username'] ) ) {
			wp_send_json_error( array( 'message' => 'Username is required' ) );
			wp_die();
		}

		$username = sanitize_user( $_POST['username'] );

		$user = $this->repository->verify_username_exists( $username );

		if ( $user ) {
			wp_send_json_success( array( 'exists' => true, 'message' => 'Username exists' ) );
		} else {
			wp_send_json_success( array( 'exists' => false, 'message' => 'Username does not exist' ) );
		}

		wp_die();
	}

	private function prepare_data() {
		if ( empty( $this->post_data ) ) {
			error_log( 'No data received' );
			return false;
		}

		$name       = sanitize_text_field( $this->post_data['name'] );
		$email      = sanitize_email( $this->post_data['email'] );
		$username   = sanitize_user( $this->post_data['username'] );
		$phone      = sanitize_text_field( $this->post_data['phone'] );
		$birth_date = sanitize_text_field( $this->post_data['birthDate'] );

		$street   = sanitize_text_field( $this->post_data['address']['street'] );
		$unit     = sanitize_text_field( $this->post_data['address']['unit'] );
		$city     = sanitize_text_field( $this->post_data['address']['city'] );
		$state    = sanitize_text_field( $this->post_data['address']['state'] );
		$zip_code = sanitize_text_field( $this->post_data['address']['zipCode'] );
		$country  = sanitize_text_field( $this->post_data['address']['country'] );

		$interests = json_encode( $this->post_data['interests'] );
		$cv        = $this->post_data['cv'];

		$public_key = $this->repository->generate_public_key();

		$table_name = $this->wpdb->prefix . Settings::SUBMISSIONS_TABLE;

		$input_data = array(
			'name'         => $name,
			'email'        => $email,
			'username'     => $username,
			'phone'        => $phone,
			'birth_date'   => $birth_date,
			'street'       => $street,
			'unit'         => $unit,
			'city'         => $city,
			'state'        => $state,
			'zip_code'     => $zip_code,
			'country'      => $country,
			'interests'    => $interests,
			'cv'           => $cv,
			'public_key'   => $public_key,
			'submitted_at' => date( 'Y-m-d H:i:s' ),
		);

		$prepared_data = $this->wpdb->prepare(
			"INSERT INTO {$table_name} (name, email, username, phone, birthdate, street, street_number, city, state, postal_code, country, interests, cv, public_key, submitted_at) 
			VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
			array_values( $input_data )
		);

		error_log( 'Prepared data: ' . $prepared_data );
		error_log( 'Input data: ' . json_encode( $input_data ) );

		return array( $prepared_data, $input_data );
	}

	public function save() {
		$data          = $this->prepare_data();
		$prepared_data = $data[0];
		$input_data    = $data[1];

		$this->repository->save( $prepared_data, $input_data );
	}
}
