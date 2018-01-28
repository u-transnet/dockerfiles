webpackJsonp([27],{1513:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.d(t,"b",function(){return f}),a.d(t,"a",function(){return E});var i=a(1),o=a.n(i),c=a(3),m=a.n(c),u=a(29),p=a.n(u),d=a(26),h=(a.n(d),a(27)),b=a(38),_=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),E=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),_(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,a=e.index,n=e.changeTab,r=e.title,s=e.className,l=e.disabled,i=p()({"is-active":t},s);return this.props.collapsed?o.a.createElement("option",{value:a,"data-is-link-to":this.props.isLinkTo},"string"==typeof r&&r.indexOf(".")>0?o.a.createElement(m.a,{className:"tab-title",content:r}):o.a.createElement("span",{className:"tab-title"},r)):o.a.createElement("li",{className:i,onClick:l?null:n.bind(this,a,this.props.isLinkTo)},o.a.createElement("a",null,"string"==typeof r&&r.indexOf(".")>0?o.a.createElement(m.a,{className:"tab-title",content:r}):o.a.createElement("span",{className:"tab-title"},r),this.props.subText?o.a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}(o.a.Component);E.propTypes={changeTab:i.PropTypes.func,isActive:i.PropTypes.bool.isRequired,index:i.PropTypes.number.isRequired,className:i.PropTypes.string,isLinkTo:i.PropTypes.string},E.defaultProps={isActive:!1,index:0,className:"",isLinkTo:""};var f=function(e){function t(e){r(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},a._setDimensions=a._setDimensions.bind(a),a}return l(t,e),_(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){if(e!==this.state.activeTab){if(""!==t)return void this.context.router.push(t);this.props.setting&&h.a.changeViewSetting(n({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.contentClass,r=t.tabsClass,s=t.style,l=t.segmented,i=this.state.width<900&&o.a.Children.count(a)>2,c=null,m=[],u=o.a.Children.map(a,function(t,a){if(!t)return null;if(i&&t.props.disabled)return null;var n=a===e.state.activeTab;return n&&(c=t.props.children),o.a.cloneElement(t,{collapsed:i,isActive:n,changeTab:e._changeTab.bind(e),index:a})}).filter(function(e){return e&&m.push(e.props.index),null!==e});return c||(c=u[0].props.children),o.a.createElement("div",{className:p()(this.props.actionButtons?"with-buttons":"",this.props.className)},o.a.createElement("div",{className:"service-selector"},o.a.createElement("ul",{style:s,className:p()("button-group no-margin",r,{segmented:l})},i?o.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},o.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var a=parseInt(t.target.value,10);e._changeTab(a,t.target[a].attributes["data-is-link-to"].value)}},u)):u,this.props.actionButtons?o.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),o.a.createElement("div",{className:n+" tab-content"},c))}}]),t}(o.a.Component);f.propTypes={setting:i.PropTypes.string,defaultActiveTab:i.PropTypes.number,segmented:i.PropTypes.bool},f.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},f.contextTypes={router:o.a.PropTypes.object.isRequired},f=Object(d.connect)(f,{listenTo:function(){return[b.a]},getProps:function(){return{viewSettings:b.a.getState().viewSettings}}})},1863:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),o=a.n(i),c=a(33),m=a(3),u=a.n(m),p=a(143),d=a(34),h=a(32),b=a(68),_=a(145),E=a(121),f=a(680),g=a(673),v=a(56),y=a(281),k=a(16),x=a(4),w=a(7),O=(a.n(w),a(1513)),T=a(141),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},P=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),A=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),P(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?o.a.createElement("span",{className:"asset-flag"},o.a.createElement("span",{className:"label info"},o.a.createElement(u.a,{content:"account.user_issued_assets."+a}))):o.a.createElement("span",null)}}]),t}(o.a.Component),S=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),P(t,[{key:"render",value:function(){var e=this.props,t=e.isSet,a=e.name;return t?o.a.createElement("span",{className:"asset-flag"},o.a.createElement("span",{className:"label info"},o.a.createElement(u.a,{content:"account.user_issued_assets."+a}))):o.a.createElement("span",null)}}]),t}(o.a.Component),C=function(e){function t(e){r(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={callOrders:[],marginTableSort:"price",sortDirection:!0},a}return l(t,e),P(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.asset.has("bitasset")){var t,a=(t={},n(t,this.props.asset.get("id"),this.props.asset.toJS()),n(t,this.props.backingAsset.get("id"),this.props.backingAsset.toJS()),t),r=this.props.asset.getIn(["bitasset","is_prediction_market"],!1),s=this.props.asset.getIn(["bitasset","current_feed","maximum_short_squeeze_ratio"]),l=this.props.asset.getIn(["bitasset","current_feed","settlement_price"]);r&&l.getIn(["base","asset_id"])===l.getIn(["quote","asset_id"])&&(a[this.props.backingAsset.get("id")]||(a[this.props.backingAsset.get("id")]={precision:this.props.asset.get("precision")}),l=l.setIn(["base","amount"],1),l=l.setIn(["base","asset_id"],this.props.backingAsset.get("id")),l=l.setIn(["quote","amount"],1),l=l.setIn(["quote","asset_id"],this.props.asset.get("id")),s=1e3);try{var i=new T.c({priceObject:l,market_base:this.props.asset.get("id"),sqr:s,assets:a});w.Apis.instance().db_api().exec("get_call_orders",[this.props.asset.get("id"),300]).then(function(t){var n=t.map(function(t){return new T.b(t,a,e.props.asset.get("id"),i,r)});e.setState({callOrders:n})})}catch(e){}}}},{key:"_toggleSortOrder",value:function(e){e!==this.state.marginTableSort?this.setState({marginTableSort:e}):this.setState({sortDirection:!this.state.sortDirection})}},{key:"_assetType",value:function(e){return"bitasset"in e?e.bitasset.is_prediction_market?"Prediction":"Smart":"Simple"}},{key:"renderFlagIndicators",value:function(e,t){return o.a.createElement("div",null,t.map(function(t){return o.a.createElement(A,{key:"flag_"+t,name:t,isSet:e[t]})}))}},{key:"renderPermissionIndicators",value:function(e,t){return o.a.createElement("div",null,t.map(function(t){return o.a.createElement(S,{key:"perm_"+t,name:t,isSet:e[t]})}))}},{key:"formattedPrice",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.base,r=e.quote;return o.a.createElement(_.a,{base_amount:n.amount,base_asset:n.asset_id,quote_amount:r.amount,quote_asset:r.asset_id,hide_value:a,hide_symbols:t})}},{key:"renderAuthorityList",value:function(e){return e.map(function(e){return o.a.createElement("span",null," ",o.a.createElement(p.a,{account:e}))})}},{key:"renderMarketList",value:function(e,t){var a=e.symbol;return t.map(function(e){if(e==a)return null;var t=e+"_"+a,n=e+"/"+a;return o.a.createElement("span",null,o.a.createElement(c.b,{to:"/market/"+t},n),"  ")}.bind(this))}},{key:"renderAboutBox",value:function(e){var t=x.b.getObject(e.issuer,!1,!1),a=t?t.get("name"):"",n=(o.a.createElement(v.a,{name:"asset",className:"asset",size:"4x"}),y.a.parseDescription(e.options.description)),r=n.main,s=n.short_name?n.short_name:null,l=/(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g;r=r&&r.length>0?r+" ":r;var i=r.match(l),c=x.b.getAsset("1.3.0"),m=n.market?n.market:c?c.get("symbol"):"BTS";"bitasset"in e&&e.bitasset.is_prediction_market&&(m=x.b.getAsset(e.bitasset.options.short_backing_asset),m=m?m.get("symbol"):c.get("symbol")),e.symbol===c.get("symbol")&&(m="USD"),i&&i.length&&i.forEach(function(e){var t='<a target="_blank" rel="noopener noreferrer" href="'+e+'">'+e+"</a>";r=r.replace(e,t)});var p=k.a.replaceName(e.symbol,"bitasset"in e&&!e.bitasset.is_prediction_market&&"1.2.0"===e.issuer),d=p.name,h=p.prefix;return o.a.createElement("div",{style:{overflow:"visible"}},o.a.createElement(g.a,{path:"assets/"+e.symbol,alt_path:"assets/Asset",section:"summary",symbol:(h||"")+d,description:r,issuer:a}),s?o.a.createElement("p",null,s):null,o.a.createElement("a",{style:{textTransform:"uppercase"},href:"/market/"+e.symbol+"_"+m},o.a.createElement(u.a,{content:"exchange.market"})))}},{key:"renderSummary",value:function(e){var t=e.dynamic,a=e.options,n=y.a.getFlagBooleans(e.options.flags,this.props.asset.has("bitasset_data_id")),r=Object.keys(n),s=t?o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.summary.current_supply"})," "),o.a.createElement("td",null," ",o.a.createElement(b.a,{amount:t.current_supply,asset:e.id})," ")):null,l=t?o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.summary.stealth_supply"})," "),o.a.createElement("td",null," ",o.a.createElement(b.a,{amount:t.confidential_supply,asset:e.id})," ")):null,i=n.charge_market_fee?o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.summary.market_fee"})," "),o.a.createElement("td",null," ",a.market_fee_percent/100," % ")):null,c=n.charge_market_fee?o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.summary.max_market_fee"})," "),o.a.createElement("td",null," ",o.a.createElement(b.a,{amount:+a.max_market_fee,asset:e.id})," ")):null;return o.a.createElement("div",{className:"asset-card"},o.a.createElement("div",{className:"card-divider"},o.a.createElement(E.a,{name:e.symbol})),o.a.createElement("table",{className:"table key-value-table table-hover"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.summary.asset_type"})," "),o.a.createElement("td",null," ",this._assetType(e)," ")),o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.summary.issuer"})," "),o.a.createElement("td",null," ",o.a.createElement(p.a,{account:e.issuer})," ")),o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.assets.precision"})," "),o.a.createElement("td",null," ",e.precision," ")),s,l,i,c)),o.a.createElement("br",null),this.renderFlagIndicators(n,r))}},{key:"renderPriceFeed",value:function(e){var t=o.a.createElement(u.a,{content:"explorer.asset.price_feed.title"}),a=e.bitasset;if(!("current_feed"in a))return o.a.createElement("div",{header:t});var n=a.current_feed;return o.a.createElement("div",{className:"asset-card"},o.a.createElement("div",{className:"card-divider"},t),o.a.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.price_feed.settlement_price"})," "),o.a.createElement("td",null," ",this.formattedPrice(n.settlement_price)," ")),o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.price_feed.maintenance_collateral_ratio"})," "),o.a.createElement("td",null," ",n.maintenance_collateral_ratio/10,"% ")),o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.price_feed.maximum_short_squeeze_ratio"})," "),o.a.createElement("td",null," ",n.maximum_short_squeeze_ratio/10,"% ")))))}},{key:"renderFeePool",value:function(e){var t=e.dynamic,a=e.options;return o.a.createElement("div",{className:"asset-card"},o.a.createElement("div",{className:"card-divider"},o.a.createElement(u.a,{content:"explorer.asset.fee_pool.title"})),o.a.createElement("table",{className:"table key-value-table",style:{padding:"1.2rem"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.fee_pool.core_exchange_rate"})," "),o.a.createElement("td",null," ",this.formattedPrice(a.core_exchange_rate)," ")),o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.fee_pool.pool_balance"})," "),o.a.createElement("td",null," ",t?o.a.createElement(b.a,{asset:"1.3.0",amount:t.fee_pool}):null," ")),o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.fee_pool.unclaimed_issuer_income"})," "),o.a.createElement("td",null," ",t?o.a.createElement(b.a,{asset:e.id,amount:t.accumulated_fees}):null," ")))))}},{key:"renderPermissions",value:function(e){var t=e.options,a=y.a.getFlagBooleans(e.options.issuer_permissions,this.props.asset.has("bitasset_data_id")),n=Object.keys(a),r=a.charge_market_fee?o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.permissions.max_market_fee"})," "),o.a.createElement("td",null," ",o.a.createElement(b.a,{amount:+t.max_market_fee,asset:e.id})," ")):null,s=o.a.createElement("tr",null,o.a.createElement("td",null," ",o.a.createElement(u.a,{content:"explorer.asset.permissions.max_supply"})," "),o.a.createElement("td",null," ",o.a.createElement(b.a,{amount:+t.max_supply,asset:e.id})," "));a.white_list&&o.a.createElement("span",null,o.a.createElement("br",null),o.a.createElement(u.a,{content:"explorer.asset.permissions.blacklist_authorities"}),":  ",this.renderAuthorityList(t.blacklist_authorities),o.a.createElement("br",null),o.a.createElement(u.a,{content:"explorer.asset.permissions.blacklist_markets"}),":  ",this.renderMarketList(e,t.blacklist_markets),o.a.createElement("br",null),o.a.createElement(u.a,{content:"explorer.asset.permissions.whitelist_authorities"}),":  ",this.renderAuthorityList(t.whitelist_authorities),o.a.createElement("br",null),o.a.createElement(u.a,{content:"explorer.asset.permissions.whitelist_markets"}),":  ",this.renderMarketList(e,t.whitelist_markets));return o.a.createElement("div",{className:"asset-card"},o.a.createElement("div",{className:"card-divider"},o.a.createElement(u.a,{content:"explorer.asset.permissions.title"})," "),o.a.createElement("table",{className:"table key-value-table table-hover",style:{padding:"1.2rem"}},o.a.createElement("tbody",null,r,s)),o.a.createElement("br",null),this.renderPermissionIndicators(a,n),o.a.createElement("br",null))}},{key:"renderPriceFeedData",value:function(e){var t=e.bitasset;if(!("feeds"in t)||0==t.feeds.length||t.is_prediction_market)return null;var a=(new Date).getTime(),n=new Date(a-1e3*e.bitasset.options.feed_lifetime_sec),r=t.feeds;if(r=r.filter(function(e){return new Date(e[1][0])>n}).sort(function(e,t){return new Date(t[1][0])-new Date(e[1][0])}),!r.length)return null;for(var s=[],l=r[0][1][1].settlement_price,i=r[0][1][1].core_exchange_rate,c=o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{textAlign:"left"}}," ",o.a.createElement(u.a,{content:"explorer.asset.price_feed_data.publisher"})," "),o.a.createElement("th",null,o.a.createElement(u.a,{content:"explorer.asset.price_feed_data.settlement_price"}),o.a.createElement("br",null),"(",this.formattedPrice(l,!1,!0),")"),o.a.createElement("th",null,o.a.createElement(u.a,{content:"explorer.asset.price_feed_data.core_exchange_rate"}),o.a.createElement("br",null),"(",this.formattedPrice(i,!1,!0),")"),o.a.createElement("th",null," ",o.a.createElement(u.a,{content:"explorer.asset.price_feed_data.maintenance_collateral_ratio"})," "),o.a.createElement("th",null," ",o.a.createElement(u.a,{content:"explorer.asset.price_feed_data.maximum_short_squeeze_ratio"})," "),o.a.createElement("th",null," ",o.a.createElement(u.a,{content:"explorer.asset.price_feed_data.published"})," "))),m=0;m<r.length;m++){var d=r[m],h=d[0],E=new Date(d[1][0]+"Z"),g=d[1][1].settlement_price,v=d[1][1].core_exchange_rate,y=d[1][1].maintenance_collateral_ratio/10+"%",k=d[1][1].maximum_short_squeeze_ratio/10+"%";s.push(o.a.createElement("tr",{key:h},o.a.createElement("td",null," ",o.a.createElement(p.a,{account:h})," "),o.a.createElement("td",{style:{textAlign:"right"}},this.formattedPrice(g,!0)),o.a.createElement("td",{style:{textAlign:"right"}}," ",this.formattedPrice(v,!0)," "),o.a.createElement("td",{style:{textAlign:"right"}}," ",y),o.a.createElement("td",{style:{textAlign:"right"}}," ",k),o.a.createElement("td",{style:{textAlign:"right"}},o.a.createElement(f.a,{time:E}))))}var w=this.state.sortDirection,T={name:function(e,t){var a=x.b.getAccount(e.borrower,!1);a&&(a=a.get("name"));var n=x.b.getAccount(t.borrower,!1);return n&&(n=n.get("name")),a>n?w?1:-1:a<n?w?-1:1:0},price:function(e,t){return(w?1:-1)*(e.call_price.toReal()-t.call_price.toReal())},collateral:function(e,t){return(w?1:-1)*(t.getCollateral().getAmount()-e.getCollateral().getAmount())},debt:function(e,t){return(w?1:-1)*(t.amountToReceive().getAmount()-e.amountToReceive().getAmount())},ratio:function(e,t){return(w?1:-1)*(e.getRatio()-t.getRatio())}};return o.a.createElement("div",{className:"grid block small-12 ",style:{overflow:"visible"}},o.a.createElement("div",{className:"grid-content no-padding"},o.a.createElement("div",{className:"asset-card"},o.a.createElement(O.b,{defaultActiveTab:0,segmented:!1,setting:"bitassetDataTabs"},o.a.createElement(O.a,{title:"explorer.asset.price_feed_data.title"},o.a.createElement("table",{className:" table order-table table-hover",style:{padding:"1.2rem"}},c,o.a.createElement("tbody",null,s))),o.a.createElement(O.a,{title:"explorer.asset.margin_positions.title"},o.a.createElement("table",{className:" table order-table table-hover",style:{padding:"1.2rem"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"name"),style:{textAlign:"left"}},o.a.createElement(u.a,{content:"transaction.borrower"})),o.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"collateral")},o.a.createElement(u.a,{content:"transaction.collateral"}),this.state.callOrders.length?o.a.createElement("span",null," (",o.a.createElement(b.a,{amount:this.state.callOrders[0].getCollateral().getAmount(),asset:this.state.callOrders[0].getCollateral().asset_id,hide_amount:!0})," )"):null),o.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"debt")},o.a.createElement(u.a,{content:"transaction.borrow_amount"}),this.state.callOrders.length?o.a.createElement("span",null," (",o.a.createElement(b.a,{amount:this.state.callOrders[0].amountToReceive().getAmount(),asset:this.state.callOrders[0].amountToReceive().asset_id,hide_amount:!0})," )"):null),o.a.createElement("th",{style:{paddingRight:10},className:"clickable"},o.a.createElement("span",{onClick:this._toggleSortOrder.bind(this,"price")},o.a.createElement(u.a,{content:"exchange.call"})),this.state.callOrders.length?o.a.createElement("span",null," (",o.a.createElement(_.a,{base_amount:this.state.callOrders[0].call_price.base.amount,base_asset:this.state.callOrders[0].call_price.base.asset_id,quote_amount:this.state.callOrders[0].call_price.quote.amount,quote_asset:this.state.callOrders[0].call_price.quote.asset_id,hide_value:!0,noPopOver:!0}),")"):null),o.a.createElement("th",{className:"clickable",onClick:this._toggleSortOrder.bind(this,"ratio")},o.a.createElement(u.a,{content:"borrow.coll_ratio"})))),o.a.createElement("tbody",null,this.state.callOrders.sort(T[this.state.marginTableSort]).map(function(e){return o.a.createElement("tr",{className:"margin-row",key:e.id},o.a.createElement("td",null,o.a.createElement(p.a,{account:e.borrower})),o.a.createElement("td",{style:{textAlign:"right"}},o.a.createElement(b.a,{amount:e.getCollateral().getAmount(),asset:e.getCollateral().asset_id,hide_asset:!0})),o.a.createElement("td",{style:{textAlign:"right"}},o.a.createElement(b.a,{amount:e.amountToReceive().getAmount(),asset:e.amountToReceive().asset_id,hide_asset:!0})),o.a.createElement("td",{style:{textAlign:"right",paddingRight:10}},o.a.createElement(_.a,{base_amount:e.call_price.base.amount,base_asset:e.call_price.base.asset_id,quote_amount:e.call_price.quote.amount,quote_asset:e.call_price.quote.asset_id,hide_symbols:!0})),o.a.createElement("td",{className:e.getStatus(),style:{textAlign:"right"}},e.getRatio().toFixed(3)))}))))))))}},{key:"render",value:function(){var e=this.props.asset.toJS(),t="bitasset"in e?this.renderPriceFeed(e):null,a="bitasset"in e?this.renderPriceFeedData(e):null;return o.a.createElement("div",{className:"grid-block page-layout"},o.a.createElement("div",{className:"grid-block main-content vertical",style:{overflow:"visible"}},o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{className:"grid-content"},o.a.createElement("div",{className:"grid-block no-margin small-12 shrink",style:{overflow:"visible"}},this.renderAboutBox(e)),o.a.createElement("div",{className:"grid-block no-margin small-12 shrink vertical medium-horizontal",style:{overflow:"visible"}},o.a.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},this.renderSummary(e)),o.a.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},t||this.renderPermissions(e))),o.a.createElement("div",{className:"grid-block no-margin small-12 shrink vertical medium-horizontal",style:{overflow:"visible"}},o.a.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},this.renderFeePool(e)),o.a.createElement("div",{className:"small-12 medium-6",style:{overflow:"visible"}},t?this.renderPermissions(e):null)),a))))}}]),t}(o.a.Component);C.propTypes={backingAsset:d.a.ChainAsset.isRequired},C=Object(h.a)(C,{keep_updating:!0});var j=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),P(t,[{key:"render",value:function(){var e=this.props.asset.has("bitasset")?this.props.asset.getIn(["bitasset","options","short_backing_asset"]):"1.3.0";return o.a.createElement(C,N({},this.props,{backingAsset:e}))}}]),t}(o.a.Component);j.propTypes={asset:d.a.ChainAsset.isRequired},j=Object(h.a)(j,{keep_updating:!0});var q=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),P(t,[{key:"render",value:function(){var e=this.props.params.symbol;return o.a.createElement(j,N({},this.props,{asset:e}))}}]),t}(o.a.Component);t.default=q}});
//# sourceMappingURL=27.js.map