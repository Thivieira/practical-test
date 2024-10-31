<?php
namespace ProfileSubmitPro;

class Deactivator {


	public static function deactivate() {
		// TODO ADD OPTION IN SETTINGS TO DEACTIVATE PLUGIN MAINTAINING PREVIOUS DATABASE, CLEAN UNNINSTALL OTHERWISE
		// Optionally clean up settings or scheduled events
		// // If uninstall is not called from WordPress, exit
		// if (!defined('WP_UNINSTALL_PLUGIN')) {
		// exit;
		// }

		// // Delete plugin options
		// delete_option('profile_submit_pro_settings');

		// // Delete any custom tables if you created any
		// global $wpdb;
		// $wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}profile_submissions");

		// // Clean up any other plugin data (if you stored any custom post types)
		// $posts = get_posts(array(
		// 'post_type' => 'profile_submission',
		// 'numberposts' => -1,
		// 'post_status' => 'any',
		// ));

		// foreach ($posts as $post) {
		// wp_delete_post($post->ID, true);
		// }

		// // Clear any scheduled cron jobs if you created any
		// wp_clear_scheduled_hook('profile_submit_pro_cron');
	}
}
