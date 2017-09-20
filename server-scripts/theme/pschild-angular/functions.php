<?php
/*
 *  Author: Philippe Schild
 *  Custom functions, support, custom post types and more.
 */

// custom image sizes
add_image_size('image_grid_landscape', 0, 350);
add_image_size('image_grid_portrait', 350, 0);

// remove admin bar in frontend
function remove_admin_bar() {
    return false;
}
add_filter('show_admin_bar', 'remove_admin_bar');

// add menus
function register_menus() {
    register_nav_menus(
        array(
            'main_navigation' => __( 'Main Navigation' )
        )
    );
}
add_action('init', 'register_menus');

// custom routes
include_once 'includes/menu-routes-controller.php';

function register_menu_routes() {
    $controller = new MenuRoutesController();
    $controller->register_routes();
}
add_action('rest_api_init', 'register_menu_routes');