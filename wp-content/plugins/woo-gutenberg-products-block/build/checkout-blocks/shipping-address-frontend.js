(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[39],{382:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(5),o=i.n(n),l=i(134),c=i(281),d=i(41),r=i(306),a=i(1),p=i(309),h=i(42),b=i(28),u=i(22),g=i(307),m=i(308),w=e=>{let{showCompanyField:t=!1,showApartmentField:i=!1,showPhoneField:n=!1,requireCompanyField:o=!1,requirePhoneField:l=!1}=e;const{defaultAddressFields:c,setShippingFields:d,shippingFields:w,setShippingAsBilling:j,shippingAsBilling:F,setShippingPhone:O}=Object(r.a)(),{dispatchCheckoutEvent:f}=Object(h.a)(),{isEditor:k}=Object(b.a)();Object(s.useEffect)(()=>{n||O("")},[n,O]);const y=Object(s.useMemo)(()=>({company:{hidden:!t,required:o},address_2:{hidden:!i}}),[t,o,i]),C=k?g.a:s.Fragment;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(C,null,Object(s.createElement)(p.a,{id:"shipping",type:"shipping",onChange:e=>{d(e),f("set-shipping-address")},values:w,fields:Object.keys(c),fieldConfig:y}),n&&Object(s.createElement)(m.a,{id:"shipping-phone",isRequired:l,value:w.phone,onChange:e=>{O(e),f("set-phone-number",{step:"shipping"})}})),Object(s.createElement)(u.CheckboxControl,{className:"wc-block-checkout__use-address-for-billing",label:Object(a.__)("Use same address for billing","woo-gutenberg-products-block"),checked:F,onChange:e=>j(e)}))},j=i(267),F={...Object(j.a)({defaultTitle:Object(a.__)("Shipping address","woo-gutenberg-products-block"),defaultDescription:Object(a.__)("Enter the address where you want your order delivered.","woo-gutenberg-products-block")}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}},O=i(158);t.default=Object(l.withFilteredAttributes)(F)(e=>{let{title:t,description:i,showStepNumber:n,children:l,className:a}=e;const{isProcessing:p}=Object(d.b)(),{showShippingFields:h}=Object(r.a)(),{requireCompanyField:b,requirePhoneField:u,showApartmentField:g,showCompanyField:m,showPhoneField:j}=Object(O.b)();return h?Object(s.createElement)(c.a,{id:"shipping-fields",disabled:p,className:o()("wc-block-checkout__shipping-fields",a),title:t,description:i,showStepNumber:n},Object(s.createElement)(w,{requireCompanyField:b,requirePhoneField:u,showApartmentField:g,showCompanyField:m,showPhoneField:j}),l):null})}}]);