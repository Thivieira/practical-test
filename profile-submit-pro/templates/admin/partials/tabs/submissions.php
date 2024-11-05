<div class="container mx-auto p-4">
	<div class="bg-white shadow-md rounded-md p-4 mb-4">
		<div class="my-4 w-full md:w-1/3">
			<label for="notification_email_from" class="block text-sm font-medium text-gray-700 mb-2">Notification e-mail address</label>
			<input type="text" x-model="formData.notification_email_from" id="notification_email_from" name="notification_email_from" class="border border-gray-300 rounded-md px-2 w-full" :placeholder="translations.placeholders.notification_email_from" />
		</div>
		<div class="my-4 w-full md:w-1/3">
			<label for="daily_submission_limit" class="block text-sm font-medium text-gray-700 mb-2">Daily submissions limit</label>
			<input type="text" x-model="formData.daily_submission_limit" id="daily_submission_limit" name="daily_submission_limit" class="border border-gray-300 rounded-md px-2 w-full" :placeholder="translations.placeholders.daily_submission_limit" />
		</div>
	</div>

	<!-- show the notification email -->
	<?php
	if ( ProfileSubmitPro\Settings::get_option( 'notification_email' ) ) :
		?>
	<div class="bg-white shadow-md rounded-md p-4">
		<label class="block text-sm font-medium text-gray-700 mb-2">Current Notification Email Template</label>
		<textarea class="border border-gray-300 rounded-md p-2 w-full" rows="4" readonly>
			<?php
			echo esc_html( ProfileSubmitPro\Settings::get_option( 'notification_email' ) );
			?>
		</textarea>
	</div>
	<?php endif; ?>
</div>
