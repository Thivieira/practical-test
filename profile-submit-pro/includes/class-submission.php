<?php

namespace ProfileSubmitPro;

class Submission {
	public function __construct( $post_data ) {
		global $wpdb;
		$post_data        = stripslashes( $post_data );
		$this->post_data  = json_decode( $post_data, true );
		$this->table_name = $wpdb->prefix . Settings::DEFAULT_PREFIX . 'submissions';
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
						'permission_callback' => '__return_true', // Adjust permissions as needed
					)
				);
			}
		);
	}

	public function handle_api_submission( WP_REST_Request $request ) {
		$post_data = $request->get_json_params();

		if ( ! $this->validate_request_data( $post_data ) ) {
			return new WP_REST_Response( 'Invalid data', 400 );
		}

		$this->post_data = $post_data; // Set the post data for the submission

		if ( $this->save() ) {
			return new WP_REST_Response( 'Submission successful', 200 );
		} else {
			return new WP_REST_Response( 'Submission failed', 400 );
		}
	}

	private function validate_request_data( $post_data ) {
		if ( empty( $post_data['name'] ) ||
		empty( $post_data['email'] ) ||
		empty( $post_data['username'] ) ||
		empty( $post_data['password'] ) ) {
			return false;
		}

		if ( ! filter_var( $post_data['email'], FILTER_VALIDATE_EMAIL ) ) {
			return false;
		}

		return true;
	}

	public function save() {
		global $wpdb;

		$prepared_data = $this->prepare_data();

		if ( ! $prepared_data ) {
			error_log( 'Failed to prepare data for submission.' );
			return false;
		}

		$result = $this->insert_submission( $prepared_data );

		if ( ! $result ) {
			error_log( 'Failed to insert submission into the database.' );
			return false;
		}

		$this->register_user_if_not_exists( $result );
		$this->send_submission_email();

		return true;
	}

	private function prepare_data() {
		global $wpdb;

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

		$public_key = $this->generate_public_key();


		$table_name = $wpdb->prefix . Settings::SUBMISSIONS_TABLE;
		$prepared_data  = $wpdb->prepare(
			"INSERT INTO {$table_name} (name, email, username, phone, birthdate, street, street_number, city, state, postal_code, country, interests, cv) 
         VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
			$name,
			$email,
			$username,
			$phone,
			$birth_date,
			$street,
			$unit,
			$city,
			$state,
			$zip_code,
			$country,
			$interests,
			$cv,
			$public_key
		);

		error_log( 'Prepared data: ' . $prepared_data );

		return $prepared_data;
	}

	private function generate_public_key() {
		do {
			$public_key = wp_generate_password( 20, false ); // Generate a random string
			$public_key = preg_replace( '/[^A-Za-z0-9-]/', '', $public_key ); // Make it URL-friendly
			$is_unique  = $this->is_public_key_unique( $public_key ); // Check uniqueness
		} while ( ! $is_unique ); // Repeat until a unique key is found

		return $public_key;
	}

	private function is_public_key_unique( $public_key ) {
		global $wpdb;
		$table_name = $wpdb->prefix . Settings::SUBMISSIONS_TABLE;

		$query = $wpdb->prepare(
			"SELECT COUNT(*) FROM {$table_name} WHERE public_key = %s",
			$public_key
		);
		$count = $wpdb->get_var( $query );

		return $count == 0; // Return true if unique (count is 0)
	}

	private function insert_submission( $prepared_data ) {
		global $wpdb;

		$result = $wpdb->query( $prepared_data );

		if ( $result === false ) {
			error_log( 'Database insert error: ' . $wpdb->last_error );
			return false;
		}

		return true;
	}

	public function register_user_if_not_exists( $post_data_id ) {
		$user = get_user_by( 'email', $this->post_data['email'] );
		if ( ! $user ) {
			$user_id = wp_create_user( $this->post_data['username'], $this->post_data['password'], $this->post_data['email'] );
			$this->update_submission_with_user_id( $user_id, $post_data_id );
		} else {
			$this->update_submission_with_user_id( $user->ID, $post_data_id );
		}
	}

	public function update_submission_with_user_id( $user_id, $post_data_id ) {
		global $wpdb;
		$wpdb->update( $this->table_name, array( 'wordpress_user_id' => $user_id ), array( 'id' => $post_data_id ) );
	}

	public function get_template_email() {
		$template      = Settings::get_option( 'email_template', 'default' );
		$template_path = plugin_dir_path( __DIR__ ) . 'templates/email/' . $template . '.php';
		$submission    = (object) $this->post_data;
		$profile_link  = get_permalink( $submission->wordpress_user_id );

		// Start output buffering
		ob_start();
		include $template_path; // Include the template file
		$message = ob_get_clean(); // Get the contents of the output buffer

		return $message; // Return the message string
	}

	public function send_submission_email() {
		// Use SMTP settings from a plugin or custom configuration
		$to      = $this->post_data['email'];
		$subject = Settings::get_option( 'notification_email_subject', 'Form submission' );
		$message = $this->get_template_email();

		$headers   = array( 'Content-Type: text/html; charset=UTF-8' );
		$headers[] = 'From: ' . Settings::get_option( 'notification_email_from', get_option( 'admin_email' ) );

		// Use wp_mail to send the email
		$sent = wp_mail( $to, $subject, $message, $headers );

		if ( $sent ) {
			// echo 'Email sent successfully!';
			error_log( 'Email sent successfully!' );
		} else {
			// echo 'Email failed to send. Check your SMTP settings.';
			error_log( 'Email failed to send. Check your SMTP settings.' );
		}
	}

	public function submit_profile( $name, $email ) {
		$this->wpdb->insert(
			$this->wpdb->prefix . 'profile_submissions',
			array(
				'name'  => sanitize_text_field( $name ),
				'email' => sanitize_email( $email ),
			),
			array( '%s', '%s' )
		);

		if ( false === $this->wpdb->insert_id ) {
			return $this->wpdb->last_error;
		}

		return $this->wpdb->insert_id;
	}

	public function get_profile( $id ) {
		$query = $this->wpdb->prepare(
			"SELECT * FROM {$this->wpdb->prefix}profile_submissions WHERE id = %d",
			$id
		);
		return $this->wpdb->get_row( $query );
	}
}
