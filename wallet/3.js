webpackJsonp([3],{1857:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return{private_key:e,public_string:e.toPublicKey().toPublicKeyString()}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var h=n(1),b=n.n(h),d=n(26),v=n(18),_=n.n(v),m=n(29),k=n.n(m),g=n(8),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w=function(){function e(){r(this,e)}return E(e,[{key:"setBrainkey",value:function(e){return e}}]),e}(),O=g.a.createActions(w),j=O,C=n(4),P=n(60),S=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),A=function(){function e(){o(this,e)}return S(e,null,[{key:"getInstance",value:function(t){var n=e.instances.get(t);n||(n=g.a.createStore(B,"BrainkeyStore"),e.instances.set(t,n));var r=t+" subscribed_instance";if(!e.instances.get(r)){var a=n.chainStoreUpdate.bind(n);C.b.subscribe(a),e.instances.set(r,a)}return n}},{key:"closeInstance",value:function(t){var n=e.instances.get(t);if(!n)throw new Error("unknown instance "+t);var r=t+" subscribed_instance",a=e.instances.get(r);e.instances.delete(r),C.b.unsubscribe(a),n.clearCache()}}]),e}();A.instances=new Map;var T=A,B=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clearCache(),e.bindListeners({onSetBrainkey:j.setBrainkey}),e._export("inSync","chainStoreUpdate","clearCache"),e}return c(t,e),S(t,[{key:"clearCache",value:function(){this.state={brnkey:"",account_ids:_.a.Set()},this.derived_keys=new Array,this.account_ids_by_key=null}},{key:"onSetBrainkey",value:function(e){this.clearCache(),this.setState({brnkey:e}),this.deriveKeys(e),this.chainStoreUpdate()}},{key:"inSync",value:function(){return this.derived_keys.forEach(function(e){if(N(e))return!1}),!0}},{key:"chainStoreUpdate",value:function(){this.derived_keys.length&&this.account_ids_by_key!==C.b.account_ids_by_key&&(this.account_ids_by_key=C.b.account_ids_by_key,this.updateAccountIds())}},{key:"deriveKeys",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.brnkey,t=this.derived_keys.length,n=C.o.get_brainPrivateKey(e,t),r=i(n);this.derived_keys.push(r),this.derived_keys.length<10&&this.deriveKeys(e)}},{key:"updateAccountIds",value:function(){var e=this,t=_.a.Set().withMutations(function(t){var n=function(e){var n=C.b.getAccountRefsOfKey(e);n&&n.forEach(function(e){t.add(e)})};e.derived_keys.forEach(function(e){return n(e.public_string)})});t.equals(this.state.account_ids)||(this.state.account_ids=t,this.setState({account_ids:t}))}}]),t}(P.a),N=function(e){return void 0===C.b.getAccountRefsOfKey(e.public_string)},x=n(32),I=n(34),K=n(696),R=n(122),U=n(3),q=n.n(U),M=n(671),L=n(285),z=n(57),D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),D(t,[{key:"onCardClick",value:function(e){e.preventDefault();var t=this.props.account.get("name");this.context.router.push("/account/"+t+"/overview/")}},{key:"render",value:function(){var e=null,t=null,n=!1;if(this.props.account){e=this.props.account.get("name");var r=this.props.account.get("balances");r&&(t=r.map(function(e){return C.b.getObject(e).get("balance")?b.a.createElement("li",{key:e},b.a.createElement(M.a,{balance:e})):null}).toArray()),n=z.a.isMyAccount(this.props.account)}return b.a.createElement("div",{className:"grid-content account-card",onClick:this.onCardClick.bind(this)},b.a.createElement("div",{className:"card"+(n?" my-account":"")},b.a.createElement("h4",{className:"text-center"},e),b.a.createElement("div",{className:"card-content clearfix"},b.a.createElement("div",{className:"float-left"},b.a.createElement(L.a,{account:e,size:{height:64,width:64}})),b.a.createElement("ul",{className:"balances"},t))))}}]),t}(b.a.Component);J.contextTypes={router:b.a.PropTypes.object.isRequired},J.propTypes={account:I.a.ChainAccount.isRequired};var W=Object(x.a)(J);n.d(t,"BrainkeyInputAccept",function(){return X});var F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G={listenTo:function(){return[T.getInstance("wmc")]},getProps:function(){return T.getInstance("wmc").getState()}},H=function(e){function t(){return f(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),F(t,[{key:"componentWillUnmount",value:function(){T.closeInstance("wmc")}},{key:"render",value:function(){return b.a.createElement("span",null,b.a.createElement("h3",null,b.a.createElement(q.a,{content:"wallet.brainkey"})),b.a.createElement(X,null,b.a.createElement(Q,null)))}}]),t}(h.Component);H=Object(d.connect)(H,G);var Q=(t.default=H,function(e){function t(){return f(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,e),F(t,[{key:"render",value:function(){var e=this.props.brnkey.substring(0,10);return b.a.createElement("span",null,b.a.createElement("div",null,b.a.createElement("span",{className:""},e),"…"),b.a.createElement("p",null),this.props.account_ids.size?b.a.createElement(V,{accounts:_.a.List(this.props.account_ids.toArray())}):b.a.createElement("h5",null,b.a.createElement(q.a,{content:"wallet.no_accounts"})))}}]),t}(h.Component));Q=Object(d.connect)(Q,G);var V=function(){function e(){f(this,e)}return F(e,[{key:"render",value:function(){var e=Object(R.pairs)(this.props.accounts).filter(function(e){return!!e[1]}).map(function(e){return e[1].get("name")}).sort().map(function(e){return b.a.createElement(W,{key:e,account:e})});return b.a.createElement("span",null,e)}}]),e}();V.propTypes={accounts:I.a.ChainAccountsList.isRequired},V=Object(x.a)(V,{keep_updating:!0});var X=function(e){function t(){f(this,t);var e=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={brnkey:"",accept:!1},e}return y(t,e),F(t,[{key:"render",value:function(){if(this.state.accept)return b.a.createElement("span",null,this.props.children);var e=this.state.brnkey&&""!==this.state.brnkey;return b.a.createElement("span",{className:"grid-container"},b.a.createElement("div",null,b.a.createElement(K.a,{onChange:this.onBrainkeyChange.bind(this)})),b.a.createElement("div",{className:k()("button success",{disabled:!e}),onClick:this.onAccept.bind(this)},b.a.createElement(q.a,{content:"wallet.accept"})))}},{key:"onBrainkeyChange",value:function(e){this.setState({brnkey:e})}},{key:"onAccept",value:function(){this.setState({accept:!0}),j.setBrainkey(this.state.brnkey)}}]),t}(h.Component)}});
//# sourceMappingURL=3.js.map