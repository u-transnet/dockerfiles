webpackJsonp([40],{1558:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),c=n.n(l),s=n(59),i=(n.n(s),n(173)),u=n(77),p=n(15),m=n(109),f=n(25),g=n.n(f),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={title:null,start:new Date,end:null,pay:null,url:"http://",vesting:7},e}return o(t,e),d(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.currentAccount,this.props.currentAccount,!p.a.are_equal_shallow(t,this.state)}},{key:"onSubmit",value:function(){i.a.createWorker(this.state,this.props.currentAccount).catch(function(e){console.log("error",e);var t=e.message&&e.message.length&&e.message.length>0?e.message.split("stack")[0]:"unknown error";m.a.addNotification({message:"Failed to create worker: "+t,level:"error",autoDismiss:10})})}},{key:"render",value:function(){var e=this;return console.log("state:",this.state),c.a.createElement("div",{className:"grid-block",style:{paddingTop:20}},c.a.createElement("div",{className:"grid-content large-9 large-offset-3 small-12"},c.a.createElement(g.a,{content:"explorer.workers.create",component:"h3"}),c.a.createElement("form",{style:{maxWidth:800}},c.a.createElement(g.a,{content:"explorer.workers.create_text_1",component:"p"}),c.a.createElement(g.a,{content:"explorer.workers.create_text_2",component:"p"}),c.a.createElement("label",null,c.a.createElement(g.a,{content:"explorer.workers.title"}),c.a.createElement("input",{onChange:function(t){e.setState({title:t.target.value})},type:"text"})),c.a.createElement(g.a,{content:"explorer.workers.name_text",component:"p"}),c.a.createElement("div",{style:{width:"50%",paddingRight:"2.5%",display:"inline-block"}},c.a.createElement("label",null,c.a.createElement(g.a,{content:"account.votes.start"}),c.a.createElement("input",{onChange:function(t){e.setState({start:new Date(t.target.value)})},type:"date"}))),c.a.createElement("div",{style:{width:"50%",paddingLeft:"2.5%",display:"inline-block"}},c.a.createElement("label",null,c.a.createElement(g.a,{content:"account.votes.end"}),c.a.createElement("input",{onChange:function(t){e.setState({end:new Date(t.target.value)})},type:"date"}))),c.a.createElement(g.a,{content:"explorer.workers.date_text",component:"p"}),c.a.createElement("label",null,c.a.createElement(g.a,{content:"explorer.workers.daily_pay"}),c.a.createElement("input",{onChange:function(t){e.setState({pay:t.target.value})},type:"number"})),c.a.createElement(g.a,{content:"explorer.workers.pay_text",component:"p"}),c.a.createElement("label",null,c.a.createElement(g.a,{content:"explorer.workers.website"}),c.a.createElement("input",{onChange:function(t){e.setState({url:t.target.value})},type:"text"})),c.a.createElement(g.a,{content:"explorer.workers.url_text",component:"p"}),c.a.createElement("label",null,c.a.createElement(g.a,{content:"explorer.workers.vesting_pay"}),c.a.createElement("input",{defaultValue:this.state.vesting,onChange:function(t){e.setState({vesting:parseInt(t.target.value)})},type:"number"})),c.a.createElement(g.a,{content:"explorer.workers.vesting_text",component:"p"}),c.a.createElement("div",{className:"button-group",onClick:this.onSubmit.bind(this)},c.a.createElement("div",{className:"button",type:"submit"},"Publish")))))}}]),t}(c.a.Component);t.default=b=Object(s.connect)(b,{listenTo:function(){return[u.a]},getProps:function(){return{currentAccount:u.a.getState().currentAccount}}})}});
//# sourceMappingURL=40.js.map