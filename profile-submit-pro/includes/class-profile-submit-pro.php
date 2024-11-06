<?php

namespace ProfileSubmitPro;

class ProfileSubmitPro {

	protected $loader;
	protected $plugin_name;
	protected $version;

	public function __construct() {
		$this->plugin_name = 'profile-submit-pro';
		$this->version     = '1.0.0';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();
		$this->define_submission_hooks();
	}

	private function load_dependencies() {
		require_once plugin_dir_path( __DIR__ ) . 'includes/class-loader.php';
		$this->loader = new Loader();
		add_action(
			'plugins_loaded',
			function () {
				load_plugin_textdomain( 'profile-submit-pro', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
			}
		);
	}

	private function set_locale() {
		load_plugin_textdomain(
			'profile-submit-pro',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);
	}

	private function define_admin_hooks() {
		$plugin_admin = new AdminController( $this->get_plugin_name(), $this->get_version() );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
	}

	private function define_public_hooks() {
		$plugin_public = new PublicController( $this->get_plugin_name(), $this->get_version() );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );
	}

	public function define_submission_hooks() {
		$plugin_submission = new Submission( $this->get_plugin_name(), $this->get_version() );
		$this->loader->add_action( 'wp_ajax_submit_profile_action', $plugin_submission, 'submit_profile_action' );
		$this->loader->add_action( 'wp_ajax_nopriv_submit_profile_action', $plugin_submission, 'submit_profile_action' );
	}

	public function run() {
		$this->loader->run();
	}

	public function get_plugin_name() {
		return $this->plugin_name;
	}

	public function get_version() {
		return $this->version;
	}
}
