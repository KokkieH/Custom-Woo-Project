this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-on-sale"]=function(e){function t(t){for(var n,i,l=t[0],u=t[1],a=t[2],b=0,d=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,a||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var u=r[l];0!==c[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},c={32:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var s=u;return o.push([750,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},103:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var n=r(4),c=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:Object(n.getSetting)("default_columns",3)},rows:{type:"number",default:Object(n.getSetting)("default_rows",3)},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}},11:function(e,t){e.exports=window.React},114:function(e,t){},115:function(e,t){e.exports=window.wp.coreData},119:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(3);r(2),t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(o.SelectControl,{label:Object(c.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(c.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(c.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(c.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(c.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(c.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(c.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(c.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},12:function(e,t){e.exports=window.wp.blockEditor},125:function(e,t){},14:function(e,t){e.exports=window.wp.data},15:function(e,t){e.exports=window.wp.apiFetch},172:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),c=Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(n.createElement)("title",null,"Grid Block Preview"),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},20:function(e,t){e.exports=window.wp.compose},22:function(e,t){e.exports=window.regeneratorRuntime},23:function(e,t){e.exports=window.wp.url},24:function(e,t){e.exports=window.wp.blocks},26:function(e,t){e.exports=window.wp.htmlEntities},27:function(e,t){e.exports=window.wp.primitives},28:function(e,t){e.exports=window.moment},3:function(e,t){e.exports=window.wp.components},35:function(e,t){e.exports=window.wp.dataControls},37:function(e,t,r){"use strict";r.d(t,"o",(function(){return o})),r.d(t,"m",(function(){return i})),r.d(t,"l",(function(){return l})),r.d(t,"n",(function(){return u})),r.d(t,"j",(function(){return a})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return d})),r.d(t,"k",(function(){return p})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return f})),r.d(t,"h",(function(){return h})),r.d(t,"a",(function(){return w})),r.d(t,"i",(function(){return O})),r.d(t,"b",(function(){return E}));var n,c=r(4),o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",l=o.pluginUrl+"build/",u=o.buildPhase,a=null===(n=c.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,s=c.STORE_PAGES.checkout.id,b=c.STORE_PAGES.checkout.permalink,d=c.STORE_PAGES.privacy.permalink,p=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),g=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),f=c.STORE_PAGES.cart.permalink,h=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),w=Object(c.getSetting)("allowedCountries",{}),O=Object(c.getSetting)("shippingStates",{}),E=Object(c.getSetting)("allowedStates",{})},39:function(e,t,r){"use strict";r.d(t,"h",(function(){return p})),r.d(t,"e",(function(){return g})),r.d(t,"b",(function(){return f})),r.d(t,"i",(function(){return h})),r.d(t,"f",(function(){return w})),r.d(t,"c",(function(){return O})),r.d(t,"d",(function(){return E})),r.d(t,"g",(function(){return m})),r.d(t,"a",(function(){return j}));var n=r(5),c=r.n(n),o=r(23),i=r(15),l=r.n(i),u=r(7),a=r(4),s=r(37);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=void 0===n?"":n,i=e.queryArgs,a=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=void 0===n?"":n,i=e.queryArgs,l=void 0===i?{}:i,u=s.o.productCount>100,a={per_page:u?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},b=[Object(o.addQueryArgs)("/wc/store/products",d(d({},a),l))];return u&&r.length&&b.push(Object(o.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r,per_page:0})),b}({selected:r,search:c,queryArgs:void 0===i?{}:i});return Promise.all(a.map((function(e){return l()({path:e})}))).then((function(e){return Object(u.uniqBy)(Object(u.flatten)(e),"id").map((function(e){return d(d({},e),{},{parent:0})}))})).catch((function(e){throw e}))},g=function(e){return l()({path:"/wc/store/products/".concat(e)})},f=function(){return l()({path:"wc/store/products/attributes"})},h=function(e){return l()({path:"wc/store/products/attributes/".concat(e,"/terms")})},w=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=Object(a.getSetting)("limitTags",!1),i=[Object(o.addQueryArgs)("wc/store/products/tags",{per_page:c?100:0,orderby:c?"count":"name",order:c?"desc":"asc",search:n})];return c&&r.length&&i.push(Object(o.addQueryArgs)("wc/store/products/tags",{include:r})),i}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return l()({path:e})}))).then((function(e){return Object(u.uniqBy)(Object(u.flatten)(e),"id")}))},O=function(e){return l()({path:Object(o.addQueryArgs)("wc/store/products/categories",d({per_page:0},e))})},E=function(e){return l()({path:"wc/store/products/categories/".concat(e)})},m=function(e){return l()({path:Object(o.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},j=function(e,t){if(!e.title.raw)return e.slug;var r=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(r?"":" - ".concat(e.slug))}},4:function(e,t){e.exports=window.wc.wcSettings},40:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return a}));var n=r(29),c=r.n(n),o=r(22),i=r.n(o),l=r(1),u=function(){var e=c()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(_x){return e.apply(this,arguments)}}(),a=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(l.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},44:function(e,t){e.exports=window.wp.keycodes},45:function(e,t){e.exports=window.wp.escapeHtml},48:function(e,t,r){"use strict";var n=r(0),c=r(1),o=(r(2),r(45));t.a=function(e){var t,r,i,l=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=l).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(c.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(o.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(c.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(o.escapeHTML)(r))):r:Object(c.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},51:function(e,t){e.exports=window.wp.hooks},57:function(e,t){e.exports=window.wp.deprecated},61:function(e,t,r){"use strict";var n=r(5),c=r.n(n),o=r(21),i=r.n(o),l=r(0),u=["srcElement","size"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,o=i()(e,u);return Object(l.isValidElement)(t)?Object(l.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},o)):null}},7:function(e,t){e.exports=window.lodash},70:function(e,t){e.exports=window.wp.dom},750:function(e,t,r){e.exports=r(871)},751:function(e,t){},752:function(e,t,r){"use strict";var n=r(0),c=r(27),o=Object(n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"}),Object(n.createElement)("circle",{cx:"6.5",cy:"6.5",r:"1.5"}),Object(n.createElement)("path",{d:"M8.9 12.55c0 .57.23 1.07.6 1.45l3.5 3.5 3.5-3.5c.37-.37.6-.89.6-1.45 0-1.13-.92-2.05-2.05-2.05-.57 0-1.08.23-1.45.6l-.6.6-.6-.59c-.37-.38-.89-.61-1.45-.61-1.13 0-2.05.92-2.05 2.05z"}));t.a=o},79:function(e,t){e.exports=window.wp.serverSideRender},82:function(e,t){e.exports=window.ReactDOM},85:function(e,t){e.exports=window.wp.viewport},86:function(e,t,r){"use strict";var n=r(5),c=r.n(n),o=r(0),i=r(1),l=(r(2),r(3));function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,c=r.price,u=r.rating,s=r.title;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:s?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return t(a(a({},r),{},{title:!s}))}}),Object(o.createElement)(l.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:c?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:c,onChange:function(){return t(a(a({},r),{},{price:!c}))}}),Object(o.createElement)(l.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:u?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:u,onChange:function(){return t(a(a({},r),{},{rating:!u}))}}),Object(o.createElement)(l.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return t(a(a({},r),{},{button:!n}))}}))}},87:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(7),i=(r(2),r(3));t.a=function(e){var t=e.columns,r=e.rows,l=e.setAttributes,u=e.alignButtons,a=e.minColumns,s=void 0===a?1:a,b=e.maxColumns,d=void 0===b?6:b,p=e.minRows,g=void 0===p?1:p,f=e.maxRows,h=void 0===f?6:f;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(c.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(o.clamp)(e,s,d);l({columns:Number.isNaN(t)?"":t})},min:s,max:d}),Object(n.createElement)(i.RangeControl,{label:Object(c.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(e){var t=Object(o.clamp)(e,g,h);l({rows:Number.isNaN(t)?"":t})},min:g,max:h}),Object(n.createElement)(i.ToggleControl,{label:Object(c.__)("Align Last Block","woo-gutenberg-products-block"),help:u?Object(c.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(c.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:u,onChange:function(){return l({alignButtons:!u})}}))}},871:function(e,t,r){"use strict";r.r(t);var n=r(5),c=r.n(n),o=r(0),i=r(1),l=r(24),u=r(7),a=r(61),s=r(752),b=r(16),d=r.n(b),p=r(17),g=r.n(p),f=r(18),h=r.n(f),w=r(19),O=r.n(w),E=r(9),m=r.n(E),j=r(3),y=r(12),v=r(79),x=r.n(v),_=(r(2),r(86)),k=r(87),P=r(91),S=r(119),C=r(172),R=r(4);var A=function(){return Object(o.createElement)(j.Placeholder,{icon:Object(o.createElement)(a.a,{srcElement:s.a}),label:Object(i.__)("On Sale Products","woo-gutenberg-products-block"),className:"wc-block-product-on-sale"},Object(i.__)("This block shows on-sale products. There are currently no discounted products in your store.","woo-gutenberg-products-block"))},T=function(e){h()(c,e);var t,r,n=(t=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m()(t);if(r){var c=m()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return O()(this,e)});function c(){return d()(this,c),n.apply(this,arguments)}return g()(c,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,n=t.categories,c=t.catOperator,l=t.columns,u=t.contentVisibility,a=t.rows,s=t.orderby,b=t.alignButtons;return Object(o.createElement)(y.InspectorControls,{key:"inspector"},Object(o.createElement)(j.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(k.a,{columns:l,rows:a,alignButtons:b,setAttributes:r,minColumns:Object(R.getSetting)("min_columns",1),maxColumns:Object(R.getSetting)("max_columns",6),minRows:Object(R.getSetting)("min_rows",1),maxRows:Object(R.getSetting)("max_rows",6)})),Object(o.createElement)(j.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(_.a,{settings:u,onChange:function(e){return r({contentVisibility:e})}})),Object(o.createElement)(j.PanelBody,{title:Object(i.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(o.createElement)(S.a,{setAttributes:r,value:s})),Object(o.createElement)(j.PanelBody,{title:Object(i.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(o.createElement)(P.a,{selected:n,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));r({categories:t})},operator:c,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.name;return t.isPreview?C.a:Object(o.createElement)(o.Fragment,null,this.getInspectorControls(),Object(o.createElement)(j.Disabled,null,Object(o.createElement)(x.a,{block:r,attributes:t,EmptyResponsePlaceholder:A})))}}]),c}(o.Component),B=(r(751),r(103));function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(l.registerBlockType)("woocommerce/product-on-sale",{title:Object(i.__)("On Sale Products","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(a.a,{srcElement:s.a}),foreground:"#7f54b3"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of products currently on sale.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:G(G({},B.a),{},{orderby:{type:"string",default:"date"}}),example:{attributes:{isPreview:!0}},transforms:{from:[{type:"block",blocks:Object(u.without)(B.b,"woocommerce/product-on-sale"),transform:function(e){return Object(l.createBlock)("woocommerce/product-on-sale",e)}}]},edit:function(e){return Object(o.createElement)(T,e)},save:function(){return null}})},90:function(e,t){e.exports=window.wp.date},91:function(e,t,r){"use strict";var n=r(10),c=r.n(n),o=r(0),i=r(1),l=(r(2),r(46)),u=r(3),a=r(29),s=r.n(a),b=r(16),d=r.n(b),p=r(17),g=r.n(p),f=r(13),h=r.n(f),w=r(18),O=r.n(w),E=r(19),m=r.n(E),j=r(9),y=r.n(j),v=r(22),x=r.n(v),_=r(20),k=r(39),P=r(40);var S=Object(_.createHigherOrderComponent)((function(e){return function(t){O()(l,t);var r,n,i=(r=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y()(r);if(n){var c=y()(this).constructor;e=Reflect.construct(t,arguments,c)}else e=t.apply(this,arguments);return m()(this,e)});function l(){var e;return d()(this,l),(e=i.apply(this,arguments)).state={error:null,loading:!1,categories:[]},e.loadCategories=e.loadCategories.bind(h()(e)),e}return g()(l,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var e=this;this.setState({loading:!0}),Object(k.c)().then((function(t){e.setState({categories:t,loading:!1,error:null})})).catch(function(){var t=s()(x.a.mark((function t(r){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.a)(r);case 2:n=t.sent,e.setState({categories:[],loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(_x){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,i=t.categories;return Object(o.createElement)(e,c()({},this.props,{error:r,isLoading:n,categories:i}))}}]),l}(o.Component)}),"withCategories"),C=r(48),R=r(6),A=r.n(R),T=(r(125),function(e){var t=e.categories,r=e.error,n=e.isLoading,a=e.onChange,s=e.onOperatorChange,b=e.operator,d=e.selected,p=e.isCompact,g=e.isSingle,f=e.showReviewCount,h={clear:Object(i.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(i.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(i.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(i.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(i.sprintf)(
/* translators: %d is the count of selected categories. */
Object(i._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(i.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(o.createElement)(C.a,{error:r}):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.b,{className:"woocommerce-product-categories",list:t,isLoading:n,selected:d.map((function(e){return t.find((function(t){return t.id===e}))})).filter(Boolean),onChange:a,renderItem:function(e){var t=e.item,r=e.search,n=e.depth,u=void 0===n?0:n,a=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name,s=f?Object(i.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
Object(i._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",t.review_count,"woo-gutenberg-products-block"),a,t.review_count):Object(i.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of products for the item. */
Object(i._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,"woo-gutenberg-products-block"),a,t.count),b=f?Object(i.sprintf)(
/* translators: %d is the count of reviews. */
Object(i._n)("%d review","%d reviews",t.review_count,"woo-gutenberg-products-block"),t.review_count):Object(i.sprintf)(
/* translators: %d is the count of products. */
Object(i._n)("%d product","%d products",t.count,"woo-gutenberg-products-block"),t.count);return Object(o.createElement)(l.c,c()({className:A()("woocommerce-product-categories__item","has-count",{"is-searching":r.length>0,"is-skip-level":0===u&&0!==t.parent})},e,{countLabel:b,"aria-label":s}))},messages:h,isCompact:p,isHierarchical:!0,isSingle:g}),!!s&&Object(o.createElement)("div",{hidden:d.length<2},Object(o.createElement)(u.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching","woo-gutenberg-products-block"),help:Object(i.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:b,onChange:s,options:[{label:Object(i.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(i.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});T.defaultProps={operator:"any",isCompact:!1,isSingle:!1},t.a=S(T)}});