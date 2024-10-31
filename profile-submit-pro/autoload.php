<?php

/**
 * Custom autoloader for ProfileSubmitPro plugin
 */
spl_autoload_register(
	function ( $class ) {
		// Plugin namespace prefix
		$prefix = 'ProfileSubmitPro\\';

		// Base directory for the namespace prefix
		$base_dir = plugin_dir_path( __FILE__ ) . 'includes/';

		// Check if the class uses the namespace prefix
		$len = strlen( $prefix );
		if ( strncmp( $prefix, $class, $len ) !== 0 ) {
			return;
		}

		// Get the relative class name
		$relative_class = substr( $class, $len );

		// Convert class name to file name
		$file_name = 'class';
		if ( $relative_class !== 'ProfileSubmitPro' ) {
			$file_name .= '-' . strtolower( preg_replace( '/(?<!^)[A-Z]/', '-$0', $relative_class ) );
		} else {
			$file_name .= '-profile-submit-pro';
		}

		// Build full file path
		$file = $base_dir . $file_name . '.php';

		// If the file exists, require it
		if ( file_exists( $file ) ) {
			require $file;
		}
	}
);
