<?php
/*
Plugin Name: Support for Custom Post Templates in ACF
Description: Adds a post template location rule to ACF for themes using the Custom Post Template plugin. Edited version, based on https://github.com/lukechapman/custom-post-template-support-for-acf
Version: 1.0
Author: Philippe Schild
Author URI: www.pschild.de
*/

// Get post templates
function get_post_templates(){
  $theme = wp_get_theme();
  $post_templates = array();
  $files = (array) $theme->get_files( 'php', 1 );
  foreach ( $files as $file => $full_path ) {
  	$headers = get_file_data( $full_path, array( 'Template Name' => 'Template Name', 'Template Post Type' => 'Template Post Type' ) );
    if ( $headers['Template Post Type'] !== 'post' )
    continue;
    $post_templates[ $file ] = $headers['Template Name'];
  }
  return $post_templates;
} 

// Add custom post template rule to dropdown
add_filter('acf/location/rule_types', 'acf_location_rules_types');
function acf_location_rules_types( $choices ){
  $choices['Post']['cpt'] = 'Post-Vorlage';
  return $choices;
}

// Add custom post template names to value dropdown
add_filter('acf/location/rule_values/cpt', 'acf_location_rules_values_cpt');
function acf_location_rules_values_cpt( $choices ){
  $templates = get_post_templates();
    foreach($templates as $k => $v){
	  $choices[$k] = $v;
	}
  return $choices;
}

// Match location rule and show ACFs
add_filter('acf/location/rule_match/cpt', 'acf_location_rules_match_cpt', 10, 3);
function acf_location_rules_match_cpt( $match, $rule, $options ){
  global $post;
  if(isset($options['cpt'])){
    $current_post_template = $options['cpt'];	
  }else{
    $current_post_template = get_post_meta($post->ID,'_wp_page_template',true);
  }
  $selected_post_template = $rule['value'];
  if($rule['operator'] == "=="){
  	$match = ( $current_post_template == $selected_post_template );
  }elseif($rule['operator'] == "!="){
  	$match = ( $current_post_template != $selected_post_template );
  }
  return $match;
}
?>