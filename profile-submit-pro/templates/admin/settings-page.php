<div class="container mx-auto p-4" x-data="formHandler()">
	<div class="flex items-center">
		<span class="dashicons dashicons-id text-[1.5rem] w-8 h-8 mr-2"></span>
		<h1 class="text-2xl font-bold mb-4"><?php esc_html_e( 'Profile Submit Pro', 'profile-submit-pro' ); ?></h1>
	</div>
	<?php ProfileSubmitPro\TemplateLoader::load_admin_partial( 'tabs' ); ?>
	<?php
	$tab_page = filter_input( INPUT_GET, 'tab' );
	if ( 'general' === $tab_page ) :
		ProfileSubmitPro\TemplateLoader::load_admin_partial( 'tabs/general' );
	elseif ( 'submissions' === $tab_page || empty( $tab_page ) ) :
		ProfileSubmitPro\TemplateLoader::load_admin_partial( 'tabs/submissions' );
	endif;
	?>
</div>
