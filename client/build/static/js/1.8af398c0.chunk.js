webpackJsonp([1],{674:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(6),s=a.n(l),i=a(64),o=(a.n(i),a(38)),m=a.n(o),u=a(685),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),f(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"main-section"},s.a.createElement("div",{id:"breadcrumbs-wrapper"},s.a.createElement("div",{className:""},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m12 l12"},s.a.createElement("h5",{className:"breadcrumbs-title"},"My Documents"),s.a.createElement("ol",{className:"breadcrumbs"},s.a.createElement("li",null,s.a.createElement(i.Link,{to:"/"},"Dashboard")),s.a.createElement("li",{className:"active"},"Documents")))))),s.a.createElement("div",{className:"row"},this.props.documents.map(function(t,a){return s.a.createElement(u.a,{key:a,document:t,user:e.props.user})}))))}}]),t}(s.a.Component);p.propTypes={documents:m.a.array.isRequired,user:m.a.object.isRequired},t.default=p},685:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=a(6),s=a.n(l),i=a(38),o=a.n(i),m=a(720),u=a.n(m),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),f(t,[{key:"render",value:function(){var e=this.props.user,t=e.UserId,a=e.RoleId,n=this.props.document,r=n.OwnerId,c=n.permission,l=s.a.createElement("li",null,s.a.createElement("a",{className:"btn-floating waves-effect waves-light light-blue"},s.a.createElement("i",{className:"fa fa-info activator"})));if(1===a||r===t)l=s.a.createElement("ul",{className:"card-action-buttons"},s.a.createElement("li",null,s.a.createElement("a",{className:"btn-floating waves-effect waves-light light-blue"},s.a.createElement("i",{className:"fa fa-info activator"}))),s.a.createElement("li",null,s.a.createElement("a",{className:"btn-floating waves-effect waves-light green"},s.a.createElement("i",{className:"fa fa-edit"}))),s.a.createElement("li",null,s.a.createElement("a",{className:"btn-floating waves-effect waves-light red"},s.a.createElement("i",{className:"fa fa-trash"}))));else if("public"===c)return s.a.createElement("ul",{className:"card-action-buttons"},s.a.createElement("li",null,s.a.createElement("a",{className:"btn-floating waves-effect waves-light light-blue"},s.a.createElement("i",{className:"fa fa-info activator"}))),s.a.createElement("li",null,s.a.createElement("a",{className:"btn-floating waves-effect waves-light light-blue"},s.a.createElement("i",{className:"fa fa-edit"}))),s.a.createElement("li",null));var i=s.a.createElement("a",{className:"btn-floating btn-large btn-permission waves-effect waves-light green"},s.a.createElement("i",{className:"fa fa-unlock"})),o=s.a.createElement("a",{className:"btn-floating btn-large btn-permission waves-effect waves-light pink red"},s.a.createElement("i",{className:"fa fa-lock"}));return s.a.createElement("div",{className:"col s12 m12 l4"},s.a.createElement("div",{className:"document-card"},s.a.createElement("div",{className:"card hoverable"},s.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},"public"===c?i:o,s.a.createElement("img",{src:u.a,alt:"document-img"})),l,s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"card-title grey-text text-darken-4"},s.a.createElement("a",{href:"#",className:"grey-text text-darken-4"},this.props.document.title)))),s.a.createElement("div",{className:"card-reveal"},s.a.createElement("span",{className:"card-title grey-text text-darken-4"},s.a.createElement("i",{className:"fa fa-close right"})," ",this.props.document.title," "),this.props.document.content))))}}]),t}(s.a.Component);p.propTypes={document:o.a.object.isRequired,user:o.a.object.isRequired},t.a=p},720:function(e,t,a){e.exports=a.p+"static/media/document.1b4296da.png"}});
//# sourceMappingURL=1.8af398c0.chunk.js.map