<?php

namespace ProfileSubmitPro;

class SubmissionValidator {
	public function validate( $post_data ) {
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
}
