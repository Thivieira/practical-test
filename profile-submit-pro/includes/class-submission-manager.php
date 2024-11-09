<?php

namespace ProfileSubmitPro;

class SubmissionManager {


	public static function get_user_id_from_public_key( $public_key ) {
		global $wpdb;
		$submission_repository = new SubmissionRepository();
		return $submission_repository->get_submission_attribute( 'wordpress_user_id', 'public_key', $public_key );
	}

	public static function get_public_key_from_user_id( $user_id ) {
		global $wpdb;
		$submission_repository = new SubmissionRepository();
		return $submission_repository->get_submission_attribute( 'public_key', 'wordpress_user_id', $user_id );
	}

	public static function get_profile_from_user_id( $user_id ) {
		global $wpdb;
		$submission_repository = new SubmissionRepository();
		return $submission_repository->get_profile_from_user_id( $user_id );
	}

	public static function is_public_key_valid( $public_key ) {
		global $wpdb;

		$table_name = $wpdb->prefix . Settings::SUBMISSIONS_TABLE;

		$query = $wpdb->prepare(
			"SELECT COUNT(*) FROM {$table_name} WHERE public_key = %s",
			$public_key
		);

		$count = $wpdb->get_var( $query );

		return $count > 0;
	}

	public static function the_user_can_edit( $public_key ) {
		global $wpdb;

		$table_name = $wpdb->prefix . Settings::SUBMISSIONS_TABLE;

		$query = $wpdb->prepare(
			"SELECT wordpress_user_id FROM {$table_name} WHERE public_key = %s",
			$public_key
		);

		$user_id = $wpdb->get_var( $query );

		$current_user = wp_get_current_user();

		$is_user_id_valid = $user_id !== null;
		$is_current_user  = $user_id === $current_user->ID;
		$is_admin         = $current_user->has_cap( 'administrator' );

		return ( $is_user_id_valid && $is_current_user ) || $is_admin;
	}
}
