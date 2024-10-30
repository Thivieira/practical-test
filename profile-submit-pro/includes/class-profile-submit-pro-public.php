<?php

namespace ProfileSubmitPro;

class ProfileSubmitProPublic
{
    private $plugin_name;
    private $version;

    public function __construct($plugin_name, $version)
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;

        add_shortcode('profile_submit_pro', array($this, 'profile_submit_pro_shortcode'));
    }

    public function profile_submit_pro_shortcode()
    {
        require_once plugin_dir_path(dirname(__FILE__)) . 'templates/public/profile-template.php';
    }

    public function enqueue_scripts()
    {
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/profile-submit-pro-public.js', array('jquery'), $this->version, false);
    }
}
