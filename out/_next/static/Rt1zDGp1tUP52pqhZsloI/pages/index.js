(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{159:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),i=n(0),r=n.n(i);n(28);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement("div",{className:"jsx-4082332371 "+(this.props.style.header||"")},this.props.activeHeader&&r.a.createElement("h1",{className:"jsx-4082332371 "+(this.props.style.h1||"")},"Click and find out how to start calculate fast in a simple way!"),r.a.createElement("div",{onClick:this.props.onClick,className:"jsx-4082332371 "+(this.props.style.button||"")},this.props.activeHeader?"Let's start":"Starting panel"),r.a.createElement(o.a,{styleId:"4082332371",css:[".header.jsx-4082332371{padding:10% 0;width:100%;height:70%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;background:white;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;}",".h1.jsx-4082332371{padding:5%;width:100%;}",".button.jsx-4082332371{padding:5%;background:#00ff11;width:15%;box-shadow:0px 0px 50px 20px rgba(0,255,17,1);}",".button2.jsx-4082332371{position:relative;z-index:1;margin-left:0px;height:100%;width:20%;background:#00ff11;box-shadow:0px 0px 30px 10px rgba(0,255,17,1);}",".header2.jsx-4082332371{height:5%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-animation-name:toLeftSide-jsx-4082332371;animation-name:toLeftSide-jsx-4082332371;-webkit-animation:toLeftSide-jsx-4082332371 2s forwards;animation:toLeftSide-jsx-4082332371 2s forwards;background-color:white;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;}","@-webkit-keyframes toLeftSide-jsx-4082332371{from{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}to{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}","@keyframes toLeftSide-jsx-4082332371{from{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}to{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}}"]}))}}])&&l(n.prototype,a),i&&l(n,i),t}();t.default=f},20:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),i=n(0),r=n.n(i),s=(n(28),n(1)),l=n(6);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,f(t).call(this,e))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props.pos,t=this.props.arg;return 0===t&&(t=""),0===e?t&&r.a.createElement("div",{onMouseOver:this.props.onMouseOver,onMouseOut:this.props.onMouseOut,className:"jsx-1181475083 output"},t>9&&r.a.createElement(s.default,{value:Object(l.display)(Math.floor(t/10))}),r.a.createElement(s.default,{value:Object(l.display)(t%10)}),r.a.createElement(s.default,{value:"/static/zero.jpg"}),r.a.createElement(s.default,{value:"/static/zero.jpg"}),r.a.createElement(o.a,{styleId:"1181475083",css:[".output.jsx-1181475083{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:25%;}",".output.jsx-1181475083:hover{box-shadow:inset 0px 0px 15px 9px rgba(0,0,0,0.75);}"]})):1===e?t&&r.a.createElement("div",{onMouseOver:this.props.onMouseOver,onMouseOut:this.props.onMouseOut,className:"jsx-1539994407 output"},t>0?r.a.createElement(s.default,{value:"/static/plus.jpg"}):r.a.createElement(s.default,{value:"/static/minus.jpg"}),Math.abs(t)>9&&r.a.createElement(s.default,{value:Object(l.display)(Math.floor(Math.abs(t/10))%10)}),r.a.createElement(s.default,{value:Object(l.display)(Math.abs(t%10))}),r.a.createElement(s.default,{value:"/static/zero.jpg"}),r.a.createElement(o.a,{styleId:"1539994407",css:[".output.jsx-1539994407{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:25%;margin:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".output.jsx-1539994407:hover{box-shadow:inset 0px 0px 15px 9px rgba(0,0,0,0.75);}"]})):2===e?t&&r.a.createElement("div",{onMouseOver:this.props.onMouseOver,onMouseOut:this.props.onMouseOut,className:"jsx-1428226127 output"},t>0?r.a.createElement(s.default,{value:"/static/plus.jpg"}):r.a.createElement(s.default,{value:"/static/minus.jpg"}),Math.abs(t)>9&&r.a.createElement(s.default,{value:Object(l.display)(Math.floor(Math.abs(t/10))%10)}),r.a.createElement(s.default,{value:Object(l.display)(Math.abs(t%10))}),r.a.createElement(s.default,{value:"/static/zero.jpg"}),r.a.createElement(o.a,{styleId:"1428226127",css:[".output.jsx-1428226127{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:0;width:25%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".output.jsx-1428226127:hover{box-shadow:inset 0px 0px 15px 9px rgba(0,0,0,0.75);}"]})):t&&r.a.createElement("div",{onMouseOver:this.props.onMouseOver,onMouseOut:this.props.onMouseOut,className:"jsx-1428226127 output"},t>0?r.a.createElement(s.default,{value:"/static/plus.jpg"}):r.a.createElement(s.default,{value:"/static/minus.jpg"}),Math.abs(t)>9&&r.a.createElement(s.default,{value:Object(l.display)(Math.floor(Math.abs(t/10))%10)}),r.a.createElement(s.default,{value:Object(l.display)(Math.abs(t%10))}),r.a.createElement(o.a,{styleId:"1428226127",css:[".output.jsx-1428226127{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:0;width:25%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".output.jsx-1428226127:hover{box-shadow:inset 0px 0px 15px 9px rgba(0,0,0,0.75);}"]}))}}])&&c(n.prototype,a),i&&c(n,i),t}();t.default=d},220:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(221),{page:e.exports.default}})},221:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),i=n(0),r=n.n(i),s=(n(28),n(159)),l=n(9);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=!(o=p(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?h(a):o,d(h(h(n)),"state",{classHeader:{header:"header",button:"button",h1:"h1",side:"center"},classBody:"body",body:!1}),d(h(h(n)),"activeHeader",!0),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),n=t,(a=[{key:"toggleClass",value:function(){var e=this;"header"===this.state.classHeader.header?(this.activeHeader=!1,this.setState({classHeader:{header:"header2",button:"button2",h1:"h12"},classBody:"body2"}),setTimeout(function(){return e.setState({body:!0,side:"left"})},500)):(this.setState({classHeader:{header:"header",button:"button",h1:"h1"}}),this.activeHeader=!0,setTimeout(function(){e.setState({body:!1})},500),this.setState({classBody:"body"}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"jsx-651904452 app"},r.a.createElement("div",{className:"jsx-651904452 content"},r.a.createElement(s.default,{activeHeader:this.activeHeader,style:this.state.classHeader,onClick:function(){return e.toggleClass()}}),this.state.body&&r.a.createElement(l.default,{style:this.state.classBody},"body")),r.a.createElement(o.a,{styleId:"651904452",css:[".app.jsx-651904452{width:100%;height:93vh;padding:1% 0;background-image:url(/static/backgroundPhoto.jpeg);text-align:center;}",".content.jsx-651904452{height:90%;margin:auto;width:90%;}"]}))}}])&&c(n.prototype,a),i&&c(n,i),t}();t.default=b},42:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),i=n(0),r=n.n(i),s=(n(28),n(9));function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,p(t).call(this,e))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){return r.a.createElement("div",{className:o.a.dynamic([["1609700845",[isNaN(Object(s.validator)(this.props.value))&&this.props.value?"3px solid red":"",isNaN(Object(s.validator)(this.props.value))&&this.props.value?"10px":""]]])+" input"},r.a.createElement("div",{className:o.a.dynamic([["1609700845",[isNaN(Object(s.validator)(this.props.value))&&this.props.value?"3px solid red":"",isNaN(Object(s.validator)(this.props.value))&&this.props.value?"10px":""]]])},"Please, insert ",this.props.pos," number from 1 to 99"),r.a.createElement("input",{value:this.props.value,onChange:this.props.handleValue,className:o.a.dynamic([["1609700845",[isNaN(Object(s.validator)(this.props.value))&&this.props.value?"3px solid red":"",isNaN(Object(s.validator)(this.props.value))&&this.props.value?"10px":""]]])}),r.a.createElement(o.a,{styleId:"1609700845",css:[".input.__jsx-style-dynamic-selector{display:inline-block;border:".concat(isNaN(Object(s.validator)(this.props.value))&&this.props.value?"3px solid red":"",";padding:10px;border-radius:").concat(isNaN(Object(s.validator)(this.props.value))&&this.props.value?"10px":"",";margin:2px;}")],dynamic:[isNaN(Object(s.validator)(this.props.value))&&this.props.value?"3px solid red":"",isNaN(Object(s.validator)(this.props.value))&&this.props.value?"10px":""]}))}}])&&u(n.prototype,a),i&&u(n,i),t}();t.default=h},9:function(e,t,n){"use strict";n.r(t),n.d(t,"validator",function(){return m});var a=n(3),o=n.n(a),i=n(0),r=n.n(i),s=(n(28),n(1)),l=n(6),u=n(20),c=n(42);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){e=Number(e);var t=[0,0];return t[0]=e-e%10,e%10<5&&e>10?t[1]=e%10:e>0&&e<10?(t[0]=10,t[1]=e-10):t=0===e?[0,0]:e>90?[90,e%10]:[t[0]+10,e%10-10],t},m=function(e){var t=Number(e);return e?isNaN(t)?"error":Number.isInteger(t)?t>=0?t>0?t<100?t:"easy":"zero":"negative":"integer":"empty"},x=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=h(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?b(a):o).state={highlight:{first:!1,second:!1,third:!1,fourth:!1},firstValue:"",secondValue:""},n.handleFirstValue=n.handleFirstValue.bind(b(b(n))),n.handleSecondValue=n.handleSecondValue.bind(b(b(n))),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.a.Component),n=t,(a=[{key:"handleFirstValue",value:function(e){this.setState({firstValue:e.target.value})}},{key:"handleSecondValue",value:function(e){this.setState({secondValue:e.target.value})}},{key:"highlight",value:function(e){0!==e||this.state.highlight.first?0===e&&this.state.highlight.first?this.setState({highlight:{first:!1}}):1!==e||this.state.highlight.second?1===e&&this.state.highlight.second?this.setState({highlight:{second:!1}}):2!==e||this.state.highlight.third?2===e&&this.state.highlight.third?this.setState({highlight:{third:!1}}):3!==e||this.state.highlight.fourth?3===e&&this.state.highlight.fourth&&this.setState({highlight:{fourth:!1}}):this.setState({highlight:{fourth:!0}}):this.setState({highlight:{third:!0}}):this.setState({highlight:{second:!0}}):this.setState({highlight:{first:!0}})}},{key:"render",value:function(){var e=this,t=this.state.firstValue,n=this.state.secondValue,a=y(t),i=y(n),p=[a[0]*i[0]/100,a[0]*i[1]/10,a[1]*i[0]/10,a[1]*i[1]];return r.a.createElement("div",{className:"jsx-3074875907 "+(this.props.style||"")},r.a.createElement("h1",{className:"jsx-3074875907"},"After you type in number, hover over output to see from where it comes from"),r.a.createElement(c.default,{value:t,handleValue:this.handleFirstValue,pos:"first"}),r.a.createElement(c.default,{value:n,handleValue:this.handleSecondValue,pos:"second"}),r.a.createElement("div",{className:"jsx-3074875907 solution"},r.a.createElement(l.default,{highlight:this.state.highlight,value:m(t),pos:1}),r.a.createElement(l.default,{highlight:this.state.highlight,value:m(n),pos:2}),"number"==typeof m(t)&&"number"==typeof m(n)&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jsx-3074875907 equality"},t&&n&&r.a.createElement(s.default,{value:"/static/equal.jpg"})),r.a.createElement(u.default,{onMouseOver:function(){return e.highlight(0)},onMouseOut:function(){return e.highlight(0)},arg:p[0],pos:0}),r.a.createElement(u.default,{onMouseOver:function(){return e.highlight(1)},onMouseOut:function(){return e.highlight(1)},arg:p[1],pos:1}),r.a.createElement(u.default,{onMouseOver:function(){return e.highlight(2)},onMouseOut:function(){return e.highlight(2)},arg:p[2],pos:2}),r.a.createElement(u.default,{onMouseOver:function(){return e.highlight(3)},onMouseOut:function(){return e.highlight(3)},arg:p[3],pos:3}))),r.a.createElement(o.a,{styleId:"3074875907",css:[".equality.jsx-3074875907{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}",".solution.jsx-3074875907{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".body.jsx-3074875907{width:auto;height:80%;background-color:white;-webkit-animation-name:example2-jsx-3074875907;animation-name:example2-jsx-3074875907;-webkit-animation-duration:0.5s;animation-duration:0.5s;}",".body2.jsx-3074875907{display:inline-block;position:relative;width:100%;height:95%;background-color:white;-webkit-animation-name:example-jsx-3074875907;animation-name:example-jsx-3074875907;-webkit-animation:example-jsx-3074875907 0.5s forwards;animation:example-jsx-3074875907 0.5s forwards;min-height:532px;min-width:1151px;}","@-webkit-keyframes example-jsx-3074875907{from{opacity:0;margin-top:20px;}to{opacity:1;margin-top:0px;}}","@keyframes example-jsx-3074875907{from{opacity:0;margin-top:20px;}to{opacity:1;margin-top:0px;}}","@-webkit-keyframes example2-jsx-3074875907{from{opacity:1;margin-top:0px;}to{opacity:0;margin-top:20px;}}","@keyframes example2-jsx-3074875907{from{opacity:1;margin-top:0px;}to{opacity:0;margin-top:20px;}}"]}))}}])&&f(n.prototype,a),i&&f(n,i),t}();t.default=x}},[[220,1,0]]]);