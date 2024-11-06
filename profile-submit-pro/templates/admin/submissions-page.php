<div class="container mx-auto p-4">
	<div class="">
		<h1 class="text-2xl font-bold mb-4">Submissions</h1>
	</div>
<!-- if there are submissions, show a table -->
	<div class="">
		<div class="relative overflow-x-autosm:rounded-lg">
			<table class="w-full  shadow-md  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="px-6 py-3">
							ID
						</th>
						<th scope="col" class="px-6 py-3">
							Email
						</th>
						<th scope="col" class="px-6 py-3">
							Username
						</th>
						<th scope="col" class="px-6 py-3">
							Phone
						</th>
						<th scope="col" class="px-6 py-3">
							Date
						</th>
						<th scope="col" class="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<?php foreach ( $submissions as $submission ) : ?>
						<?php
						$stored_url   = get_option( 'profile_submit_pro_shortcode_url' );
						$profile_link = $stored_url . '?key=' . $submission->public_key;
						// $profile_link = add_query_arg(
						// array(
						// 'key' => $submission->public_key,
						// )
						// );
						?>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<td class="w-4 p-4">
							<?php echo esc_html( $submission->id ); ?>
						</td>
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							<?php echo esc_html( $submission->email ); ?>
						</th>
						<td class="px-6 py-4">
							<?php echo esc_html( $submission->username ); ?>
						</td>
						<td class="px-6 py-4">
							<?php echo esc_html( $submission->phone ); ?>
						</td>
						<td class="px-6 py-4">
							<?php echo esc_html( gmdate( 'm/d/Y', strtotime( $submission->submitted_at ) ) ); ?>
						</td>
						<td class="px-6 py-4">
							<a href="<?php echo esc_url( $profile_link ); ?>" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Profile link</a>
						</td>
					</tr>
					<?php endforeach; ?>

					<?php if ( empty( $submissions ) ) : ?>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<td colspan="6" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"><?php esc_html_e( 'No submissions found', 'profile-submit-pro' ); ?></td>
					</tr>
					<?php endif; ?>
				</tbody>
			</table>
			<?php
			$current_page = $pagination['current_page'];
			$total_pages  = $pagination['total_pages'];
			$from         = $current_page * $limit - $limit + 1;
			$to           = $current_page * $limit;
			?>
			<?php if ( $total_pages > 1 ) : ?>
			<nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
				<span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white"><?php echo esc_html( $from ); ?>-<?php echo esc_html( $to ); ?></span> of <span class="font-semibold text-gray-900 dark:text-white"><?php echo esc_html( $total_pages ); ?></span></span>
				<ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
					<?php
					for ( $i = 1; $i <= $total_pages; $i++ ) {
						$url             = add_query_arg(
							array(
								'offset' => ( $i - 1 ) * $limit,
								'limit'  => $limit,
							)
						);
						$is_current_page = $i === $current_page;
						$class_name      = 'flex items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
						if ( $is_current_page ) {
							$class_name .= ' text-blue-600 dark:text-white';
						} else {
							$class_name .= ' text-gray-500';
						}
						$aria_current = '';
						if ( $is_current_page ) {
							$aria_current = 'page';
						}
						?>
						<li>
							<a href="<?php echo esc_url( $url ); ?>" aria-current="<?php echo esc_attr( $aria_current ); ?>" class="<?php echo esc_attr( $class_name ); ?>"><?php echo esc_html( $i ); ?></a>
						</li>
						<?php
					}
					?>
				</ul>
			</nav>
			<?php endif; ?>
			</div>
		</div>
	</div>
</div>
