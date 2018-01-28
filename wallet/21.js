webpackJsonp([21,25],{1513:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"b",function(){return v}),n.d(t,"a",function(){return g});var s=n(1),c=n.n(s),l=n(3),m=n.n(l),u=n(29),p=n.n(u),b=n(26),f=(n.n(b),n(27)),h=n(38),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,r=e.title,i=e.className,o=e.disabled,s=p()({"is-active":t},i);return this.props.collapsed?c.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},"string"==typeof r&&r.indexOf(".")>0?c.a.createElement(m.a,{className:"tab-title",content:r}):c.a.createElement("span",{className:"tab-title"},r)):c.a.createElement("li",{className:s,onClick:o?null:a.bind(this,n,this.props.isLinkTo)},c.a.createElement("a",null,"string"==typeof r&&r.indexOf(".")>0?c.a.createElement(m.a,{className:"tab-title",content:r}):c.a.createElement("span",{className:"tab-title"},r),this.props.subText?c.a.createElement("div",{className:"tab-subtext"},this.props.subText):null))}}]),t}(c.a.Component);g.propTypes={changeTab:s.PropTypes.func,isActive:s.PropTypes.bool.isRequired,index:s.PropTypes.number.isRequired,className:s.PropTypes.string,isLinkTo:s.PropTypes.string},g.defaultProps={isActive:!1,index:0,className:"",isLinkTo:""};var v=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return o(t,e),d(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){if(e!==this.state.activeTab){if(""!==t)return void this.context.router.push(t);this.props.setting&&f.a.changeViewSetting(a({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,r=t.tabsClass,i=t.style,o=t.segmented,s=this.state.width<900&&c.a.Children.count(n)>2,l=null,m=[],u=c.a.Children.map(n,function(t,n){if(!t)return null;if(s&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(l=t.props.children),c.a.cloneElement(t,{collapsed:s,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return e&&m.push(e.props.index),null!==e});return l||(l=u[0].props.children),c.a.createElement("div",{className:p()(this.props.actionButtons?"with-buttons":"",this.props.className)},c.a.createElement("div",{className:"service-selector"},c.a.createElement("ul",{style:i,className:p()("button-group no-margin",r,{segmented:o})},s?c.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},c.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},u)):u,this.props.actionButtons?c.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),c.a.createElement("div",{className:a+" tab-content"},l))}}]),t}(c.a.Component);v.propTypes={setting:s.PropTypes.string,defaultActiveTab:s.PropTypes.number,segmented:s.PropTypes.bool},v.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},v.contextTypes={router:c.a.PropTypes.object.isRequired},v=Object(b.connect)(v,{listenTo:function(){return[h.a]},getProps:function(){return{viewSettings:h.a.getState().viewSettings}}})},1856:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n.n(o),c=n(18),l=n.n(c),m=n(285),u=n(34),p=n(32),b=n(4),f=n(68),h=n(3),d=n.n(h),g=n(26),v=(n.n(g),n(27)),_=n(38),y=n(41),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),k(t,[{key:"_onCardClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.committee_member.get("name"))}},{key:"render",value:function(){var e=b.b.getCommitteeMemberById(this.props.committee_member.get("id"));return e?s.a.createElement("div",{className:"grid-content account-card",onClick:this._onCardClick.bind(this)},s.a.createElement("div",{className:"card"},s.a.createElement("h4",{className:"text-center"},this.props.committee_member.get("name")),s.a.createElement("div",{className:"card-content clearfix"},s.a.createElement("div",{className:"float-left"},s.a.createElement(m.a,{account:this.props.committee_member.get("name"),size:{height:64,width:64}})),s.a.createElement("ul",{className:"balances"},s.a.createElement("li",null,s.a.createElement(d.a,{content:"account.votes.votes"}),": ",s.a.createElement(f.a,{decimalOffset:5,amount:e.get("total_votes"),asset:"1.3.0"})))))):null}}]),t}(s.a.Component);w.propTypes={committee_member:u.a.ChainAccount.isRequired},w.contextTypes={router:s.a.PropTypes.object.isRequired},w=Object(p.a)(w,{keep_updating:!0});var E=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),k(t,[{key:"_onRowClick",value:function(e){e.preventDefault(),this.context.router.push("/account/"+this.props.committee_member.get("name"))}},{key:"render",value:function(){var e=this.props,t=e.committee_member,n=e.rank,a=b.b.getCommitteeMemberById(t.get("id"));if(!a)return null;var r=(a.get("total_votes"),a.get("url"));return r=r&&r.length>0&&-1===r.indexOf("http")?"http://"+r:r,s.a.createElement("tr",null,s.a.createElement("td",{onClick:this._onRowClick.bind(this)},n),s.a.createElement("td",{onClick:this._onRowClick.bind(this)},t.get("name")),s.a.createElement("td",{onClick:this._onRowClick.bind(this)},s.a.createElement(f.a,{amount:a.get("total_votes"),asset:"1.3.0"})),s.a.createElement("td",null,s.a.createElement("a",{href:r,rel:"noopener noreferrer",target:"_blank"},a.get("url"))))}}]),t}(s.a.Component);E.propTypes={committee_member:u.a.ChainAccount.isRequired},E.contextTypes={router:s.a.PropTypes.object.isRequired},E=Object(p.a)(E,{keep_updating:!0});var O=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={sortBy:"rank",inverseSort:!0},e}return i(t,e),k(t,[{key:"_setSort",value:function(e){this.setState({sortBy:e,inverseSort:e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort})}},{key:"render",value:function(){var e=this,t=this.props,n=t.committee_members,a=t.cardView,r=t.membersList,i=this.state,o=i.sortBy,c=i.inverseSort,l=null,m={};return n.filter(function(e){return!!e&&-1!==r.indexOf(e.get("id"))}).sort(function(e,t){if(e&&t)return parseInt(t.get("total_votes"),10)-parseInt(e.get("total_votes"),10)}).forEach(function(e,t){e&&(m[e.get("id")]=t+1)}),n.length>0&&n[1]&&(l=n.filter(function(t){if(!t)return!1;var n=b.b.getObject(t.get("committee_member_account"));return!!n&&-1!==n.get("name").indexOf(e.props.filter)}).sort(function(e,t){var n=b.b.getObject(e.get("committee_member_account")),a=b.b.getObject(t.get("committee_member_account"));if(!n||!a)return 0;switch(o){case"name":return n.get("name")>a.get("name")?c?1:-1:n.get("name")<a.get("name")?c?-1:1:0;case"rank":return c?m[e.get("id")]-m[t.get("id")]:m[t.get("id")]-m[e.get("id")];default:return c?parseInt(e.get(o),10)-parseInt(t.get(o),10):parseInt(t.get(o),10)-parseInt(e.get(o),10)}}).map(function(e){return a?s.a.createElement(w,{key:e.get("id"),rank:m[e.get("id")],committee_member:e.get("committee_member_account")}):s.a.createElement(E,{key:e.get("id"),rank:m[e.get("id")],committee_member:e.get("committee_member_account")})})),a?s.a.createElement("div",{className:"grid-block no-margin small-up-1 medium-up-2 large-up-3"},l):s.a.createElement("table",{className:"table table-hover"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"rank")},s.a.createElement(d.a,{content:"explorer.witnesses.rank"})),s.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"name")},s.a.createElement(d.a,{content:"account.votes.name"})),s.a.createElement("th",{className:"clickable",onClick:this._setSort.bind(this,"total_votes")},s.a.createElement(d.a,{content:"account.votes.votes"})),s.a.createElement("th",null,s.a.createElement(d.a,{content:"account.votes.url"})))),s.a.createElement("tbody",null,l))}}]),t}(s.a.Component);O.propTypes={committee_members:u.a.ChainObjectsList.isRequired},O=Object(p.a)(O,{keep_updating:!0,show_loader:!0});var C=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={filterCommitteeMember:e.filterCommitteeMember||"",cardView:e.cardView},n}return i(t,e),k(t,[{key:"shouldComponentUpdate",value:function(e,t){return!l.a.is(e.globalObject,this.props.globalObject)||t.filterCommitteeMember!==this.state.filterCommitteeMember||t.cardView!==this.state.cardView}},{key:"_onFilter",value:function(e){e.preventDefault(),this.setState({filterCommitteeMember:e.target.value.toLowerCase()}),v.a.changeViewSetting({filterCommitteeMember:e.target.value.toLowerCase()})}},{key:"_toggleView",value:function(){v.a.changeViewSetting({cardViewCommittee:!this.state.cardView}),this.setState({cardView:!this.state.cardView})}},{key:"render",value:function(){var e=this.props.globalObject;e=e.toJS();var t=[];for(var n in e.active_committee_members)e.active_committee_members.hasOwnProperty(n)&&t.push(e.active_committee_members[n]);var a=s.a.createElement("div",{className:"grid-block"},s.a.createElement("div",{className:"grid-block page-layout vertical medium-horizontal"},s.a.createElement("div",{className:"grid-block shrink"},s.a.createElement("div",{className:"grid-content"},s.a.createElement("h5",null,s.a.createElement(d.a,{content:"explorer.committee_members.active"}),": ",Object.keys(e.active_committee_members).length),s.a.createElement("br",null),s.a.createElement("div",{className:"view-switcher"},s.a.createElement("span",{className:"button outline",onClick:this._toggleView.bind(this)},this.state.cardView?s.a.createElement(d.a,{content:"explorer.witnesses.table"}):s.a.createElement(d.a,{content:"explorer.witnesses.card"}))))),s.a.createElement("div",{className:"grid-block vertical"},s.a.createElement("div",{className:"grid-block vertical shrink"},s.a.createElement(d.a,{component:"h3",content:"markets.filter"}),s.a.createElement("input",{type:"text",value:this.state.filterCommitteeMember,onChange:this._onFilter.bind(this)})),s.a.createElement("div",{className:"grid-content"},s.a.createElement(O,{committee_members:l.a.List(e.active_committee_members),membersList:e.active_committee_members,filter:this.state.filterCommitteeMember,cardView:this.state.cardView})))));return s.a.createElement(y.default,{tab:"committee_members",content:a})}}]),t}(s.a.Component);C.propTypes={globalObject:u.a.ChainObject.isRequired},C.defaultProps={globalObject:"2.0.0"},C=Object(p.a)(C,{keep_updating:!0});var T=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),k(t,[{key:"render",value:function(){return s.a.createElement(C,this.props)}}]),t}(s.a.Component);T=Object(g.connect)(T,{listenTo:function(){return[_.a]},getProps:function(){return{cardView:_.a.getState().viewSettings.get("cardViewCommittee"),filterCommitteeMember:_.a.getState().viewSettings.get("filterCommitteeMember")}}}),t.default=T},41:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n.n(o),c=(n(33),n(3)),l=(n.n(c),n(56),n(1513)),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tabs:[{name:"blocks",link:"/explorer/blocks",translate:"explorer.blocks.title"},{name:"assets",link:"/explorer/assets",translate:"explorer.assets.title"},{name:"accounts",link:"/explorer/accounts",translate:"explorer.accounts.title"},{name:"witnesses",link:"/explorer/witnesses",translate:"explorer.witnesses.title"},{name:"committee_members",link:"/explorer/committee-members",translate:"explorer.committee_members.title"},{name:"markets",link:"/explorer/markets",translate:"markets.title"},{name:"fees",link:"/explorer/fees",translate:"fees.title"}]},n}return i(t,e),m(t,[{key:"render",value:function(){for(var e=this,t=this.state.tabs.findIndex(function(t){return t.name===e.props.tab}),n=[],a=0;a<this.state.tabs.length;a++){var r=this.state.tabs[a],i=t==a?this.props.content:null,o=t==a?"":r.link;n.push(s.a.createElement(l.a,{key:a,title:r.translate,isLinkTo:o},i))}return s.a.createElement(l.b,{defaultActiveTab:t,segmented:!1,setting:"explorerTab-{this.props.tab}",className:"account-tabs",tabsClass:"account-overview no-padding bordered-header content-block"},n)}}]),t}(s.a.Component);u.propTypes={tab:s.a.PropTypes.string,content:s.a.PropTypes.object},u.defaultProps={tab:"blocks",content:null},t.default=u}});
//# sourceMappingURL=21.js.map