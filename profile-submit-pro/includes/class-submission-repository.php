<?php

namespace ProfileSubmitPro;

class SubmissionRepository {


	private $wpdb;

	public function __construct() {
		global $wpdb;
		$this->wpdb           = $wpdb;
		$this->email_notifier = new EmailNotifier();
		$this->table_name     = $wpdb->prefix . Settings::SUBMISSIONS_TABLE;
	}

	public function save( $prepared_data, $input_data ) {
		if ( ! $prepared_data ) {
			error_log( 'Failed to prepare data for submission.' );
			return false;
		}

		$inserted_id = $this->insert_submission( $prepared_data );

		if ( ! $inserted_id ) {
			error_log( 'Failed to insert submission into the database.' );
			return false;
		}

		$this->register_user_if_not_exists( $inserted_id, $input_data );
		$this->email_notifier->send_submission_email( $input_data );

		return true;
	}

	public function update( $prepared_data, $input_data ) {
		if ( ! $prepared_data ) {
			error_log( 'Failed to prepare data for submission.' );
			return false;
		}

		$result = $this->update_submission( $prepared_data );

		if ( ! $result ) {
			error_log( 'Failed to update submission into the database.' );
			return false;
		}

		return true;
	}

	private function insert_submission( $prepared_data ) {
		$result = $this->wpdb->query( $prepared_data );

		if ( $result === false ) {
			error_log( 'Database insert error: ' . $this->wpdb->last_error );
			return false;
		}

		return $this->wpdb->insert_id;
	}

	private function update_submission( $prepared_data ) {
		try {
			$this->wpdb->update( $this->table_name, $prepared_data, array( 'id' => $input_data['id'] ) );
			return true;
		} catch ( \Exception $e ) {
			error_log( 'Database update error: ' . $e->getMessage() );
			return false;
		}
	}

	public function verify_email_exists( $email ) {
		return $this->wpdb->get_row( $this->wpdb->prepare( "SELECT * FROM {$this->wpdb->users} WHERE user_email = %s", $email ) );
	}

	public function verify_username_exists( $username ) {
		return $this->wpdb->get_row( $this->wpdb->prepare( "SELECT * FROM {$this->wpdb->users} WHERE user_login = %s", $username ) );
	}

	public function register_user_if_not_exists( $post_data_id, $input_data ) {
		$user = get_user_by( 'email', $input_data['email'] );
		if ( ! $user ) {
			$user_id = wp_create_user( $input_data['username'], $input_data['password'], $input_data['email'] );
			$this->update_submission_with_user_id( $user_id, $post_data_id );
		} else {
			$this->update_submission_with_user_id( $user->ID, $post_data_id );
		}
	}

	public function update_submission_with_user_id( $user_id, $post_data_id ) {
		$this->wpdb->update( $this->table_name, array( 'wordpress_user_id' => $user_id ), array( 'id' => $post_data_id ) );
	}

	public function get_submission_attribute( $attributeName, $searchField, $searchValue ) {
		return $this->wpdb->get_var( $this->wpdb->prepare( "SELECT {$attributeName} FROM {$this->table_name} WHERE {$searchField} = %s", $searchValue ) );
	}

	public function get_profile_from_user_id( $user_id ) {
		return $this->wpdb->get_row( $this->wpdb->prepare( "SELECT * FROM {$this->table_name} WHERE wordpress_user_id = %d", $user_id ) );
	}

	public function generate_public_key() {
		do {
			$public_key = wp_generate_password( 20, false );
			$public_key = preg_replace( '/[^A-Za-z0-9-]/', '', $public_key );
			$is_unique  = $this->is_public_key_unique( $public_key );
		} while ( ! $is_unique );

		return $public_key;
	}

	private function is_public_key_unique( $public_key ) {
		$table_name = $this->wpdb->prefix . Settings::SUBMISSIONS_TABLE;

		$query = $this->wpdb->prepare(
			"SELECT COUNT(*) FROM {$table_name} WHERE public_key = %s",
			$public_key
		);
		$count = $this->wpdb->get_var( $query );

		return $count == 0;
	}
}
