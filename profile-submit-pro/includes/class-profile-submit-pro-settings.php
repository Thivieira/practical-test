<?php

namespace ProfileSubmitPro;

class ProfileSubmitProSettings
{
    const MENU = [
        'settings' => [
            'title' => 'Profile Submit Pro',
            'menu_title' => 'Settings',
            'capability' => 'manage_options',
            'slug' => 'profile-submit-pro',
            'icon' => 'dashicons-id',
            'position' => 30,
         ],
        'submissions' => [
            'title' => 'Submissions',
            'menu_title' => 'Submissions',
            'capability' => 'manage_options',
            'slug' => 'profile-submit-pro-submissions',
            'position' => 31,
         ],
     ];

    const DEFAULT_OPTIONS = [
        'daily_submission_limit' => 50,
        'email_template' => 'default',
        'notification_email' => '',
     ];

    public static function get_option($key, $default = null)
    {
        $options = get_option('profile_submit_pro_settings', self::DEFAULT_OPTIONS);
        return isset($options[ $key ]) ? $options[ $key ] : ($default ?? self::DEFAULT_OPTIONS[ $key ] ?? null);
    }

    public static function update_option($key, $value)
    {
        $options = get_option('profile_submit_pro_settings', self::DEFAULT_OPTIONS);
        $options[ $key ] = $value;
        update_option('profile_submit_pro_settings', $options);
    }
}
