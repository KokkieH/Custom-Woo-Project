<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class KokkieH_REST_API {


    public function __construct() {
        add_action( 'rest_api_init', array( $this, 'register_endpoints' ) );
    }

    public function register_endpoints() {
        register_rest_route(
            'kokkieh', 
            '/commit/(?P<id>\w{40})', 
            array(
                'methods' => 'GET',
                'callback' => array( $this, 'get_commit' ),
            )
        );
    }

    public function get_commit( $data ) {
        $commit_url = $this->get_url( $data['id'] );
        if ( is_wp_error( $commit_url ) ) {
            return false;
        }
        $commit_request = wp_remote_get( $commit_url );
        if ( is_wp_error( $commit_request ) ) {
            return false;
        }

        $commit_body = wp_remote_retrieve_body( $commit_request );
        return json_decode( $commit_body, true );
    }

    private function get_url( $commit_hash ) {
        $username  = get_option( 'kokkieh_gh_username' );
        $repo_name = get_option( 'kokkieh_gh_repo_name' );

        if ( empty( $username ) || empty( $repo_name ) ) {
            return new WP_Error( 'Cannot retrieve username or repo name. Please visit settings page.' );
        }

        return "https://api.github.com/repos/{$username}/{$repo_name}/commits/{$commit_hash}";
    }

}

