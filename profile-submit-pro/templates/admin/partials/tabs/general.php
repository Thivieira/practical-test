<div class="container mx-auto p-4">
	<div class="max-w-md">
	<form action="" method="post">
		<div class="mb-4">
			<label for="general_setting_1"><?php esc_html_e( 'Setting 1', 'profile-submit-pro' ); ?></label>
			<input type="text" id="general_setting_1" name="general_setting_1" class="w-full">
		</div>
		<div class="mb-4">
			<label for="general_setting_2"><?php esc_html_e( 'Setting 2', 'profile-submit-pro' ); ?></label>
			<input type="text" id="general_setting_2" name="general_setting_2" class="w-full">
		</div>
		<div class="mb-4">
			<label for="clean_uninstall">
				<input type="checkbox" id="clean_uninstall" name="clean_uninstall" class="mr-2 content-none focus-visible:outline-none">
				<span class='text-yellow-500'><?php esc_html_e( 'Delete all plugin data when uninstalling.', 'profile-submit-pro' ); ?></span>
			</label>
		</div>
		<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded"><?php esc_html_e( 'Save', 'profile-submit-pro' ); ?></button>
		</form>
	</div>
</div>
