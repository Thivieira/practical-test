<div class="container mx-auto p-4">
	<!-- if the notification email is enabled, show a way to edit  it -->
	<?php if ( ProfileSubmitPro\Settings::get_option( 'notification_email' ) ) : ?>
	<div class="bg-gray-100 p-4 rounded-md">
	<p class="text-lg mb-4">
		<?php esc_html_e( 'Notification email is enabled', 'profile-submit-pro' ); ?>
	</p>
	</div>
	<?php endif; ?>

	<!-- show the notification email -->
	<?php
	if ( ProfileSubmitPro\Settings::get_option( 'notification_email' ) ) :
		?>
	<textarea>
		<?php
		echo esc_html( ProfileSubmitPro\Settings::get_option( 'notification_email' ) );
		?>
		</textarea
	>
	<?php endif; ?>
</div>
