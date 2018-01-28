webpackJsonp([24],{1678:function(e,t,a){e.exports=a(106)},1859:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),u=a.n(s),m=a(29),h=a.n(m),f=a(68),p=a(88),d=a(279),b=a(285),v=a(34),y=a(32),_=a(3),E=a.n(_),g=a(675),w=a.n(g),k=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),C=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={hover:!1},e}return o(t,e),k(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.account,n=t.image_size,r=a.get("lifetime_referrer_name")===a.get("name"),o=u.a.createElement("div",{className:"account-image"},u.a.createElement(w.a,{size:n.width,value:a.get("name")})),c=this.state.hover?!this.props.showQR:this.props.showQR;return u.a.createElement("div",{style:{maxWidth:n.width},className:"account-info"+(this.props.my_account?" my-account":"")},this.props.title?u.a.createElement("h4",null,this.props.title):null,u.a.createElement("div",{onMouseEnter:function(){e.setState({hover:!0})},onMouseLeave:function(){e.setState({hover:!1})},className:"clickable",onClick:function(){e.setState({hover:!1}),e.props.toggleQR(!e.props.showQR)}},c?o:u.a.createElement(b.a,{size:n,account:a.get("name"),custom_image:null})),u.a.createElement("p",null,u.a.createElement(E.a,{content:"account.deposit_address"}),"!"),u.a.createElement("p",{className:this.props.titleClass},u.a.createElement("span",{className:r?"lifetime":""},a.get("name"))))}}]),t}(u.a.Component);C.propTypes={account:v.a.ChainAccount.isRequired,title:u.a.PropTypes.string,image_size:u.a.PropTypes.object.isRequired,my_account:u.a.PropTypes.bool},C.defaultProps={title:null,image_size:{height:120,width:120},showQR:!1,titleClass:"account-title"};var O=Object(y.a)(C),N=a(671),P=a(4),j=a(48),x=a(286),A=a(694),T=a(1678),S=a.n(T),R=a(16),z=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),B=function(e){function t(e){c(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={invoice:null,pay_from_name:null,pay_from_account:null,error:null},a.onBroadcastAndConfirm=a.onBroadcastAndConfirm.bind(a),a}return l(t,e),z(t,[{key:"componentDidMount",value:function(){var e=this,t=S.a.decode(this.props.params.data);try{Object(A.decompress)(t,function(t){var a=JSON.parse(t);Object(P.g)(P.b.getAsset,[a.currency]).then(function(t){e.setState({invoice:a,asset:t[0]})})})}catch(e){console.dir(e),this.setState({error:e.message})}}},{key:"parsePrice",value:function(e){var t=e.match(/([\d\,\.\s]+)/);return!t||t.length,parseFloat(t[1].replace(/[\,\s]/g,""))}},{key:"getTotal",value:function(e){var t=this;return e&&0!==e.length?e.reduce(function(e,a){var n=t.parsePrice(a.price);return n?e+a.quantity*n:e},0):0}},{key:"onBroadcastAndConfirm",value:function(e){if(e.included&&e.broadcasted_transaction&&(x.a.unlisten(this.onBroadcastAndConfirm),x.a.reset(),this.state.invoice.callback)){var t=e.broadcasted_transaction,a=this.state.invoice.callback+"?block="+t.ref_block_num+"&trx="+t.id();window.location.href=a}}},{key:"onPayClick",value:function(e){var t=this;e.preventDefault();var a=this.state.asset,n=R.a.get_asset_precision(a.get("precision")),r=this.getTotal(this.state.invoice.line_items),o=P.b.getAccount(this.state.invoice.to);if(!o)return void j.a.error("Account "+this.state.invoice.to+" not found");p.a.transfer(this.state.pay_from_account.get("id"),o.get("id"),parseInt(r*n,10),a.get("id"),this.state.invoice.memo).then(function(){x.a.listen(t.onBroadcastAndConfirm)}).catch(function(e){console.log("error: ",e)})}},{key:"fromChanged",value:function(e){this.setState({pay_from_name:e})}},{key:"onFromAccountChanged",value:function(e){this.setState({pay_from_account:e})}},{key:"render",value:function(){var e=this;if(console.log("-- Invoice.render --\x3e",this.state.invoice),this.state.error)return u.a.createElement("div",null,u.a.createElement("br",null),u.a.createElement("h4",{className:"has-error text-center"},this.state.error));if(!this.state.invoice)return null;if(!this.state.asset)return u.a.createElement("div",null,u.a.createElement("br",null),u.a.createElement("h4",{className:"has-error text-center"},"Asset ",this.state.invoice.currency," is not supported by this blockchain."));var t=this.state.invoice,a=this.getTotal(t.line_items),n=this.state.invoice.currency,r=null;if(this.state.pay_from_account){var o=this.state.pay_from_account.get("balances");console.log("-- Invoice.render balances --\x3e",o.get(this.state.asset.get("id"))),r=o.get(this.state.asset.get("id"))}var c=t.line_items.map(function(t){var a=e.parsePrice(t.price),r=t.quantity*a;return u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("div",{className:"item-name"},t.label),u.a.createElement("div",{className:"item-description"},t.quantity," x ",u.a.createElement(f.a,{amount:t.price,asset:n,exact_amount:!0}))),u.a.createElement("td",null,u.a.createElement(f.a,{amount:r,asset:n,exact_amount:!0})))}),i=h()("button",{disabled:!this.state.pay_from_account});return u.a.createElement("div",{className:"grid-block vertical"},u.a.createElement("div",{className:"grid-content"},u.a.createElement("div",{className:"content-block invoice"},u.a.createElement("br",null),u.a.createElement("h3",null,"Pay Invoice"),u.a.createElement("h4",null,t.memo),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement(O,{title:t.to_label,account:t.to,image_size:{height:80,width:80}}),u.a.createElement("br",null),u.a.createElement("table",{className:"table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Items"),u.a.createElement("th",null,"Amount"))),u.a.createElement("tbody",null,c,u.a.createElement("tr",null,u.a.createElement("td",{className:"text-right"},"Total:"),u.a.createElement("td",null,u.a.createElement(f.a,{amount:a,asset:n,exact_amount:!0}))))),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("form",null,u.a.createElement("div",{className:"grid-block"},u.a.createElement("div",{className:"grid-content medium-4"},u.a.createElement(d.a,{label:"transfer.pay_from",accountName:this.state.pay_from_name,onChange:this.fromChanged.bind(this),onAccountChanged:this.onFromAccountChanged.bind(this),account:this.state.pay_from_name})),this.state.pay_from_account?u.a.createElement("div",{className:"grid-content medium-1"},u.a.createElement("label",null,"Balance"),u.a.createElement(N.a,{balance:r})):null),u.a.createElement("br",null),u.a.createElement("a",{href:!0,className:i,onClick:this.onPayClick.bind(this)},"Pay ",u.a.createElement(f.a,{amount:a,asset:n,exact_amount:!0})," to ",t.to))))))}}]),t}(u.a.Component);t.default=B}});
//# sourceMappingURL=24.js.map