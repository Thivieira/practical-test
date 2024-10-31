<?php

namespace ProfileSubmitPro;

class TemplateLoader {

	public static function load_template( $domain, $template ) {
		include plugin_dir_path( __FILE__ ) . '../templates/' . $domain . '/' . $template . '.php';
	}

	public static function load_partial( $domain, $partial ) {
		include plugin_dir_path( __FILE__ ) . '../templates/' . $domain . '/partials/' . $partial . '.php';
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
