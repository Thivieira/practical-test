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
		'version'                    => '1.0',
		'clean_uninstall'            => 0,
		'email_template'             => 'default',
		'notification_email'         => 1,
		'daily_submission_limit'     => 50,
		'notification_email_from'    => '',
		'notification_email_subject' => 'Form submission',
		'date_format'                => 'mm/dd/yyyy',
	);

	const DEFAULT_PREFIX = 'profile_submit_pro_';

	const SUBMISSIONS_TABLE = self::DEFAULT_PREFIX . 'submissions';

	const PROFILE_FORM_SUBMIT_ACTION    = 'submit_profile_form_action';
	const PUBLIC_FORM_SUBMIT_ACTION     = 'submit_public_form_action';
	const DELETE_SUBMISSION_ACTION      = 'delete_submission';
	const SUBMISSIONS_SETTINGS_ACTION   = 'submissions_settings';
	const GENERAL_SETTINGS_ACTION       = 'general_settings';
	const UPDATE_PLUGIN_SETTINGS_ACTION = 'update_plugin_settings';

	public static function get_option( $key, $default_options = null ) {
		$option = get_option( self::DEFAULT_PREFIX . $key, self::DEFAULT_OPTIONS[ $key ] );

		if ( empty( $option ) ) {
			return $default_options ?? self::DEFAULT_OPTIONS[ $key ] ?? null;
		}

		return $option;
	}

	public static function add_option( $key, $value ) {
		add_option( self::DEFAULT_PREFIX . $key, $value );
	}

	public static function update_option( $key, $value ) {
		$option = get_option( self::DEFAULT_PREFIX . $key, self::DEFAULT_OPTIONS[ $key ] );
		if ( ! empty( $option ) ) {
			update_option( self::DEFAULT_PREFIX . $key, $value );
		}
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
