<?php
$key = sanitize_text_field( wp_unslash( $_GET['key'] ) );

if ( ! isset( $_GET['key'] ) ) {
	// wp_die( 'Public key not found' );
	echo 'Profile not found';
	return;
}

$is_key_valid = \ProfileSubmitPro\SubmissionManager::is_public_key_valid( $key );

if ( ! $is_key_valid ) {
	echo 'Profile not found';
	return;
}

$the_user_can_edit = \ProfileSubmitPro\SubmissionManager::the_user_can_edit( $key );

if ( $the_user_can_edit ) :
	?>

	<?php include plugin_dir_path( __FILE__ ) . 'profile-form-template.php'; ?>

<?php else : ?>
	<p>You are not allowed to edit this profile</p>
<?php endif; ?>
