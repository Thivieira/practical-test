<div class="mx-auto py-4" x-data="settingsPageHandler().submissionsTabHandler">
	<form method="post" @submit.prevent="saveSubmissionsSettings">
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
			<div class="my-4 w-full md:w-1/3">
				<label for="date_format" class="block text-sm font-medium text-gray-700 mb-2">Date format</label>
				<select x-model="formData.date_format" id="date_format" name="date_format" class="mt-1 block w-full rounded-md !max-w-full border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<template x-for="dateFormatOption in dateFormatOptions">
						<option :selected="formData.date_format === dateFormatOption" :value="dateFormatOption">
							<span x-text="dateFormatOption"></span>
						</option>
					</template>
				</select>
			</div>
			<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
			<?php esc_html_e( 'Save', 'profile-submit-pro' ); ?>
			</button>
		</div>
	</form>
</div>
