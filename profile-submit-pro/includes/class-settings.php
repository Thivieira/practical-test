<?php

namespace ProfileSubmitPro;

class Settings {


	const MENU = array(
		'settings' => array(
			'title'      => 'Profile Submit Pro',
			'menu_title' => 'Settings',
			'capability' => 'manage_options',
			'slug'       => 'profile-submit-pro',
			'icon'       => 'dashicons-id',
			'position'   => 30,
			'submenu'    => array(
				'settings'    => array(
					'title'      => 'Settings',
					'menu_title' => 'Settings',
					'capability' => 'manage_options',
					'slug'       => 'profile-submit-pro',
					'position'   => 30,
				),
				'submissions' => array(
					'title'      => 'Submissions',
					'menu_title' => 'Submissions',
					'capability' => 'manage_options',
					'slug'       => 'profile-submit-pro-submissions',
					'position'   => 31,
				),
			),
		),

	);

	const TABS = array(
		'submissions' => array(
			'name' => 'Submissions',
			'icon' => 'dashicons-email',
		),
		'general'     => array(
			'name' => 'General Settings',
			'icon' => 'dashicons-admin-settings',
		),
	);

	const DEFAULT_OPTIONS = array(
		'daily_submission_limit'     => 50,
		'email_template'             => 'default',
		'notification_email'         => 1,
		'notification_email_from'    => '',
		'notification_email_subject' => 'Form submission',
		'clean_uninstall'            => 0,
	);

	const DEFAULT_PREFIX = 'profile_submit_pro_';

	const SUBMISSIONS_TABLE = self::DEFAULT_PREFIX . 'submissions';

	const PROFILE_FORM_SUBMIT_ACTION = 'submit_profile_form_action';
	const PUBLIC_FORM_SUBMIT_ACTION  = 'submit_public_form_action';

	public static function get_option( $key, $default_options = null ) {
		$options = get_option( self::DEFAULT_PREFIX . $key, self::DEFAULT_OPTIONS[ $key ] );
		return isset( $options[ $key ] ) ? $options[ $key ] : ( $default_options ?? self::DEFAULT_OPTIONS[ $key ] ?? null );
	}

	public static function add_option( $key, $value ) {
		add_option( self::DEFAULT_PREFIX . $key, $value );
	}

	public static function update_option( $key, $value ) {
		$options         = get_option( self::DEFAULT_PREFIX . $key, self::DEFAULT_OPTIONS[ $key ] );
		$options[ $key ] = $value;
		update_option( self::DEFAULT_PREFIX . $key, $options );
	}

	public static function apply_settings_callback( $callback ) {
		$schema = self::DEFAULT_OPTIONS;
		foreach ( $schema as $key => $value ) {
			if ( ! isset( $post_data[ $key ] ) ) {
				$callback( $key, $value );
			}
		}
	}
}
