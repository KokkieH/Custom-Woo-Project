<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class KokkieH_Admin {
    private const SETTINGS_SECTION = 'kokkieh-gh-settings-section';
    private const PAGE_SLUG        = 'gh-commits-page-slug';

    public function __construct() {
        // Register Settings
        add_action( 'admin_init', array( $this, 'register_settings' ) );

        // Add a menu item
        add_action('admin_menu', array( $this, 'register_menu' ), 100);

        // Enqueue CSS
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
    }
    
    public function register_menu() {
        add_menu_page(
            __( 'GH Commits - Settings', 'kokkieh' ), // Page's title (see browser's tab)
            __( 'GH Commits', 'kokkieh' ), // Menu item's name
            'manage_options', // capability
            self::PAGE_SLUG, // page slug
            array( $this, 'render_settings_page' ), // render callback
            plugins_url( 'gh-commit-widget/assets/images/GitHub-Mark-Light-120px-plus.png' ), // icon
            6 // position in the menu
        );
    }

    public function render_settings_page() {
        ?>
        <form method="POST" action="options.php">
        <?php
            settings_fields( self::PAGE_SLUG );
            do_settings_sections( self::PAGE_SLUG );
            submit_button();
        ?>
        </form>
        <?php
    }

    public function register_settings() {
        // Create a section
        add_settings_section(
            self::SETTINGS_SECTION,
            __( 'GH Commits\' Settings', 'kokkieh' ),
            null,
            self::PAGE_SLUG
        );
    
        // Username
        add_settings_field(
            'kokkieh_gh_username',
            __( 'GH Username', 'my-textdomain' ),
            array( $this, 'render_username'),
            self::PAGE_SLUG,
            self::SETTINGS_SECTION
        );

        // Repo name
        add_settings_field(
            'kokkieh_gh_repo_name',
            __( 'GH Repo name', 'my-textdomain' ),
            array( $this, 'render_repo_name'),
            self::PAGE_SLUG,
            self::SETTINGS_SECTION
        );

        register_setting( self::PAGE_SLUG, 'kokkieh_gh_username' );
        register_setting( self::PAGE_SLUG, 'kokkieh_gh_repo_name' );
    }

    public function render_username() {
        $this->render_option_ui( 'kokkieh_gh_username' );
    }

    public function render_repo_name() {
        $this->render_option_ui( 'kokkieh_gh_repo_name' );
    }

    private function render_option_ui( $option_name ) {
        ?>
            <input type="text"
                id="<?php echo esc_attr( $option_name ); ?>"
                name="<?php echo esc_attr( $option_name ); ?>"
                value="<?php echo get_option( $option_name ); ?>"
            >
        <?php
    }

    public function enqueue_scripts(){
        wp_enqueue_style( 'kokkieh-wp-admin', plugins_url( 'gh-commit-widget/assets/css/admin.css' ) );
    }
}