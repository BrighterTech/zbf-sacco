(window.webpackJsonp=window.webpackJsonp||[]).push([[51,24,25,35,39],{323:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return d}));var o=n(326),r=n(4),c=Object(r.f)("v-card__actions"),l=Object(r.f)("v-card__subtitle"),v=Object(r.f)("v-card__text"),d=Object(r.f)("v-card__title");o.a},324:function(t,e,n){"use strict";var o=n(2),r=n(325),c=n(44),l=n(28),v=n(70),d=n(121);o({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=l(e.length),o=d(e,0);return o.length=r(o,e,e,n,0,void 0===t?1:v(t)),o}})},325:function(t,e,n){"use strict";var o=n(97),r=n(28),c=n(37),l=function(t,e,source,n,v,d,h,m){for(var element,f=v,C=0,x=!!h&&c(h,m,3);C<n;){if(C in source){if(element=x?x(source[C],C,e):source[C],d>0&&o(element))f=l(t,e,element,r(element.length),f,d-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[f]=element}f++}C++}return f};t.exports=l},326:function(t,e,n){"use strict";n(14),n(13),n(17),n(25),n(16),n(26);var o=n(3),r=(n(67),n(324),n(344),n(335)),c=n(338),l=n(328),v=n(42);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(v.a)(c.a,l.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r.a.options.computed.classes.call(this))},styles:function(){var style=h({},r.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},327:function(t,e,n){"use strict";var o=n(2),r=n(159);o({target:"String",proto:!0,forced:n(160)("small")},{small:function(){return r(this,"small","","")}})},329:function(t,e,n){"use strict";var o=n(2),r=n(159);o({target:"String",proto:!0,forced:n(160)("link")},{link:function(t){return r(this,"a","href",t)}})},340:function(t,e,n){t.exports=n.p+"img/zbflogo.f4a1992.png"},345:function(t,e,n){"use strict";n.r(e);var o={name:"Header2",data:function(){return{isActive:!1}},methods:{toggleClass:function(t){this.isActive=!this.isActive}}},r=n(43),c=n(58),l=n.n(c),v=n(601),d=n(573),h=n(382),m=n(322),f=n(313),C=n(574),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-app-bar",{staticClass:"app-header position-relative bg-dark header2",attrs:{app:"",flat:""}},[o("v-container",{staticClass:"py-0 fill-height"},[o("div",{staticClass:"logo",staticStyle:{width:"155px"}},[o("NLink",{attrs:{to:"/"}},[o("v-img",{attrs:{src:n(340),alt:"banner"}})],1)],1),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"d-block d-md-none",attrs:{color:"white",text:""},on:{click:function(e){return t.toggleClass()}}},[o("v-app-bar-nav-icon",{staticClass:"white--text"})],1),t._v(" "),o("div",{staticClass:"navigation",class:[t.isActive?"d-block":""],on:{click:function(e){t.isActive=!t.isActive}}},[o("ul",{staticClass:"navbar-nav"},[o("li",{staticClass:"nav-item",attrs:{text:""}},[o("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/"}},[t._v(" Home ")])],1),t._v(" "),o("li",{staticClass:"nav-item",attrs:{text:""}},[o("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/about"}},[t._v(" About Us ")])],1),t._v(" "),o("li",{staticClass:"nav-item",attrs:{text:""}},[o("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/investments"}},[t._v(" Investments ")])],1),t._v(" "),o("li",{staticClass:"nav-item",attrs:{text:""}},[o("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/ourprojects"}},[t._v(" Projects ")])],1),t._v(" "),o("li",{staticClass:"nav-item",attrs:{text:""}},[o("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/team"}},[t._v(" Our Team ")])],1),t._v(" "),o("li",{staticClass:"nav-item",attrs:{text:""}},[o("n-link",{staticClass:"nav-link",attrs:{nuxt:"",to:"/blogs"}},[t._v(" Blogs")])],1)])]),t._v(" "),o("v-btn",{staticClass:"d-none d-lg-flex btn-custom-nm ml-5",attrs:{nuxt:"",depressed:"",color:"primary","background-color":"#000000 !important","border-color":"#000000 !important",to:"/contactus",elevation:"0"}},[t._v("\n        Contact Us\n      ")]),t._v(" "),o("v-btn",{staticClass:"d-none d-lg-flex btn-custom-nm ml-5",attrs:{nuxt:"",depressed:"",color:"primary","background-color":"#000000 !important","border-color":"#000000 !important",to:"/registration",elevation:"0"}},[t._v("\n        Join Now\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:v.a,VAppBarNavIcon:d.a,VBtn:h.a,VContainer:m.a,VImg:f.a,VSpacer:C.a})},346:function(t,e,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("197fcea4",content,!0,{sourceMap:!1})},347:function(t,e,n){var o=n(34)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),o.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:8px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--x-small .v-icon{font-size:10px;height:10px;width:10px}.v-chip.v-size--small{border-radius:11px;font-size:12px;height:22px}.v-chip.v-size--small .v-icon{font-size:12px;height:12px;width:12px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--default .v-icon{font-size:14px;height:14px;width:14px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--large .v-icon{font-size:16px;height:16px;width:16px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}.v-chip.v-size--x-large .v-icon{font-size:18px;height:18px;width:18px}',""]),t.exports=o},352:function(t,e,n){"use strict";n(14),n(13),n(25),n(16),n(26);var o=n(9),r=n(3),c=(n(17),n(346),n(42)),l=n(343),v=n(331),d=n(158),h=n(351),m=n(77),f=n(333),C=n(328),x=n(337),_=n(19);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(d.a,x.a,C.a,m.a,Object(h.a)("chipGroup"),Object(f.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return y(y(y(y({"v-chip":!0},C.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(C.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(o.a)(e,2),r=n[0],c=n[1];t.$attrs.hasOwnProperty(r)&&Object(_.a)(r,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(v.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(v.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,data=n.data;data.attrs=y(y({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(r,data),e)}})},366:function(t,e,n){t.exports=n.p+"img/img1.1136370.jpg"},367:function(t,e,n){t.exports=n.p+"img/img2.f39ec2b.jpg"},368:function(t,e,n){t.exports=n.p+"img/img3.0d22601.jpg"},369:function(t,e,n){t.exports=n.p+"img/img4.88f86ef.jpg"},370:function(t,e,n){t.exports=n.p+"img/img5.014679b.jpg"},371:function(t,e,n){t.exports=n.p+"img/img6.9816e8c.jpg"},372:function(t,e,n){t.exports=n.p+"img/img1.c060708.jpg"},373:function(t,e,n){t.exports=n.p+"img/img2.339b6fd.jpg"},374:function(t,e,n){t.exports=n.p+"img/img3.92a4a81.jpg"},376:function(t,e,n){t.exports=n.p+"img/t1.51b60a5.jpg"},377:function(t,e,n){t.exports=n.p+"img/t2.d84df4e.jpg"},378:function(t,e,n){t.exports=n.p+"img/t3.ff65e62.jpg"},386:function(t,e,n){"use strict";n.r(e);var o={name:"Feature1",data:function(){return{}},methods:{}},r=n(43),c=n(58),l=n.n(c),v=n(326),d=n(323),h=n(352),m=n(319),f=n(322),C=n(321),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"feature1-component bg-extra-light mini-spacer",attrs:{id:"about"}},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"10",lg:"7"}},[n("div",{staticClass:"text-center"},[n("v-chip",{attrs:{small:"",color:"error","text-color":"white"}},[t._v("\n                ZBF SACCO\n              ")]),t._v(" "),n("h2",{staticClass:"section-title font-weight-medium"},[t._v("\n                About Us\n              ")]),t._v(" "),n("p",{staticClass:"font-18"},[t._v("\n               Zimbabwe Business Forum Savings and Credit Cooperative was founded in 2021 out of a realisation that for us as black Zimbabweans locally and in the Diaspora needed to come together and contribute money to empower each other. Members contribute a minimum monthly fee of 30 USD. This money is invested on the stock exchange. After one year of contributions a member is then allowed to borrow.\n              ")])],1)])],1),t._v(" "),n("v-row",{staticClass:"mt-13",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{attrs:{elevation:"0"}},[n("v-card-text",[n("div",{staticClass:"icon-round bg-light-info"},[n("i",{staticClass:"mdi mdi-star"})]),t._v(" "),n("h5",{staticClass:"font-weight-medium font-18"},[t._v("Primary Objective")]),t._v(" "),n("p",{staticClass:"mt-10 mb-8"},[t._v("\n                 ZIMBABWE BUSINESS FORUM SAVINGS AND CREDIT UNION’s primary\nobjective shall be to save money from member contributions for investing in new\nprojects for the benefit of and improve the standards of living and livelihoods of its\nmembers\n                ")]),t._v(" "),n("a",{staticClass:"\n                    text-themecolor\n                    linking\n                    text-decoration-none\n                    d-flex\n                    align-center\n                  ",attrs:{href:"#"}},[t._v("\n                  Explore More "),n("i",{staticClass:"mdi mdi-arrow-right"})])])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{attrs:{elevation:"0"}},[n("v-card-text",[n("div",{staticClass:"icon-round bg-light-info"},[n("i",{staticClass:"mdi mdi-check-circle"})]),t._v(" "),n("h5",{staticClass:"font-weight-medium font-18"},[t._v("Secondary Objective")]),t._v(" "),n("p",{staticClass:"mt-10 mb-8"},[t._v("\n                  ZIMBABWE BUSINESS FORUM SAVINGS AND CREDIT UNION’s secondary\nobjective shall be to invest in business ideas that address the community’s most vital\nand pressing needs and issues. \n\n                ")]),t._v(" "),n("a",{staticClass:"\n                    text-themecolor\n                    linking\n                    text-decoration-none\n                    d-flex\n                    align-center\n                  ",attrs:{href:"#"}},[t._v("\n                  Explore More "),n("i",{staticClass:"mdi mdi-arrow-right"})])])],1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:v.a,VCardText:d.c,VChip:h.a,VCol:m.a,VContainer:f.a,VRow:C.a})},387:function(t,e,n){"use strict";n.r(e);var o={name:"Portfolio",data:function(){return{}},methods:{}},r=n(43),c=n(58),l=n.n(c),v=n(326),d=n(323),h=n(319),m=n(322),f=n(321),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"portfolio-component mini-spacer"},[o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[o("div",{staticClass:"text-center"},[o("h2",{staticClass:"section-title font-weight-medium"},[t._v("\n             How Our Co-operative Works\n            ")]),t._v(" "),o("p")])])],1),t._v(" "),o("v-row",{staticClass:"mt-13"},[o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"portfolio-card overflow-hidden"},[o("div",{staticClass:"portfolio-img"},[o("img",{staticClass:"img-fluid",attrs:{src:n(366),alt:"portfolio"}})]),t._v(" "),o("v-card-text",[o("h5",{staticClass:"font-weight-medium font-18"},[t._v("\n                Join Co-operative\n              ")])])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"portfolio-card overflow-hidden"},[o("div",{staticClass:"portfolio-img"},[o("img",{staticClass:"img-fluid",attrs:{src:n(367),alt:"portfolio"}})]),t._v(" "),o("v-card-text",[o("h5",{staticClass:"font-weight-medium font-18"},[t._v("Monthly Contributions")])])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"portfolio-card overflow-hidden"},[o("div",{staticClass:"portfolio-img"},[o("img",{staticClass:"img-fluid",attrs:{src:n(368),alt:"portfolio"}})]),t._v(" "),o("v-card-text",[o("h5",{staticClass:"font-weight-medium font-18"},[t._v("Invest in Stock Exchange")])])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"portfolio-card overflow-hidden"},[o("div",{staticClass:"portfolio-img"},[o("img",{staticClass:"img-fluid",attrs:{src:n(369),alt:"portfolio"}})]),t._v(" "),o("v-card-text",[o("h5",{staticClass:"font-weight-medium font-18"},[t._v("Membership Matures")])])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"portfolio-card overflow-hidden"},[o("div",{staticClass:"portfolio-img"},[o("img",{staticClass:"img-fluid",attrs:{src:n(370),alt:"portfolio"}})]),t._v(" "),o("v-card-text",[o("h5",{staticClass:"font-weight-medium font-18"},[t._v("Make Profits")])])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"portfolio-card overflow-hidden"},[o("div",{staticClass:"portfolio-img"},[o("img",{staticClass:"img-fluid",attrs:{src:n(371),alt:"portfolio"}})]),t._v(" "),o("v-card-text",[o("h5",{staticClass:"font-weight-medium font-18"},[t._v("Borrow")])])],1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:v.a,VCardText:d.c,VCol:h.a,VContainer:m.a,VRow:f.a})},388:function(t,e,n){"use strict";n.r(e);var o={name:"Blog",data:function(){return{}},methods:{}},r=n(43),c=n(58),l=n.n(c),v=n(326),d=n(319),h=n(322),m=n(313),f=n(321),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"blog-component mini-spacer"},[o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[o("div",{staticClass:"text-center"},[o("h2",{staticClass:"section-title font-weight-medium"},[t._v("Recent Blogs")]),t._v(" "),o("p",[t._v("\n              You can relay on our amazing features list and also our customer\n              services will be great experience for you without doubt and in\n              no-time\n            ")])])])],1),t._v(" "),o("v-row",{staticClass:"mt-13",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"blog-card overflow-hidden mb-15",attrs:{elevation:"0"}},[o("div",{staticClass:"position-relative mb-15"},[o("a",{attrs:{href:"#"}},[o("v-img",{staticClass:"blog-img",attrs:{src:n(372),alt:"blog"}})],1),t._v(" "),o("div",{staticClass:"date-badge bg-info-grediant"},[t._v("\n                Oct "),o("span",[t._v("23")])])]),t._v(" "),o("div",[o("a",{staticClass:"\n                  blog-title\n                  text-decoration-none\n                  font-weight-medium font-18\n                ",attrs:{href:"#"}},[t._v("Learn from small things to create something bigger.")]),t._v(" "),o("p",{staticClass:"mt-10 mb-10"},[t._v("\n                Business Park, Opp. Corns Sam Restaurant, New Yoark, US\n              ")]),t._v(" "),o("a",{staticClass:"\n                  text-themecolor\n                  linking\n                  text-decoration-none\n                  d-flex\n                  align-center\n                ",attrs:{href:"#"}},[t._v("\n                Learn More "),o("i",{staticClass:"mdi mdi-arrow-right"})])])])],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"blog-card overflow-hidden mb-15",attrs:{elevation:"0"}},[o("div",{staticClass:"position-relative mb-15"},[o("a",{attrs:{href:"#"}},[o("v-img",{staticClass:"blog-img",attrs:{src:n(373),alt:"blog"}})],1),t._v(" "),o("div",{staticClass:"date-badge bg-info-grediant"},[t._v("\n                Oct "),o("span",[t._v("23")])])]),t._v(" "),o("div",[o("a",{staticClass:"\n                  blog-title\n                  text-decoration-none\n                  font-weight-medium font-18\n                ",attrs:{href:"#"}},[t._v("New Seminar on Newest Food Recipe from World’s Best")]),t._v(" "),o("p",{staticClass:"mt-10 mb-10"},[t._v("\n                Business Park, Opp. Corns Sam Restaurant, New Yoark, US\n              ")]),t._v(" "),o("a",{staticClass:"\n                  text-themecolor\n                  linking\n                  text-decoration-none\n                  d-flex\n                  align-center\n                ",attrs:{href:"#"}},[t._v("\n                Learn More "),o("i",{staticClass:"mdi mdi-arrow-right"})])])])],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"blog-card overflow-hidden mb-15",attrs:{elevation:"0"}},[o("div",{staticClass:"position-relative mb-15"},[o("a",{attrs:{href:"#"}},[o("v-img",{staticClass:"blog-img",attrs:{src:n(374),alt:"blog"}})],1),t._v(" "),o("div",{staticClass:"date-badge bg-info-grediant"},[t._v("\n                Oct "),o("span",[t._v("23")])])]),t._v(" "),o("div",[o("a",{staticClass:"\n                  blog-title\n                  text-decoration-none\n                  font-weight-medium font-18\n                ",attrs:{href:"#"}},[t._v("You should have eagle’s eye on new trends and techonogies")]),t._v(" "),o("p",{staticClass:"mt-10 mb-10"},[t._v("\n                Business Park, Opp. Corns Sam Restaurant, New Yoark, US\n              ")]),t._v(" "),o("a",{staticClass:"\n                  text-themecolor\n                  linking\n                  text-decoration-none\n                  d-flex\n                  align-center\n                ",attrs:{href:"#"}},[t._v("\n                Learn More "),o("i",{staticClass:"mdi mdi-arrow-right"})])])])],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:v.a,VCol:d.a,VContainer:h.a,VImg:m.a,VRow:f.a})},389:function(t,e,n){"use strict";n.r(e);var o={name:"Team",data:function(){return{}},methods:{}},r=n(43),c=n(58),l=n.n(c),v=n(326),d=n(323),h=n(319),m=n(322),f=n(313),C=n(321),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"team-component mini-spacer bg-extra-light mini-spacer"},[o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[o("div",{staticClass:"text-center"},[o("h2",{staticClass:"section-title font-weight-medium"},[t._v("\n              Our Executive Team\n            ")]),t._v(" "),o("p",[t._v("\n              This is the amazing team behind the Zimbabwe BUsiness Forum Savings & Credit Union\n            ")])])])],1),t._v(" "),o("v-row",{staticClass:"mt-13"},[o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"team-card portfolio-card overflow-hidden mb-15",attrs:{elevation:"0"}},[o("div",{staticClass:"social-overlay"},[o("v-img",{attrs:{src:n(376),alt:"team"}}),t._v(" "),o("div",{staticClass:"img-overlay"},[o("ul",[o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-facebook"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-twitter"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-instagram"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-youtube"})])])])])],1),t._v(" "),o("v-card-text",[o("div",[o("h5",{staticClass:"team-title  font-weight-medium font-18"},[t._v("\n               Person Name\n              ")]),t._v(" "),o("p",{staticClass:"team-subtitle"},[t._v("Property Specialist")])]),t._v(" "),o("p",{staticClass:"textyangu"},[t._v("\n              You can relay on our amazing features list and also our customer\n              services will be great experience.\n            ")])])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"team-card portfolio-card overflow-hidden mb-15",attrs:{elevation:"0"}},[o("div",{staticClass:"social-overlay"},[o("v-img",{attrs:{src:n(377),alt:"team"}}),t._v(" "),o("div",{staticClass:"img-overlay"},[o("ul",[o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-facebook"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-twitter"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-instagram"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-youtube"})])])])])],1),t._v(" "),o("v-card-text",[o("div",[o("h5",{staticClass:"team-title  font-weight-medium font-18"},[t._v("\n               Person Name\n              ")]),t._v(" "),o("p",{staticClass:"team-subtitle"},[t._v("Property Specialist")])]),t._v(" "),o("p",{staticClass:"textyangu"},[t._v("\n              You can relay on our amazing features list and also our customer\n              services will be great experience.\n            ")])])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[o("v-card",{staticClass:"team-card portfolio-card overflow-hidden mb-15",attrs:{elevation:"0"}},[o("div",{staticClass:"social-overlay"},[o("v-img",{attrs:{src:n(378),alt:"team"}}),t._v(" "),o("div",{staticClass:"img-overlay"},[o("ul",[o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-facebook"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-twitter"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-instagram"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"mdi mdi-youtube"})])])])])],1),t._v(" "),o("v-card-text",[o("div",[o("h5",{staticClass:"team-title  font-weight-medium font-18"},[t._v("\n               Person Name\n              ")]),t._v(" "),o("p",{staticClass:"team-subtitle"},[t._v("Property Specialist")])]),t._v(" "),o("p",{staticClass:"textyangu"},[t._v("\n              You can relay on our amazing features list and also our customer\n              services will be great experience.\n            ")])])],1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:v.a,VCardText:d.c,VCol:h.a,VContainer:m.a,VImg:f.a,VRow:C.a})},401:function(t,e,n){t.exports=n.p+"img/undraw_investing_re_bov7.cd7e6b5.svg"},402:function(t,e,n){t.exports=n.p+"img/app-store.c1ac5a7.png"},403:function(t,e,n){t.exports=n.p+"img/play-store.4359a4d.png"},426:function(t,e,n){"use strict";n.r(e);var o={name:"Banner",data:function(){return{}}},r=n(43),c=n(58),l=n.n(c),v=n(382),d=n(319),h=n(322),m=n(313),f=n(321),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"banner-wrapper"},[o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"7",lg:"6"}},[o("div",{staticClass:"text-center text-md-left"},[o("h1",{staticClass:"banner-title font-weight-bold white--text"},[t._v("\n              ZIMBABWE BUSINESS FORUM SAVINGS\nAND CREDIT UNION\n            ")]),t._v(" "),o("h4",{staticClass:"banner-subtitle white--text font-weight-regular"},[t._v("\n              Save Money, Invest & Improve\n            ")]),t._v(" "),o("div",{staticClass:"mt-16 pt-2"},[o("v-btn",{staticClass:"btn-custom-md",attrs:{nuxt:"",large:"",to:"/coming-soon",outlined:"",color:"white",elevation:"0"}},[t._v("\n                Join Us Now\n              ")])],1)])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"5",lg:"6"}},[o("v-img",{attrs:{src:n(401),alt:"banner"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCol:d.a,VContainer:h.a,VImg:m.a,VRow:f.a})},427:function(t,e,n){"use strict";n.r(e);var o={name:"C2a1",data:function(){return{}},methods:{}},r=n(43),c=n(58),l=n.n(c),v=n(382),d=n(322),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"c2a1-spacer primary"},[n("v-container",[n("div",{staticClass:"d-block d-md-flex align-center"},[n("h2",{staticClass:"c2a-title white--text font-weight-medium"},[t._v("\n          Do You Want To Be Part Of Our Community?\n        ")]),t._v(" "),n("div",{staticClass:"ml-auto mt-5 mt-md-0"},[n("v-btn",{staticClass:"btn-custom-md rangu",attrs:{nuxt:"",large:"",to:"/",outlined:"",color:"white",elevation:"0",block:""}},[t._v("\n            Join Now\n          ")])],1)])])],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VContainer:d.a})},428:function(t,e,n){"use strict";n.r(e);var o={name:"C2a2",data:function(){return{}},methods:{}},r=n(43),c=n(58),l=n.n(c),v=n(319),d=n(322),h=n(321),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"c2a2-spacer mini-spacer bg-danger-grediant"},[o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",md:"10",lg:"7"}},[o("div",{staticClass:"text-center"},[o("h2",{staticClass:"c2a2-title white--text font-weight-medium"},[t._v("\n              Grab our IOS or Android App from Stores\n            ")]),t._v(" "),o("p",{staticClass:"white--text op-8 mb-10"},[t._v("\n              You can relay on our amazing features list and also our customer\n              services will be great experience for you without doubt and in\n              no-time.\n            ")]),t._v(" "),o("div",[o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:n(402)}})]),t._v(" "),o("a",{attrs:{href:"#"}},[o("img",{attrs:{src:n(403)}})])])])])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:v.a,VContainer:d.a,VRow:h.a})},472:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("4c60d21a",content,!0,{sourceMap:!1})},520:function(t,e,n){"use strict";n(472)},521:function(t,e,n){var o=n(34)(!1);o.push([t.i,"a.d-none.d-lg-flex.btn-custom-nm.ml-5.v-btn.v-btn--has-bg.v-btn--router.theme--light.elevation-0.v-size--default.primary{background-color:#000!important}.feature1-component .icon-round{font-size:45px;width:80px;color:#ebd116!important;line-height:80px;text-align:center;display:inline-block;margin:20px 0 30px;border-radius:100%}.portfolio-card.overflow-hidden.v-card.v-sheet.theme--light{background-color:#fdda29!important}p.textyangu{color:#585858}.c2a1-spacer.primary{background-color:#fdda29!important}.bg-danger-grediant{background:#ff4d7e;background:linear-gradient(90deg,#006b00,#446021)}a.btn-custom-md.rangu.v-btn.v-btn--block.v-btn--outlined.v-btn--router.theme--light.elevation-0.v-size--large.white--text{background-color:#000;border-color:#000}.bg-info-grediant{background:#316ce8;background:linear-gradient(90deg,#39621c,#0b6905)!important}",""]),t.exports=o},582:function(t,e,n){"use strict";n.r(e);var o={head:function(){return{title:"ZBF SACCO | Save Money, Invest & Improve",meta:[{hid:"description",name:"Number One Credit Facility",content:"ZIMBABWE BUSINESS FORUM SAVINGS AND CREDIT UNIONs primary objective shall be to save money from member contributions for investing in new projects for the benefit of and improve the standards of living and livelihoods of its members."}]}},data:function(){return{}}},r=(n(520),n(43)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pagetop"),t._v(" "),n("bannertop"),t._v(" "),n("about"),t._v(" "),n("myportifolio"),t._v(" "),n("management"),t._v(" "),n("news"),t._v(" "),n("joinbottom"),t._v(" "),n("appstore")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagetop:n(345).default,Bannertop:n(426).default,About:n(386).default,Myportifolio:n(387).default,Management:n(389).default,News:n(388).default,Joinbottom:n(427).default,Appstore:n(428).default})}}]);