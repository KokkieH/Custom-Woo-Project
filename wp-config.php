<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'bd4XkHEjh3U8YdpA0sqJi8WeSnLSL7+lNaHEBEhGNQizaYK6Z/lBatT8ZIlRo0pTfS4R4+x+ZQn023+3wc5YTA==');
define('SECURE_AUTH_KEY',  'jM/2INOoH7BRiEFaiLJaKJKbhIg0T/hVZHZ8LFZpAdRhU4Uk2g5dWDi2XfoIA7MqLjHjjfuH6Y2eLRS1BvsG8A==');
define('LOGGED_IN_KEY',    'UbRNuxnZSD/kI72RkRnS8Bs4BahPHBQjFEVVX/YBweKzQ8IrhwU12wMfn3bG91MIMYyDcXZEmAcsMadesY5pjA==');
define('NONCE_KEY',        'vm3Skt8PpbCdwORcNjoTdfGXcn+YnmrB3g1L5FjpoAjpYC+FH7uuAQVl/LRYF9m0ZYn131ARl9p7jrZMNyBwxA==');
define('AUTH_SALT',        'dCxJBo9/jV0uFsf9NEByN8VJfoPjX8qem8dY8K48cNYZ2fMBG7X1WvR+fUZ/J1rk0WglUAqDwwdFJ6vUiPGRcA==');
define('SECURE_AUTH_SALT', 'c799HHA4R5966ox56TDopfmcch2uBvzzFQP5D8WGZip0KmRKMVDvwK4Fb6JfJSgESUvtbL5z83lwLpwsFXlzQg==');
define('LOGGED_IN_SALT',   'GwdTY/eCdBuslZn1EVMiHqEGlatwezb8urSiUPnqLzsGdW3J7qxccmXD98KTcPAcVwBTf0IV61rDt3Hw3s0p0w==');
define('NONCE_SALT',       'Ei+M75wBzKJRyKA4eSxxPfQnRnvdEMJUS1H7my+8bj9Q7b35fIM/rwGpYEQps7LBNaBy2Z8DdKG8uA4tGiTYSg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
