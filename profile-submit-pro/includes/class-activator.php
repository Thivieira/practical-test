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

            street varchar(255) NOT NULL,
            street_number varchar(20),
            city varchar(100) NOT NULL,
            state varchar(100),
            postal_code varchar(20),
            country varchar(100) NOT NULL,

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
			'birthdate'         => 'date NOT NULL',
			'street'            => 'varchar(255) NOT NULL',
			'street_number'     => 'varchar(20)',
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

		// Add default options
		foreach ( Settings::DEFAULT_OPTIONS as $key => $value ) {
			Settings::add_option( $key, $value );
		}

		self::create_profile_page();
	}

	private static function create_profile_page() {
		$page_title   = 'Profile';
		$page_content = '[profile_submit_pro page="profile"]';

		// Check if the shortcode exists anywhere on the site
		$shortcode_exists = false;

		// Query for any post or page containing the shortcode
		$query = new \WP_Query(
			array(
				'post_type'      => array( 'post', 'page' ),
				'posts_per_page' => -1, // Check all posts and pages
				'post_status'    => 'any', // Include all statuses (published, drafts, etc.)
				's'              => $page_content, // Search for the shortcode in the content
			)
		);

		// If any posts/pages contain the shortcode, set $shortcode_exists to true
		if ( $query->have_posts() ) {
			$shortcode_exists = true;
		}

		// If the shortcode doesn't exist anywhere, create the profile page
		if ( ! $shortcode_exists ) {
			// Check if the profile page already exists
			$page_check = get_page_by_title( $page_title );

			if ( ! $page_check ) {
				// Create the page with the desired shortcode
				$page = array(
					'post_title'   => $page_title,
					'post_content' => $page_content,
					'post_status'  => 'publish',
					'post_type'    => 'page',
				);
				wp_insert_post( $page );
			}
		}
	}
}
