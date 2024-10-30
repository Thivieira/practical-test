<?php

namespace ProfileSubmitPro;

class ProfileSubmitPro
{
    protected $loader;
    protected $plugin_name;
    protected $version;

    public function __construct()
    {
        $this->plugin_name = 'profile-submit-pro';
        $this->version = '1.0.0';

        $this->load_dependencies();
        $this->set_locale();
        $this->define_admin_hooks();
        $this->define_public_hooks();
    }

    private function load_dependencies()
    {
        require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-profile-submit-pro-loader.php';
        $this->loader = new ProfileSubmitProLoader();
    }

    private function set_locale()
    {
        load_plugin_textdomain(
            'profile-submit-pro',
            false,
            dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
        );
    }

    private function define_admin_hooks()
    {
        $plugin_admin = new ProfileSubmitProAdmin($this->get_plugin_name(), $this->get_version());
        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');
    }

    private function define_public_hooks()
    {
        $plugin_public = new ProfileSubmitProPublic($this->get_plugin_name(), $this->get_version());
        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
    }

    public function enqueue_styles()
    {
        wp_enqueue_style(
            $this->plugin_name,
            plugin_dir_url(dirname(__FILE__)) . 'assets/css/dist/profile-submit-pro.css',
            array(),
            $this->version,
            'all'
        );
    }

    public function run()
    {
        $this->loader->run();
    }

    public function get_plugin_name()
    {
        return $this->plugin_name;
    }

    public function get_version()
    {
        return $this->version;
    }
}
