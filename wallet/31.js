webpackJsonp([31],{1456:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return A}),n.d(t,"a",function(){return P});var i=n(1),l=n.n(i),c=n(108),u=n(35),p=n(36),f=n(15),m=n(59),b=(n.n(m),n(258)),h=n(25),y=n.n(h),d=n(20),g=n.n(d),v=n(130),_=n.n(v),O=n(629),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),k=function e(t,n,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in a)return a.value;var s=a.get;if(void 0!==s)return s.call(r)},w=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s(t,e),j(t,[{key:"componentDidMount",value:function(){_.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e){return k(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"shouldComponentUpdate",this).call(this,e)||e.toAsset!==this.props.toAsset||e.fromAsset!==this.props.fromAsset||e.amount!==this.props.amount}},{key:"getValue",value:function(){var e=this.props,t=e.amount,n=e.toAsset,r=e.fromAsset,a=e.fullPrecision,o=e.marketStats,s=e.coreAsset,i=void 0,l=void 0,c=n.get("id"),u=n.get("symbol"),p=r.get("id"),m=r.get("symbol");if(a||(t=f.a.get_asset_amount(t,r)),s&&o){var b=s.get("symbol");i=o.get(u+"_"+b),l=o.get(m+"_"+b)}var h=f.a.convertPrice(l&&l.close?l.close:"1.3.0"===p||r.has("bitasset")?r:null,i&&i.close?i.close:"1.3.0"===c||n.has("bitasset")?n:null,p,c);return h?f.a.convertValue(h,t,r,n):null}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.toAsset,r=e.fromAsset,a=e.fullPrecision,o=n.get("id"),s=n.get("symbol");a||(t=f.a.get_asset_amount(t,r));var i=this.getValue();return i||0===i?l.a.createElement(c.a,{hide_asset:this.props.hide_asset,noPrefix:!0,amount:i,asset:o,decimalOffset:-1!==s.indexOf("BTC")?4:this.props.noDecimals?n.get("precision"):n.get("precision")-2}):l.a.createElement("div",{className:"tooltip inline-block","data-place":"bottom","data-tip":g.a.translate("tooltip.no_price"),style:{fontSize:"0.9rem"}},l.a.createElement(y.a,{content:"account.no_price"}))}}]),t}(O.a);w.propTypes={toAsset:u.a.ChainAsset.isRequired,fromAsset:u.a.ChainAsset.isRequired,coreAsset:u.a.ChainAsset.isRequired},w.defaultProps={toAsset:"1.3.0",fullPrecision:!0,noDecimals:!1,hide_asset:!1,coreAsset:"1.3.0"},w=Object(p.a)(w,{keep_updating:!0});var A=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),j(t,[{key:"render",value:function(){var e=this.props,t=e.refCallback,n=r(e,["refCallback"]);return l.a.createElement(w,E({},n,{ref:t}))}}]),t}(l.a.Component);A=Object(m.connect)(A,{listenTo:function(){return[b.a]},getProps:function(){return{marketStats:b.a.getState().allMarketStats}}});var P=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),j(t,[{key:"render",value:function(){var e=this.props.balance,t=!!e.getIn(["balance","amount"]),n=Number(t?e.getIn(["balance","amount"]):e.get("balance")),r=t?e.getIn(["balance","asset_id"]):e.get("asset_type");return isNaN(n)?l.a.createElement("span",null,"--"):l.a.createElement(A,{refCallback:this.props.refCallback,hide_asset:this.props.hide_asset,amount:n,fromAsset:r,noDecimals:!0,toAsset:this.props.toAsset})}}]),t}(l.a.Component);P.propTypes={balance:u.a.ChainObject.isRequired},P=Object(p.a)(P,{keep_updating:!0})},1531:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),u=n.n(c),p=n(30),f=n(132),m=n.n(f),b=n(26),h=n.n(b),y=n(20),d=n.n(y),g=n(51),v=n.n(g),_=n(25),O=n.n(_),E=n(623),j=n(35),k=n(36),w=n(108),A=n(1456),P=n(7),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=P.c.operations,N=Object.keys(x),S={general:[0,25,26,27,28,32,33,37,39,40],asset:[10,11,12,13,14,15,16,17,18,19,38],market:[1,2,3,4,17,18],account:[5,6,7,8,9],business:[20,21,22,23,24,29,30,31,34,35,36]},T=[5,7,20,21,34],R=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),C(t,[{key:"shouldComponentUpdate",value:function(e){return!h.a.is(e.globalObject,this.props.globalObject)}},{key:"render",value:function(){var e=this.props,t=e.globalObject,n=e.settings,r=e.opIds;e.title;t=t.toJSON();var a=P.b.getAsset("1.3.0"),o=t.parameters.current_fees,s=o.scale,i=o.parameters,l=n.get("unit")||a.get("symbol"),c=d.a.translate("transaction.trxTypes"),p=r.map(function(e){if(e>=i.length)return void console.warn("Asking for non-existing fee id %d! Check group settings in Fees.jsx",e);var t=i[e],n=t[0],r=t[1],a=N[n],o=c[a],p=[],f=!1,m=v()("label","info");for(var b in r){var h=r[b]*s/1e4,y=d.a.translate("transaction.feeTypes"),g=(h?u.a.createElement(w.a,{amount:h,asset:"1.3.0"}):y._none,h?u.a.createElement(A.b,{fromAsset:"1.3.0",fullPrecision:!0,amount:h,toAsset:l}):y._none),_=(.2*h?u.a.createElement(w.a,{amount:.2*h,asset:"1.3.0"}):y._none,.2*h?u.a.createElement(A.b,{fromAsset:"1.3.0",fullPrecision:!0,amount:.2*h,toAsset:l}):y._none),O=null;f||(f=!0,O=u.a.createElement("td",{rowSpan:"6",style:{width:"15em"}},u.a.createElement("span",{className:m},o))),T.indexOf(n)<0?p.push(u.a.createElement("tr",{key:n.toString()+b,className:"Annual Membership"===y[b]?"linethrough":""},O,u.a.createElement("td",null,y[b]),u.a.createElement("td",{style:{textAlign:"right"}},g),u.a.createElement("td",{style:{textAlign:"right"}},_))):p.push(u.a.createElement("tr",{key:n.toString()+b},O,u.a.createElement("td",null,y[b]),u.a.createElement("td",{style:{textAlign:"right"}},"- ",u.a.createElement("sup",null,"*")),u.a.createElement("td",{style:{textAlign:"right"}},_)))}return u.a.createElement("tbody",{key:e},p)});return u.a.createElement("div",{className:"asset-card"},u.a.createElement("div",{className:"card-divider"},this.props.title),u.a.createElement("table",{className:"table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,u.a.createElement(O.a,{content:"explorer.block.op"})),u.a.createElement("th",null,u.a.createElement(O.a,{content:"explorer.fees.type"})),u.a.createElement("th",{style:{textAlign:"right"}},u.a.createElement(O.a,{content:"explorer.fees.fee"})),u.a.createElement("th",{style:{textAlign:"right"}},u.a.createElement(O.a,{content:"explorer.fees.feeltm"})))),p))}}]),t}(u.a.Component);R.propTypes={globalObject:j.a.ChainObject.isRequired},R.defaultProps={globalObject:"2.0.0"},R=Object(k.a)(R,{keep_updating:!0});var q=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),C(t,[{key:"render",value:function(){var e=d.a.translate("transaction.feeGroups"),t=[];for(var n in S){var r=e[n],a=S[n];t.push(u.a.createElement(R,{key:n,settings:this.props.settings,opIds:a,title:r}))}return u.a.createElement("div",{className:"grid-block page-layout"},u.a.createElement("div",{className:"grid-block vertical",style:{overflow:"visible"}},u.a.createElement("div",{className:"grid-block small-12 shrink",style:{overflow:"visible"}},u.a.createElement(E.a,{path:"components/Fees"})),u.a.createElement("div",{className:"grid-block small-12 ",style:{overflow:"visible"}},u.a.createElement("div",{className:"grid-content"},t))))}}]),t}(u.a.Component),D=q,I=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),M=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),I(t,[{key:"render",value:function(){return u.a.createElement(m.a,{stores:[p.a],inject:{settings:p.a.getState().settings}},u.a.createElement(D,this.props))}}]),t}(u.a.Component);t.default=M}});
//# sourceMappingURL=31.js.map