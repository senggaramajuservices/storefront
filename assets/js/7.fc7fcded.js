(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{327:function(t,e,i){},328:function(t,e,i){},329:function(t,e,i){},330:function(t,e,i){"use strict";i(312);var n={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter:function(){var t=this;return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((function(e){return e.path===t.href}))))}}},a=i(43),s=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)(this.isRouter?"router-link":"a",{tag:"component",attrs:{href:this.isRouter?null:this.href,to:this.isRouter?this.to||this.href:null}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},335:function(t,e,i){"use strict";i(65),i(317),i(44),i(333),i(66),i(314);var n=i(318),a=i(92),s=i(45),o=i(344),r=i(309),c=i(342),l=i.n(c),u={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:function(){return Object(o.a)({zoom:null,big:800},r.$ecomConfig.get("default_img_size")||"normal",400)}},lozadOptions:{type:Object,default:function(){return{rootMargin:"350px 0px",threshold:0}}}},data:function(){return{sources:[],height:null,opacity:null}},computed:{defaultImgObj:function(){return"object"===Object(s.a)(this.src)&&this.src?Object(r.img)(this.src)||this.src:{}},localFallbackSrc:function(){var t=this.src,e=this.defaultImgObj,i=this.fallbackSrc;if(i)return i;var n="object"===Object(s.a)(t)?t.zoom?t.zoom.url:e.url:t;return n?n.replace(/\.webp$/,""):this.placeholder},localAlt:function(){var t=this.alt,e=this.src,i=this.defaultImgObj;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources:function(){var t,e=[];if("object"===Object(s.a)(this.src)){var i=this.$el,n=i.clientWidth,o=i.clientHeight,r=function(t,e,i,n){var a,s;for(var o in n){var r=n[o];if(void 0!==r&&t[o]){if(void 0!==s)if(null===r){if(s>=e)continue}else if(r<e||r-50<=i||null!==s&&r>s)continue;a=o,s=r}}return a}(this.src,n,o,this.containerBreakpoints),c=this.src[r]||this.defaultImgObj,l=c.url,u=c.size;if(t=l,n&&u&&this.canCalcHeight){var d=u.split("x").map((function(t){return parseInt(t,10)})),p=Object(a.a)(d,2),_=p[0],m=p[1];m&&(this.height="".concat(n>=_?m:n*m/_,"px"))}}else t=this.src;t&&(t.endsWith(".webp")?e.push({srcset:t,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(t)?t.replace(/\/imgs\/[0-9]{3}px/,""):t.replace(/\.webp$/,""),type:"image/".concat(".png"===t.substr(-9,4)?"png":"jpeg")}):e.push({srcset:t})),this.sources=e}},mounted:function(){var t=this;this.updateSources(),this.$nextTick((function(){var e=t.$el;l()(e,Object(n.a)(Object(n.a)({},t.lozadOptions),{},{loaded:function(e){var i=t.localFallbackSrc,n="IMG"===e.tagName?e:e.lastChild;n.style.opacity=0,n.onerror=function(){console.error(new Error("Image load error"),this),e.style.display="none";var t=document.createElement("IMG");t.src=i,e.parentNode.insertBefore(t,e.nextSibling)},n.onload=function(){t.opacity=0,e.classList.add("loaded"),t.$nextTick((function(){t.opacity=n.style.opacity=null,t.$emit("load")}))}}})).observe()}))}},d=(i(345),i(43)),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var n=t.srcset,a=t.type;return i("source",{key:e,attrs:{srcset:n,type:a}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=p.exports},336:function(t,e,i){"use strict";i(95),i(317);var n=i(45),a=i(538),s=i(309),o=function(t,e){var i=e.type,n=e.value;if(n)return"percentage"===i?t*(100-n)/100:t-n},r={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data:function(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:function(){return Object(s.i18n)(a.c)},i19from:function(){return Object(s.i18n)(a.v)},i19interestFree:function(){return Object(s.i18n)(a.y)},i19of:function(){return Object(s.i18n)(a.H)},i19to:function(){return Object(s.i18n)(a.mb)},i19upTo:function(){return Object(s.i18n)(a.qb)},price:function(){var t=Object(s.price)(this.product);return this.extraDiscount.value?o(t,this.extraDiscount):t},comparePrice:function(){return Object(s.onPromotion)(this.product)?this.product.base_price:this.extraDiscount.value?Object(s.price)(this.product):void 0},priceWithDiscount:function(){return o(this.price,this.discount)},installmentValue:function(){if(this.installmentsNumber>=2){if(this.monthlyInterest){var t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:s.formatMoney,updateInstallments:function(t){if(t){this.monthlyInterest=t.monthly_interest;var e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount:function(t){t&&(!t.min_amount||t.min_amount<=this.price)&&(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},watch:{price:{handler:function(t){this.$emit("fix-price",t)},immediate:!0}},created:function(){var t=this,e="object"===("undefined"==typeof window?"undefined":Object(n.a)(window))&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(e){var i=function(){var i=e.info&&e.info.apply_discount;if(i){var n=i.available_extra_discount;return n&&(t.extraDiscount=n),Object.keys(i).length>0}return!1};i()||e.on("info:apply_discount",i)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(e){var a=function(){var i=e.info&&e.info.list_payments;return!!i&&(t.updateInstallments(i.installments_option),t.updateDiscount(i.discount_option),Object.keys(i).length>0)};a()||e.on("info:list_payments",a)}}},c=(i(346),i(43)),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[i("small",[t._v(t._s(t.i19from))]),t._v(" "),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),t._v(" "),i("small",[t._v(t._s(t.i19to))])]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),t._v(" "),i("strong",{staticClass:"prices__value"},[t._v("\n    "+t._s(t.formatMoney(t.price))+"\n  ")]),t._v(" "),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.installmentsNumber>1?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v("\n        "+t._s(t.i19upTo)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.installmentsNumber)+"x\n      "),t.isLiteral?i("small",[t._v("\n        "+t._s(t.i19of)+"\n      ")]):t._e(),t._v(" "),i("span",[t._v("\n        "+t._s(t.formatMoney(t.installmentValue))+"\n      ")]),t._v(" "),!t.monthlyInterest&&t.isLiteral?i("small",[t._v("\n        "+t._s(t.i19interestFree)+"\n      ")]):t._e()]):t._e(),t._v(" "),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v("\n          "+t._s(t.formatMoney(t.priceWithDiscount))+"\n        ")]),t._v(" "),i("small",[t._v("\n          "+t._s(t.discountLabel)+"\n        ")])]:[i("small",[t._v("\n          "+t._s(t.i19asOf)+"\n        ")]),t._v(" "),i("span",[t._v("\n          "+t._s(t.formatMoney(t.priceWithDiscount))+"\n        ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=l.exports},345:function(t,e,i){"use strict";i(327)},346:function(t,e,i){"use strict";i(328)},347:function(t,e,i){"use strict";i(329)},348:function(t,e,i){"use strict";i(67),i(10);var n=i(318),a=i(45),s=i(538),o=i(309),r=i(0),c=i(325),l=i(326),u=i.n(l),d=i(330),p=i(335),_=i(336),m={name:"ProductCard",components:{ALink:d.a,APicture:p.a,APrices:_.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:function(){return{body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,error:""}},computed:{i19outOfStock:function(){return Object(o.i18n)(s.N)},i19unavailable:function(){return Object(o.i18n)(s.nb)},buyHtml:function(){return"object"===("undefined"==typeof window?"undefined":Object(a.a)(window))&&window.productCardBuyHtml},footerHtml:function(){return"object"===("undefined"==typeof window?"undefined":Object(a.a)(window))&&window.productCardFooterHtml},name:function(){return Object(o.name)(this.body)},strBuy:function(){return this.buyText||"object"===("undefined"==typeof window?"undefined":Object(a.a)(window))&&window.productCardBuyText||Object(o.i18n)(s.f)},isInStock:function(){return Object(o.inStock)(this.body)},isActive:function(){return this.body.available&&this.body.visible&&this.isInStock},discount:function(){var t=this.body;return Object(o.onPromotion)(t)?Math.round(100*(t.base_price-Object(o.price)(t))/t.base_price):0}},methods:{setBody:function(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records},fetchItem:function(){var t=this;this.productId&&(this.isLoading=!0,Object(c.store)({url:"/products/".concat(this.productId,".json")}).then((function(e){var i=e.data;t.$emit("update:product",i),t.setBody(i),t.$emit("update:is-loaded",!0)})).catch((function(e){console.error(e),t.body.name&&t.body.slug&&t.body.pictures||(t.error=Object(o.i18n)(s.m))})).finally((function(){t.isLoading=!1})))},buy:function(){var t=this,e=this.body;this.$emit("buy",{product:e}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(c.store)({url:"/products/".concat(e._id,".json")}).then((function(a){for(var s=a.data,o=["variations","customizations","kit_composition"],c=0;c<o.length;c++){var l=s[o[c]];if(l&&l.length)return Promise.all([i.e(0),i.e(2),i.e(8),i.e(6)]).then(i.bind(null,453)).then((function(e){new r.a({render:function(t){return t(e.default,{props:{product:s}})}}).$mount(t.$refs.quickview)}))}var d=s.quantity,p=s.price;u.a.addProduct(Object(n.a)(Object(n.a)({},e),{},{quantity:d,price:p}))})).catch((function(t){console.error(t),window.location="/".concat(e.slug)})).finally((function(){t.isWaitingBuy=!1})))}},created:function(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},f=(i(347),i(43)),b=Object(f.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},on:{mouseover:function(e){t.isHovered=!0}}},[i("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():i("section",[t._t("discount-tag",[t.isActive&&t.discount>0?i("span",{staticClass:"product-card__offer-stamp"},[i("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),i("b",[t._v(t._s(t.discount))]),t._v("%\n        ")]):t._e()],null,{discount:t.discount}),t._v(" "),t._t("body",[i("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),t._v(" "),i("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,n){return 1===t.body.pictures.length||1===n||t.isHovered?i("a-picture",{key:n,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):i("a-picture",{staticClass:"product-card__picture"})],2),t._v(" "),t._t("title",[i(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v("\n              "+t._s(t.name)+"\n            ")])])],2)]),t._v(" "),t._t("rating",[t._m(0)]),t._v(" "),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",[i("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]),t._v(" "),i("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",[t.buyHtml?i("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),t._v(" "),i("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?i("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._v(" "),t._t("buy-button-content",[i("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v("\n                "+t._s(t.strBuy)+"\n              ")])],2)])],2)]:t._t("out-of-stock",[i("p",{staticClass:"badge badge-dark"},[t._v("\n          "+t._s(t.i19outOfStock)+"\n        ")])]):t._t("unavailable",[i("p",{staticClass:"badge badge-warning"},[t._v("\n          "+t._s(t.i19unavailable)+"\n        ")])]),t._v(" "),t._t("footer",[t.footerHtml?i("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()])],2)]),t._v(" "),t.isLoading?[t._t("default"),t._v(" "),t.error?i("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e()]:t._e(),t._v(" "),i("div",{ref:"quickview"})],2)}),[function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"product-card__rating",attrs:{"data-sku":this.body.sku}})}],!1,null,null,null);e.a=b.exports},435:function(t){t.exports=JSON.parse('{"visible":true,"available":true,"manage_stock":true,"videos":[{"url":"https://www.youtube.com/watch?v=V7XQvAde51w","title":"esse MACBOOK vai me impressionar?! | Macbook Pro 13 Touchbar - Unboxing"}],"pictures":[{"zoom":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/@v2-1581704558843-display_hero_hw__d73ne9vbdmgm_large.jpg","size":"1136x667","alt":"display_hero_hw__d73ne9vbdmgm_large"},"big":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/big/@v2-1581704558843-display_hero_hw__d73ne9vbdmgm_large.jpg.webp","size":"700x411","alt":"display_hero_hw__d73ne9vbdmgm_large"},"normal":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/normal/@v2-1581704558843-display_hero_hw__d73ne9vbdmgm_large.jpg.webp","size":"350x206","alt":"display_hero_hw__d73ne9vbdmgm_large"},"_id":"245930158170460930200000"},{"zoom":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/@v2-1581704579863-chip_static__lj1912v5qhme_large.jpg","size":"980x684","alt":"chip_static__lj1912v5qhme_large"},"big":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/big/@v2-1581704579863-chip_static__lj1912v5qhme_large.jpg.webp","size":"700x489","alt":"chip_static__lj1912v5qhme_large"},"normal":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/normal/@v2-1581704579863-chip_static__lj1912v5qhme_large.jpg.webp","size":"350x244","alt":"chip_static__lj1912v5qhme_large"},"_id":"245930158170460930200001"},{"zoom":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/@v2-1581704580369-memory_static__c5fogcn85byq_large.jpg","size":"980x684","alt":"memory_static__c5fogcn85byq_large"},"big":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/big/@v2-1581704580369-memory_static__c5fogcn85byq_large.jpg.webp","size":"700x489","alt":"memory_static__c5fogcn85byq_large"},"normal":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/normal/@v2-1581704580369-memory_static__c5fogcn85byq_large.jpg.webp","size":"350x244","alt":"memory_static__c5fogcn85byq_large"},"_id":"245930158170460930200002"},{"zoom":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/@v2-1581704588875-ac_video_poster_960x540.jpg","size":"960x540","alt":"ac_video_poster_960x540"},"big":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/big/@v2-1581704588875-ac_video_poster_960x540.jpg.webp","size":"700x394","alt":"ac_video_poster_960x540"},"normal":{"url":"https://ecom-jvxboxzk.sfo2.digitaloceanspaces.com/imgs/normal/@v2-1581704588875-ac_video_poster_960x540.jpg.webp","size":"350x197","alt":"ac_video_poster_960x540"},"_id":"245930158170460930200003"}],"name":"Smartphone Alcatel Pixi 4 4034E Lite 4\\" Desbloqueado Preto","sku":"SJO5315","price":268.81,"base_price":269.35,"quantity":10,"brands":[{"_id":"5c769522c626be23430d5095","name":"Alcatel"}],"categories":[{"_id":"5c701cb1c626be23430d4fe9","name":"Físicos","slug":"fisicos"},{"_id":"5c7009fdc626be23430d4f82","name":"Teclados","slug":"teclados"},{"_id":"5c700a9cc626be23430d4f8c","name":"Smartphones","slug":"smartphones"}],"weight":{"value":150,"unit":"g"},"dimensions":{"width":{"value":13,"unit":"cm"},"height":{"value":8,"unit":"cm"},"length":{"value":5,"unit":"cm"}},"slug":"smartphone-alcatel-pixi-4-4034e-lite-4-desbloqueado-preto","commodity_type":"physical","ad_relevance":0,"currency_id":"BRL","currency_symbol":"R$","condition":"new","adult":true,"auto_fill_related_products":true,"views":0,"sales":5,"variations":[{"_id":"616340155664610646000000","specifications":{"modelo":[{"text":"Iphone","value":"iphone"}]},"name":"Smartphone Alcatel Pixi 4 4034E Lite 4\\" Desbloqueado Preto / Iphone","sku":"SJO5315-209-1","quantity":20,"min_quantity":3,"price":123},{"_id":"616340155664610646000001","specifications":{"modelo":[{"text":"Xiaomi","value":"xiaomi"}]},"name":"Smartphone Alcatel Pixi 4 4034E Lite 4\\" Desbloqueado Preto / Xiaomi","sku":"SJO5315-982-2","quantity":23,"min_quantity":3},{"_id":"616340155664610646000003","specifications":{"modelo":[{"text":"Samsung","value":"samsung"}]},"name":"Smartphone Alcatel Pixi 4 4034E Lite 4\\" Desbloqueado Preto / Samsung","sku":"SJO5315-546-3","quantity":5,"min_quantity":3},{"_id":"616340155664610646000004","specifications":{"modelo":[{"text":"Windows Phone","value":"windows_phone"}]},"name":"Smartphone Alcatel Pixi 4 4034E Lite 4\\" Desbloqueado Preto / Windows Phone","sku":"SJO5315-925-4","quantity":0,"min_quantity":3}],"price_change_records":[{"date_of_change":"2019-04-30T17:44:14.574Z","price":123,"currency_id":"BRL","currency_symbol":"R$","_id":"5cc8896e887ef430f1f68e76"},{"date_of_change":"2020-06-30T21:01:34.583Z","price":268.81,"currency_id":"BRL","currency_symbol":"R$","_id":"5efba82f14ff772fde7c1531"}],"total_sold":615,"inventory_records":[{"date_of_change":"2020-08-10T16:47:05.840Z","origin":"Order (5f3179f6f023684cdbd8bfb1)","quantity":-1,"variation_id":"616340155664610646000000","_id":"5f317a0cf023684cdbd8bfce"},{"date_of_change":"2020-08-12T22:10:14.641Z","origin":"Order (5f3468b3f023684cdbd9e2c4)","quantity":-1,"variation_id":"616340155664610646000000","_id":"5f3468c9f023684cdbd9e2e1"},{"date_of_change":"2020-08-12T22:13:44.436Z","origin":"Order (5f346991f023684cdbd9e32f)","quantity":-1,"variation_id":"616340155664610646000000","_id":"5f34699af023684cdbd9e341"},{"date_of_change":"2020-08-12T23:47:42.127Z","origin":"Order (5f347f93f023684cdbd9eaec)","quantity":-1,"variation_id":"616340155664610646000000","_id":"5f347fa0f023684cdbd9eb00"},{"date_of_change":"2020-08-12T23:48:27.727Z","origin":"Order (5f347fb9f023684cdbd9eb11)","quantity":-1,"variation_id":"616340155664610646000000","_id":"5f347fcdf023684cdbd9eb26"},{"date_of_change":"2020-08-22T06:03:54.348Z","origin":"Order (5f347f93f023684cdbd9eaec)","quantity":1,"variation_id":"616340155664610646000000","_id":"5f40b54cf023684cdbdbfd60"},{"date_of_change":"2020-08-27T01:17:03.574Z","origin":"Order (5f47098348689e1d744a83c1)","quantity":-1,"variation_id":"616340155664610646000000","_id":"5f47099148689e1d744a83d3"}]}')},457:function(t,e,i){"use strict";i.r(e);var n=i(435),a={name:"DemoProductCard",components:{ProductCard:i(348).a},data:function(){return{product:n}}},s=i(43),o=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo"},[e("div",{staticStyle:{"max-width":"290px"}},[e("ProductCard",{attrs:{product:this.product}})],1)])}),[],!1,null,null,null);e.default=o.exports}}]);