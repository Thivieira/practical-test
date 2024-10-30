<?php

/**
 * Custom autoloader for ProfileSubmitPro plugin
 */
spl_autoload_register(function ($class) {
    // Plugin namespace prefix
    $prefix = 'ProfileSubmitPro\\';

    // Base directory for the namespace prefix
    $base_dir = plugin_dir_path(__FILE__) . 'includes/';

    // Check if the class uses the namespace prefix
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        // Class not in our namespace, move to the next registered autoloader
        return;
    }

    // Get the relative class name
    $relative_class = substr($class, $len);

    // Convert namespace separators to directory separators
    // Also convert PascalCase to kebab-case with 'class-' prefix
    $file_path = '';
    $last_ns_pos = strrpos($relative_class, '\\');

    if ($last_ns_pos !== false) {
        // Handle subdirectories
        $namespace = substr($relative_class, 0, $last_ns_pos);
        $class_name = substr($relative_class, $last_ns_pos + 1);
        $file_path = str_replace('\\', '/', strtolower($namespace)) . '/';
    } else {
        $class_name = $relative_class;
    }

    // Convert PascalCase class name to WordPress-style filename
    $file_name = 'class-' . strtolower(preg_replace('/(?<!^)[A-Z]/', '-$0', $class_name));

    // Build full file path
    $file = $base_dir . $file_path . $file_name . '.php';

    // If the file exists, require it
    if (file_exists($file)) {
        require $file;
    }
});
