<?php
/**
 * Plugin Name:       GitHub Commit Widget
 * Plugin URI:        https://github.com/KokkieH/Custom-Woo-Project
 * Description:       Block widget to embed GitHub commits for a particular repository
 * Version:           1.0.0
 * Requires at least: 5.3
 * Requires PHP:      5.6
 * Author:            Herman Kok
 * Author URI:        https://kokkieh.blog/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pdev
 * Domain Path:       /public/lang
 */

function commit_product_summary() {
	$commit_hash = 'eb1d6e113014a1c6fbfc0c4b8e7420b29d98d131';
	$commit_url = site_url( '/wp-json/kokkieh/commit/' . $commit_hash );

	$commit_request = wp_remote_get( $commit_url );
	if ( is_wp_error( $commit_request ) ) {
		return false;
	}

	$commit_body = wp_remote_retrieve_body( $commit_request );

	$commit_data = json_decode( $commit_body );
	
	if ( ! empty( $commit_data ) ) {
		// echo '<h3>Commit hash</h3>';
		// echo '<a href="' . $commit_data->html_url . '">' . substr($commit_data->sha, 0, 7) . '</a>';
		// echo '<h3>Commit Author</h3>';
		// echo '<a href="' . $commit_data->author->html_url . '">' . $commit_data->commit->author->name . '</a>';
		// echo '<h3>Commit message</h3>';
		// echo  $commit_data->commit->message;
	}
}

// shows commit data on WooCommerce products
add_action( 'woocommerce_single_product_summary', 'commit_product_summary' );

function kokkieh_gh_commit_register_block() {
        // automatically load dependencies and version
        $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
        wp_register_script(
            'kokkieh-github-commit-block',
            plugins_url( 'build/index.js', __FILE__ ),
            $asset_file['dependencies'],
            $asset_file['version']
        );
     
        register_block_type( 'kokkieh/github-commit-block', array(
            'api_version' => 2,
            'editor_script' => 'kokkieh-github-commit-block',
            'render_callback' => 'commit_product_summary',
        ) );
}
add_action( 'init', 'kokkieh_gh_commit_register_block' );

require_once __DIR__ . '/include/class-rest-api.php';
new KokkieH_REST_API();



