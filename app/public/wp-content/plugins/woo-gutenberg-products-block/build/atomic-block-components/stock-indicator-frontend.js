(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[16],{337:function(o,c){},380:function(o,c,t){"use strict";t.r(c);var n=t(5),e=t.n(n),r=t(1),s=(t(8),t(7)),a=t.n(s),i=t(84),u=t(154),k=(t(337),function(o){return Object(r.sprintf)(
/* translators: %d stock amount (number of items in stock for product) */
Object(r.__)("%d left in stock","woo-gutenberg-products-block"),o)});c.default=Object(u.withProductDataContext)((function(o){var c,t=o.className,n=Object(i.useInnerBlockLayoutContext)().parentClassName,s=Object(i.useProductDataContext)().product;if(!s.id||!s.is_purchasable)return null;var u=!!s.is_in_stock,b=s.low_stock_remaining,d=s.is_on_backorder;return React.createElement("div",{className:a()(t,"wc-block-components-product-stock-indicator",(c={},e()(c,"".concat(n,"__stock-indicator"),n),e()(c,"wc-block-components-product-stock-indicator--in-stock",u),e()(c,"wc-block-components-product-stock-indicator--out-of-stock",!u),e()(c,"wc-block-components-product-stock-indicator--low-stock",!!b),e()(c,"wc-block-components-product-stock-indicator--available-on-backorder",!!d),c))},b?k(b):function(o,c){return c?Object(r.__)("Available on backorder","woo-gutenberg-products-block"):o?Object(r.__)("In Stock","woo-gutenberg-products-block"):Object(r.__)("Out of Stock","woo-gutenberg-products-block")}(u,d))}))}}]);