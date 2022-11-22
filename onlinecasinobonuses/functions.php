<?php

// Wordpress settings
add_theme_support('menus');
add_theme_support('custom-logo');

// Load main JS file
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('custom.min.js', get_template_directory_uri() . '/scripts.min.js', array('jquery'));
});

// Allow to upload SVG
function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');

// Remove "JQMIGRATE: Migrate is installed, version 1.4.1" notification from console
add_action('wp_default_scripts', function ($scripts) {
    if (!empty($scripts->registered['jquery'])) {
        $scripts->registered['jquery']->deps = array_diff($scripts->registered['jquery']->deps, array('jquery-migrate'));
    }
});

// Custom icons nav menu
add_filter('wp_nav_menu_objects', 'my_wp_nav_menu_objects', 10, 2);

function my_wp_nav_menu_objects( $items, $args ) {

    // loop
    foreach( $items as &$item ) {

        // vars
        $icon = get_field('icon', $item);

        // append icon
        if( $icon ) {

            $item->title .= $icon;
        }
    }

    // return
    return $items;
}

// Add field for SVG logo
function my_register_additional_customizer_settings( $wp_customize ) {
    $wp_customize->add_setting(
        'my_company_logo',
        array(
            'default' => '',
            'type' => 'option', // you can also use 'theme_mod'
            'capability' => 'edit_theme_options'
        )
    );
    $wp_customize->add_control( new WP_Customize_Control(
        $wp_customize,
        'my_company_logo',
        array(
            'label'      => __( 'Logo', 'textdomain' ),
            'settings'   => 'my_company_logo',
            'priority'   => 1,
            'section'    => 'title_tagline',
            'type'       => 'text',
        )
    ) );
}
add_action( 'customize_register', 'my_register_additional_customizer_settings' );


// Hide admin bar
show_admin_bar(false);

?>

