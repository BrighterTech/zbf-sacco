(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{324:function(t,n,e){"use strict";var r=e(2),l=e(325),o=e(44),c=e(28),v=e(70),f=e(121);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=o(this),e=c(n.length),r=f(n,0);return r.length=l(r,n,n,e,0,void 0===t?1:v(t)),r}})},325:function(t,n,e){"use strict";var r=e(97),l=e(28),o=e(37),c=function(t,n,source,e,v,f,d,h){for(var element,k=v,C=0,m=!!d&&o(d,h,3);C<e;){if(C in source){if(element=m?m(source[C],C,n):source[C],f>0&&r(element))k=c(t,n,element,l(element.length),k,f-1)-1;else{if(k>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[k]=element}k++}C++}return k};t.exports=c},327:function(t,n,e){"use strict";var r=e(2),l=e(159);r({target:"String",proto:!0,forced:e(160)("small")},{small:function(){return l(this,"small","","")}})},329:function(t,n,e){"use strict";var r=e(2),l=e(159);r({target:"String",proto:!0,forced:e(160)("link")},{link:function(t){return l(this,"a","href",t)}})},565:function(t,n,e){t.exports=e.p+"img/white-logo.482b103.png"},599:function(t,n,e){"use strict";e.r(n);var r={name:"Header2",data:function(){return{isActive:!1}},methods:{toggleClass:function(t){this.isActive=!this.isActive}}},l=e(43),o=e(58),c=e.n(o),v=e(601),f=e(573),d=e(382),h=e(322),k=e(313),C=e(574),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("v-app-bar",{staticClass:"app-header position-relative bg-dark header2",attrs:{app:"",flat:""}},[r("v-container",{staticClass:"py-0 fill-height"},[r("div",{staticClass:"logo"},[r("NLink",{attrs:{to:"/"}},[r("v-img",{attrs:{src:e(565),alt:"logo"}})],1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"d-block d-md-none",attrs:{color:"white",text:""},on:{click:function(n){return t.toggleClass()}}},[r("v-app-bar-nav-icon",{staticClass:"white--text"})],1),t._v(" "),r("div",{staticClass:"navigation",class:[t.isActive?"d-block":""],on:{click:function(n){t.isActive=!t.isActive}}},[r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item",attrs:{text:""}},[r("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/"}},[t._v(" Home ")])],1),t._v(" "),r("li",{staticClass:"nav-item",attrs:{text:""}},[r("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/about"}},[t._v(" About Me ")])],1),t._v(" "),r("li",{staticClass:"nav-item",attrs:{text:""}},[r("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/work"}},[t._v(" Work ")])],1),t._v(" "),r("li",{staticClass:"nav-item",attrs:{text:""}},[r("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/services"}},[t._v(" Services ")])],1),t._v(" "),r("li",{staticClass:"nav-item",attrs:{text:""}},[r("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/freebies"}},[t._v(" Freebies ")])],1)])]),t._v(" "),r("v-btn",{staticClass:"d-none d-lg-flex btn-custom-nm ml-5",attrs:{nuxt:"",depressed:"",color:"primary",to:"/",elevation:"0"}},[t._v("\n        Hire Me\n      ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VAppBar:v.a,VAppBarNavIcon:f.a,VBtn:d.a,VContainer:h.a,VImg:k.a,VSpacer:C.a})}}]);