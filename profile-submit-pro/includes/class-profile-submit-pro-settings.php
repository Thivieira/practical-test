<?php

namespace ProfileSubmitPro;

class Settings {

	const MENU = array(
		'settings'    => array(
			'title'      => 'Profile Submit Pro',
			'menu_title' => 'Settings',
			'capability' => 'manage_options',
			'slug'       => 'profile-submit-pro',
			'icon'       => 'dashicons-id',
			'position'   => 30,
		),
		'submissions' => array(
			'title'      => 'Submissions',
			'menu_title' => 'Submissions',
			'capability' => 'manage_options',
			'slug'       => 'profile-submit-pro-submissions',
			'position'   => 31,
		),
	);

	const DEFAULT_OPTIONS = array(
		'daily_submission_limit' => 50,
		'email_template'         => 'default',
		'notification_email'     => '',
	);

	const DEFAULT_PREFIX = 'profile_submit_pro_';

	public static function get_option( $key, $default = null ) {
		$options = get_option( self::DEFAULT_PREFIX . 'settings', self::DEFAULT_OPTIONS );
		return isset( $options[ $key ] ) ? $options[ $key ] : ( $default ?? self::DEFAULT_OPTIONS[ $key ] ?? null );
	}

	public static function update_option( $key, $value ) {
		$options         = get_option( self::DEFAULT_PREFIX . 'settings', self::DEFAULT_OPTIONS );
		$options[ $key ] = $value;
		update_option( self::DEFAULT_PREFIX . 'settings', $options );
	}
}
