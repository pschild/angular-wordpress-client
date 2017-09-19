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