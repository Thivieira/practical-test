<?php

namespace ProfileSubmitPro;

class TemplateLoader {

	public static function load_template( $domain, $template ) {
		// Remove leading slash if present
		$template = ltrim( $template, '/' );

		// First try direct path with .php extension
		$template_path = plugin_dir_path( __FILE__ ) . '../templates/' . $domain . '/' . $template . '.php';

		// If not found, try as a directory with index.php
		if ( ! file_exists( $template_path ) ) {
			$template_path = plugin_dir_path( __FILE__ ) . '../templates/' . $domain . '/' . $template . '/index.php';
		}

		include $template_path;
	}

	public static function load_partial( $domain, $partial ) {
		// Remove leading slash if present
		$partial = ltrim( $partial, '/' );

		// First try direct path with .php extension
		$partial_path = plugin_dir_path( __FILE__ ) . '../templates/' . $domain . '/partials/' . $partial . '.php';

		// If not found, try as a directory with index.php
		if ( ! file_exists( $partial_path ) ) {
			$partial_path = plugin_dir_path( __FILE__ ) . '../templates/' . $domain . '/partials/' . $partial . '/index.php';
		}

		require $partial_path;
	}

	public static function load_admin_template( $page ) {
		return self::load_template( 'admin', $page );
	}

	public static function load_admin_partial( $partial ) {
		return self::load_partial( 'admin', $partial );
	}

	public static function load_public_template( $page ) {
		return self::load_template( 'public', $page );
	}

	public static function load_public_partial( $partial ) {
		return self::load_partial( 'public', $partial );
	}
}
