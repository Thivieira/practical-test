<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title><?php esc_html_e( 'Profile Submission Confirmation', 'profile-submit-pro' ); ?></title>
	<style>
		body {
			font-family: Arial, sans-serif;
			line-height: 1.6;
			color: #333;
			max-width: 600px;
			margin: 0 auto;
			padding: 20px;
		}
		.header {
			background-color: #f8f9fa;
			padding: 20px;
			border-radius: 5px;
			margin-bottom: 20px;
		}
		.content {
			background-color: #ffffff;
			padding: 20px;
			border: 1px solid #dee2e6;
			border-radius: 5px;
		}
		.footer {
			margin-top: 20px;
			font-size: 12px;
			color: #6c757d;
			text-align: center;
		}
		.submission-details {
			margin: 20px 0;
		}
		.submission-details dt {
			font-weight: bold;
			margin-top: 10px;
		}
		.submission-details dd {
			margin-left: 0;
			margin-bottom: 10px;
		}
	</style>
</head>
<body>
	<div class="header">
		<h1><?php esc_html_e( 'Profile Submission Confirmation', 'profile-submit-pro' ); ?></h1>
	</div>

	<div class="content">
		<p><?php esc_html_e( 'Thank you for your submission. Below are the details we received:', 'profile-submit-pro' ); ?></p>

		<dl class="submission-details">
			<dt><?php esc_html_e( 'Name', 'profile-submit-pro' ); ?></dt>
			<dd><?php echo esc_html( $submission->name ); ?></dd>

			<dt><?php esc_html_e( 'Email', 'profile-submit-pro' ); ?></dt>
			<dd><?php echo esc_html( $submission->email ); ?></dd>

			<dt><?php esc_html_e( 'Username', 'profile-submit-pro' ); ?></dt>
			<dd><?php echo esc_html( $submission->username ); ?></dd>

			<dt><?php esc_html_e( 'Phone', 'profile-submit-pro' ); ?></dt>
			<dd><?php echo esc_html( $submission->phone ); ?></dd>

			<dt><?php esc_html_e( 'Birth Date', 'profile-submit-pro' ); ?></dt>
			<dd><?php echo esc_html( date_i18n( get_option( 'date_format' ), strtotime( $submission->birthdate ) ) ); ?></dd>

			<dt><?php esc_html_e( 'Address', 'profile-submit-pro' ); ?></dt>
			<dd>
				<?php
				$address_parts = array(
					$submission->street . ' ' . $submission->street_number,
					$submission->city,
					$submission->state,
					$submission->postal_code,
					$submission->country,
				);
				echo esc_html( implode( ', ', array_filter( $address_parts ) ) );
				?>
			</dd>

			<dt><?php esc_html_e( 'Interests', 'profile-submit-pro' ); ?></dt>
			<?php
			if ( $submission->interests ) :
				$interests = json_decode( $submission->interests );
				?>
						<dd><?php echo esc_html( implode( ', ', $interests ) ); ?></dd>
					<?php endif; ?>

			<dt><?php esc_html_e( 'Submission Date', 'profile-submit-pro' ); ?></dt>
			<dd><?php echo esc_html( date_i18n( get_option( 'date_format' ) . ' ' . get_option( 'time_format' ), strtotime( $submission->submitted_at ) ) ); ?></dd>
		</dl>

		<?php if ( isset( $profile_link ) ) : ?>
			<p><?php esc_html_e( 'You can view your profile at:', 'profile-submit-pro' ); ?>
				<a href="<?php echo esc_url( $profile_link ); ?>"><?php echo esc_url( $profile_link ); ?></a>
			</p>
		<?php endif; ?>
	</div>

	<div class="footer">
		<p><?php esc_html_e( 'This is an automated message, please do not reply to this email.', 'profile-submit-pro' ); ?></p>
		<p><?php echo esc_html( get_bloginfo( 'name' ) ); ?></p>
	</div>
</body>
</html>
