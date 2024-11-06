<?php
namespace ProfileSubmitPro;

class Activator {

	public static function activate() {
		global $wpdb;
		$table_name      = $wpdb->prefix . Settings::DEFAULT_PREFIX . 'submissions';
		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE IF NOT EXISTS $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            name varchar(255) NOT NULL,
            email varchar(255) NOT NULL,
            username varchar(255) NOT NULL,
            phone varchar(255),
            birthdate datetime NOT NULL,

            street varchar(255) NOT NULL,       -- Street address
            street_number varchar(20),          -- Apartment, suite, or house number
            neighborhood varchar(100),          -- Neighborhood or district
            city varchar(100) NOT NULL,         -- City name
            state varchar(100),                 -- State or province
            postal_code varchar(20),            -- Postal or ZIP code
            country varchar(100) NOT NULL,      -- Country name

            interests text,
            cv text,

            wordpress_user_id mediumint(9),

            public_key varchar(255) NOT NULL UNIQUE,

            submitted_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
            PRIMARY KEY  (id)
        ) $charset_collate;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		// Define expected columns and their SQL types
		$expected_columns = array(
			'id'                => 'mediumint(9) NOT NULL AUTO_INCREMENT',
			'name'              => 'varchar(255) NOT NULL',
			'email'             => 'varchar(255) NOT NULL',
			'username'          => 'varchar(255) NOT NULL',
			'phone'             => 'varchar(255)',
			'birthdate'         => 'datetime NOT NULL',
			'street'            => 'varchar(255) NOT NULL',
			'street_number'     => 'varchar(20)',
			'neighborhood'      => 'varchar(100)',
			'city'              => 'varchar(100) NOT NULL',
			'state'             => 'varchar(100)',
			'postal_code'       => 'varchar(20)',
			'country'           => 'varchar(100) NOT NULL',
			'interests'         => 'text',
			'cv'                => 'text',
			'wordpress_user_id' => 'mediumint(9)',
			'public_key'        => 'varchar(255) NOT NULL UNIQUE',
			'submitted_at'      => 'datetime DEFAULT CURRENT_TIMESTAMP NOT NULL',
		);

		if ( $wpdb->get_var( "SHOW TABLES LIKE '$table_name'" ) === $table_name ) {
			// Check and update the table structure if necessary
			$existing_columns = $wpdb->get_col( "DESC $table_name", 0 );
			
			// Drop columns that are not in expected_columns and are NULL
			foreach ( $existing_columns as $column ) {
				if ( ! array_key_exists( $column, $expected_columns ) ) {
					$wpdb->query( "ALTER TABLE $table_name DROP COLUMN $column;" );
				}
			}

			foreach ( $expected_columns as $column => $type ) {
				if ( ! in_array( $column, $existing_columns ) ) {
					$wpdb->query( "ALTER TABLE $table_name ADD $column $type;" );
				}
			}
		} else {
			dbDelta( $sql );
		}

		Settings::add_option( 'version', '1.0' );
		Settings::add_option( 'clean_uninstall', Settings::DEFAULT_OPTIONS['clean_uninstall'] );
		Settings::add_option( 'email_template', Settings::DEFAULT_OPTIONS['email_template'] );
		Settings::add_option( 'notification_email', Settings::DEFAULT_OPTIONS['notification_email'] );
		Settings::add_option( 'daily_submission_limit', Settings::DEFAULT_OPTIONS['daily_submission_limit'] );
		Settings::add_option( 'notification_email_from', Settings::DEFAULT_OPTIONS['notification_email_from'] );
	}
}
