<?php

namespace ProfileSubmitPro;

class EmailNotifier {
	public function send_submission_email( $input_data ) {
		$to      = $input_data['email'];
		$subject = Settings::get_option( 'notification_email_subject', 'Form submission' );
		$message = $this->get_template_email( $input_data );

		$headers   = array( 'Content-Type: text/html; charset=UTF-8' );
		$headers[] = 'From: ' . Settings::get_option( 'notification_email_from', get_option( 'admin_email' ) );

		$sent = wp_mail( $to, $subject, $message, $headers );

		if ( $sent ) {
			error_log( 'Email sent successfully!' );
		} else {
			error_log( 'Email failed to send. Check your SMTP settings.' );
		}
	}

	public function get_template_email( $input_data ) {
		error_log( json_encode( $input_data ) );
		$template      = Settings::get_option( 'email_template', 'default' );
		$template_path = plugin_dir_path( __DIR__ ) . 'templates/email/' . $template . '.php';
		$submission    = (object) $input_data;
		$profile_link  = get_option( 'profile_submit_pro_shortcode_url' ) . '?key=' . $submission->public_key;

		ob_start();
		include $template_path;
		$message = ob_get_clean();

		return $message;
	}
}
