<?php

if ( ! function_exists( 'storefront_credit' ) ) {
	/**
	 * Display the theme credit
	 *
	 * @since  1.0.0
	 * @return void
	 */
	function storefront_credit() {
		$links_output = '';

		$links_output = apply_filters( 'storefront_credit_links_output', $links_output );
		?>
		<div class="site-info">
			<?php echo esc_html( apply_filters( 'storefront_copyright_text', $content = '&copy; ' . get_bloginfo( 'name' ) . ' ' . gmdate( 'Y' ) ) ); ?>

		</div><!-- .site-info -->
		<?php
	}
}

function commit_product_summary() {

	$commit_url = "https://api.github.com/repos/KokkieH/Advent-of-Code-2021/commits/eb1d6e113014a1c6fbfc0c4b8e7420b29d98d131";
	$commit_request = wp_remote_get( $commit_url );
	if ( is_wp_error( $commit_request ) ) {
		return false;
	}

	$commit_body = wp_remote_retrieve_body( $commit_request );

	$commit_data = json_decode( $commit_body );
	
	if ( ! empty( $commit_data ) ) {
		echo '<h3>Commit hash</h3>';
		echo '<a href="' . $commit_data->html_url . '">' . substr($commit_data->sha, 0, 7) . '</a>';
		echo '<h3>Commit Author</h3>';
		echo '<a href="' . $commit_data->author->html_url . '">' . $commit_data->commit->author->name . '</a>';
		echo '<h3>Commit message</h3>';
		echo  $commit_data->commit->message;
	}
}

add_action( 'woocommerce_single_product_summary', 'commit_product_summary' );

?>