<?php

namespace ProfileSubmitPro;

use ProfileSubmitPro\ProfileSubmitProSettings as Settings;

class ProfileSubmitProAdmin
{
    private $plugin_name;
    private $version;

    public function __construct($plugin_name, $version)
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;

        add_action('admin_menu', array($this, 'add_admin_menu'));
    }

    public function add_admin_menu()
    {
        add_menu_page(
            Settings::MENU[ 'settings' ][ 'title' ],
            Settings::MENU[ 'settings' ][ 'title' ],
            Settings::MENU[ 'settings' ][ 'capability' ],
            Settings::MENU[ 'settings' ][ 'slug' ],
            array($this, 'render_admin_page'),
            Settings::MENU[ 'settings' ][ 'icon' ],
            Settings::MENU[ 'settings' ][ 'position' ]
        );

        // Modify the automatically created submenu
        add_submenu_page(
            Settings::MENU[ 'settings' ][ 'slug' ],
            Settings::MENU[ 'settings' ][ 'title' ],
            __(Settings::MENU[ 'settings' ][ 'menu_title' ], 'profile-submit-pro'), // Changed submenu title
            Settings::MENU[ 'settings' ][ 'capability' ],
            Settings::MENU[ 'settings' ][ 'slug' ],
            array($this, 'render_admin_page')
        );

        // Add submissions subpage
        add_submenu_page(
            Settings::MENU[ 'settings' ][ 'slug' ], // Parent slug
            Settings::MENU[ 'submissions' ][ 'title' ], // Page title
            Settings::MENU[ 'submissions' ][ 'menu_title' ], // Menu title
            Settings::MENU[ 'submissions' ][ 'capability' ], // Capability
            Settings::MENU[ 'submissions' ][ 'slug' ], // Menu slug
            array($this, 'render_submissions_page') // Callback function
        );

    }

    public function render_admin_page()
    {
        require_once plugin_dir_path(dirname(__FILE__)) . 'templates/admin/settings-page.php';
    }

    public function render_submissions_page()
    {
        require_once plugin_dir_path(dirname(__FILE__)) . 'templates/admin/submissions-page.php';
    }

    public function enqueue_scripts()
    {
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/profile-submit-pro-admin.js', array('jquery'), $this->version, false);
    }
}
