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

function kokkie_product_summary() {
    ?>
	<div>Hello world</div>
	<?php
}
add_action( 'woocommerce_single_product_summary', 'kokkie_product_summary' );

?>