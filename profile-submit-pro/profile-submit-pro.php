<?php
/**
 * Plugin Name: Profile Submit Pro
 * Plugin URI: https://github.com/thivieira/practical-test
 * Description: The Profile Submit Pro plugin allows users to submit their details through an easy-to-use form, including fields for name, email, username, password, phone, birthday, address, interests, and a small CV. The form can be embedded on any page or post using a shortcode. Upon submission, user data is saved in the database, and a confirmation email is sent with a link to their profile. The plugin includes an admin settings page to limit daily submissions and offers a web service for JSON data submission. Additionally, a Python script is provided for bulk submissions from a CSV file.
 * Version: 1.0.0
 * Author: Thiago Vieira
 * Author URI: https://github.com/thivieira
 * License: GPL2
 *
 * @package ProfileSubmitPro
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define essential base constants.
define( 'PROFILE_SUBMIT_PRO_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'PROFILE_SUBMIT_PRO_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Autoloader.
require_once PROFILE_SUBMIT_PRO_PLUGIN_DIR . 'autoload.php';

/**
 * Initialize plugin.
 *
 * @return void
 */
function run_profile_submit_pro() {
	$plugin = new ProfileSubmitPro\ProfileSubmitPro();
	$plugin->run();
}

run_profile_submit_pro();
