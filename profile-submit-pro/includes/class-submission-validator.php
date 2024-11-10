<?php

namespace ProfileSubmitPro;

class SubmissionValidator {

	private $repository;

	public function __construct( $repository ) {
		$this->repository = $repository;
	}

	public function validate( $post_data ) {
		$is_update = $this->is_update_request( $post_data );

		if ( $this->has_empty_fields( $post_data, $is_update ) || ! $this->is_valid_email( $post_data['email'] ) ) {
			error_log( 'Validation failed: Empty fields or invalid email' );
			return false;
		}

		if ( $is_update ) {
			return $this->validate_update_request( $post_data );
		}

		return $this->validate_new_submission( $post_data );
	}

	private function is_update_request( $post_data ) {
		return isset( $post_data['update'] ) && $post_data['update'] === true;
	}

	private function validate_update_request( $post_data ) {
		if ( ! $this->validate_update( $post_data ) ) {
			error_log( 'Validation failed: Update validation failed' );
			return false;
		}
		return true;
	}

	private function validate_new_submission( $post_data ) {
		$email_exists    = $this->repository->verify_email_exists( $post_data['email'] );
		$username_exists = $this->repository->verify_username_exists( $post_data['username'] );

		if ( $email_exists || $username_exists ) {
			error_log( 'Validation failed: Email or username already exists' );
			return false;
		}
		return true;
	}

	private function has_empty_fields( $post_data, $is_update ) {

		if ( ! $is_update ) {
			return empty( $post_data['password'] );
		}

		return empty( $post_data['name'] ) || empty( $post_data['email'] ) || empty( $post_data['username'] );
	}

	private function is_valid_email( $email ) {
		return filter_var( $email, FILTER_VALIDATE_EMAIL );
	}

	private function validate_update( $post_data ) {
		$user_email = $this->repository->get_submission_attribute( 'email', 'id', $post_data['id'] );

		if ( $user_email !== $post_data['email'] && ! $this->repository->verify_email_exists( $post_data['email'] ) ) {
			return false;
		}

		$user_username = $this->repository->get_submission_attribute( 'username', 'id', $post_data['id'] );
		if ( $user_username !== $post_data['username'] && ! $this->repository->verify_username_exists( $post_data['username'] ) ) {
			return false;
		}

		$id      = $post_data['id'];
		$user_id = $this->repository->get_submission_attribute( 'id', 'email', $user_email );

		if ( $user_id !== $id ) {
			return false;
		}

		return true;
	}
}
