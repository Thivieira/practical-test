<div class="border-b border-gray-200 dark:border-gray-700">
	<ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
		<?php foreach ( ProfileSubmitPro\Settings::TABS as $tab_key => $tab_title ) :
			$tab_from_url = filter_input(
				INPUT_GET,
				'tab'
			);

			$is_active      = $tab_from_url ? $tab_from_url === $tab_key : $tab_key === 'general'; // Default to 'general' if no tab
			$active_classes = $is_active ? 'text-blue-600 bg-gray-100 border-blue-600 dark:text-blue-500 dark:bg-gray-800' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300';
			?>
			<li class="me-2">
				<a href="?page=profile-submit-pro&tab=<?php echo esc_attr( $tab_key ); ?>"
					<?php echo $is_active ? 'aria-current="page"' : ''; ?>
					class="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg <?php echo esc_attr( $active_classes ); ?> group">
					<span class="dashicons <?php echo esc_attr( $tab_title['icon'] ); ?> mr-2"></span>
					<?php esc_html_e( $tab_title['name'], 'profile-submit-pro' ); ?>
				</a>
			</li>
		<?php endforeach; ?>
	</ul>
</div>