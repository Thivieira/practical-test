<div class="container mx-auto py-4">
	<div class="bg-white shadow-md rounded-md p-4 mb-4">
		<div class="my-4 w-full md:w-1/3">
			<label for="notification_email_from" class="block text-sm font-medium text-gray-700 mb-2">Notification e-mail from address</label>
			<input type="text" x-model="formData.notification_email_from" id="notification_email_from" name="notification_email_from" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6 w-full" :placeholder="translations.placeholders.notification_email_from" />
		</div>
		<div class="my-4 w-full md:w-1/3">
			<label for="notification_email_subject" class="block text-sm font-medium text-gray-700 mb-2">Notification e-mail subject</label>
			<input type="text" x-model="formData.notification_email_subject" id="notification_email_subject" name="notification_email_subject" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6 w-full" :placeholder="translations.placeholders.notification_email_from" />
		</div>
		<div class="my-4 w-full md:w-1/3">
			<label for="daily_submission_limit" class="block text-sm font-medium text-gray-700 mb-2">Daily submissions limit</label>
			<input type="text" x-model="formData.daily_submission_limit" id="daily_submission_limit" name="daily_submission_limit" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6 w-full" :placeholder="translations.placeholders.daily_submission_limit" />
		</div>
		<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
		<?php esc_html_e( 'Save', 'profile-submit-pro' ); ?>
		</button>
	</div>
</div>
