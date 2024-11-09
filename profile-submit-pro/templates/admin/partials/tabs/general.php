<div class="mx-auto py-4">
	<div class="bg-white shadow-md rounded-md p-4 mb-4">
		<div class="my-4 w-full md:w-1/3">
	<form action="" method="post">
		<div class="mb-4">
		<label for="clean_uninstall">
			<input
			type="checkbox"
			id="clean_uninstall"
			name="clean_uninstall"
			class="mr-2 content-none focus-visible:outline-none"
			/>
			<span class="text-yellow-500">
			<?php esc_html_e( 'Delete all plugin data when uninstalling.', 'profile-submit-pro' ); ?>
			</span>
		</label>
		</div>
		<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
		<?php esc_html_e( 'Save', 'profile-submit-pro' ); ?>
		</button>
		</form>
	</div>
	</div>
</div>
