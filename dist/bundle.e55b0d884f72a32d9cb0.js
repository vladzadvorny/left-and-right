webpackJsonp([1],{"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(void 0),t.push([e.i,"*{margin:0;padding:0;box-sizing:border-box}.link,a{color:#00b0f2;text-decoration:none;border-bottom:1px solid #00b0f2;cursor:pointer}.link:hover,a:hover{color:#26c4ff}html{display:flex;flex-direction:column;min-height:100%}body{font:16px Helvetica Neue,Arial,Helvetica,Geneva,sans-serif;color:#333;padding-top:60px;padding-bottom:60px;background-color:#fff}#root,.app,body{display:flex;flex-direction:column;flex:auto}.header{display:flex;position:relative;z-index:999;justify-content:space-between;align-items:center;padding:0 15px;background-color:#383838;background:linear-gradient(180deg,#3d3d3d 0,#383838 44%,#333);position:fixed;height:60px;width:100%;top:0;color:#fff;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#3d3d3d,endColorstr=#333,GradientType=0)}.header .logo{font-size:20px}.header .logo span{color:#3fcbff}.header .timer{font-size:22px;color:#e00000}.header .right{display:flex}.header .right .levels,.header .right .start{display:flex;align-items:center;margin-right:15px}.header .right .levels svg,.header .right .start svg{font-size:40px;cursor:pointer;transition:color .1s ease-out}.header .right .levels .active,.header .right .start .active{color:#3fcbff}.header .right .levels p,.header .right .start p{margin-right:10px;font-size:16px}.header .right .start{margin-right:0}.main{flex-grow:1;display:flex;justify-content:space-between}.main .left.selected,.main .right.selected{border-color:#b30000;color:#b30000}.main .left,.main .right{width:50%;margin:15px;border:1px solid #3fcbff;border-radius:10px;background-color:#fff;display:flex;align-items:center;cursor:pointer;transition:background-color .1s ease-out}.main .left p,.main .right p{font-size:10vmin;width:100%;text-align:center;text-transform:uppercase}.main .left:hover,.main .right:hover{background-color:#3fcbff;box-shadow:0 0 30px 0 rgba(63,203,255,.7);border-color:#3fcbff}.main .left:active,.main .right:active{background-color:#1bc1ff}.main .left{margin-right:0}.footer{position:fixed;bottom:0;height:60px;width:100%;border-top:1px solid #3fcbff;display:flex;justify-content:space-between;align-items:center;padding:0 15px}.footer .left{display:flex;flex-direction:column;font-size:15px}.footer .left .readme{margin-left:30px;color:red;border-color:red}.footer .right{display:flex}.footer .ya-share2{margin-right:50px}.footer .ya-share2 .ya-share2__link{border-bottom:0}.footer ul{display:flex;list-style:none}.footer ul li{margin-left:15px;text-transform:uppercase}.screen{background-color:red;position:absolute;left:0;top:0;z-index:999;width:100%;height:100%;transition:.4s;opacity:0;visibility:hidden}.screen.show{opacity:1;visibility:visible}.popup{z-index:1000;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5)}.popup,.popup .inner{position:fixed;margin:auto}.popup .inner{left:30%;right:30%;top:35%;bottom:35%;background:#fff;border-radius:10px;padding:15px}.popup .inner .content{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%;border:1px solid #3fcbff;border-radius:10px;padding:15px}.popup .inner .text{color:#333;font-size:30px}.popup .inner .buttons{display:flex;justify-content:space-between}.popup .inner .buttons button{padding:10px 15px;font-size:16px;border:1px solid #3fcbff;border-radius:9px;border-top-left-radius:0;border-bottom-right-radius:0;cursor:pointer;margin-bottom:-16px;margin-left:-16px;background-color:#fff}.popup .inner .buttons .ok{background-color:#3fcbff;margin-right:-16px;border-top-left-radius:9px;border-bottom-right-radius:9px;border-top-right-radius:0;border-bottom-left-radius:0}@media only screen and (max-device-width:700px){.header .logo{font-size:16px}.header .timer{font-size:22px}.footer .left .email,.header .right .levels p,.header .right .start p{display:none}.footer .left .readme{margin-left:0}.footer .ya-share2{display:none}.popup .inner{left:5%;right:5%;top:5%;bottom:5%;border-radius:10px}}",""])},"./node_modules/css-loader/lib/css-base.js":function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},"./node_modules/react-hot-loader/index.js":function(e,t,n){e.exports=n("./node_modules/react-hot-loader/lib/index.js")},"./node_modules/react-hot-loader/lib/AppContainer.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react-hot-loader/lib/AppContainer.prod.js")},"./node_modules/react-hot-loader/lib/AppContainer.prod.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./node_modules/react/index.js"),c=s.Component,l=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return this.props.component?s.createElement(this.props.component,this.props.props):s.Children.only(this.props.children)}}]),t}(c);e.exports=l},"./node_modules/react-hot-loader/lib/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react-hot-loader/lib/index.prod.js")},"./node_modules/react-hot-loader/lib/index.prod.js":function(e,t,n){"use strict";e.exports.AppContainer=n("./node_modules/react-hot-loader/lib/AppContainer.js")},"./node_modules/react-icon-base/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/react/index.js"),s=r(a),c=n("./node_modules/prop-types/index.js"),l=r(c),u=function(e,t){var n=e.children,r=e.color,a=e.size,c=e.style,l=e.width,u=e.height,d=o(e,["children","color","size","style","width","height"]),f=t.reactIconBase,p=void 0===f?{}:f,h=a||p.size||"1em";return s.default.createElement("svg",i({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:u||h,width:l||h},p,d,{style:i({verticalAlign:"middle",color:r||p.color},p.style||{},c)}))};u.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number]),width:l.default.oneOfType([l.default.string,l.default.number]),height:l.default.oneOfType([l.default.string,l.default.number]),style:l.default.object},u.contextTypes={reactIconBase:l.default.shape(u.propTypes)},t.default=u,e.exports=t.default},"./node_modules/react-icons/lib/md/looks-3.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/index.js"),a=r(i),s=n("./node_modules/react-icon-base/lib/index.js"),c=r(s),l=function(e){return a.default.createElement(c.default,o({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m25 17.5v-2.5c0-1.9-1.5-3.4-3.3-3.4h-6.7v3.4h6.7v3.4h-3.3v3.2h3.3v3.4h-6.7v3.4h6.7c1.8 0 3.3-1.5 3.3-3.4v-2.5c0-1.4-1.1-2.5-2.5-2.5 1.4 0 2.5-1.1 2.5-2.5z m6.7-12.5c1.8 0 3.3 1.6 3.3 3.4v23.2c0 1.8-1.5 3.4-3.3 3.4h-23.3c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.3z"})))};t.default=l,e.exports=t.default},"./node_modules/react-icons/lib/md/looks-4.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/index.js"),a=r(i),s=n("./node_modules/react-icon-base/lib/index.js"),c=r(s),l=function(e){return a.default.createElement(c.default,o({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m25 28.4v-16.8h-3.4v6.8h-3.2v-6.8h-3.4v10h6.6v6.8h3.4z m6.6-23.4c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z"})))};t.default=l,e.exports=t.default},"./node_modules/react-icons/lib/md/looks-one.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/index.js"),a=r(i),s=n("./node_modules/react-icon-base/lib/index.js"),c=r(s),l=function(e){return a.default.createElement(c.default,o({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m23.4 28.4v-16.8h-6.8v3.4h3.4v13.4h3.4z m8.2-23.4c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z"})))};t.default=l,e.exports=t.default},"./node_modules/react-icons/lib/md/looks-two.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/index.js"),a=r(i),s=n("./node_modules/react-icon-base/lib/index.js"),c=r(s),l=function(e){return a.default.createElement(c.default,o({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m25 18.4v-3.4c0-1.9-1.6-3.4-3.4-3.4h-6.6v3.4h6.6v3.4h-3.2c-1.8 0-3.4 1.4-3.4 3.2v6.8h10v-3.4h-6.6v-3.4h3.2c1.8 0 3.4-1.4 3.4-3.2z m6.6-13.4c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z"})))};t.default=l,e.exports=t.default},"./node_modules/react-icons/lib/md/pause-circle-filled.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/index.js"),a=r(i),s=n("./node_modules/react-icon-base/lib/index.js"),c=r(s),l=function(e){return a.default.createElement(c.default,o({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m25 26.6v-13.2h-3.4v13.2h3.4z m-6.6 0v-13.2h-3.4v13.2h3.4z m1.6-23.2q6.9 0 11.8 4.8t4.8 11.8-4.8 11.8-11.8 4.8-11.8-4.8-4.8-11.8 4.8-11.8 11.8-4.8z"})))};t.default=l,e.exports=t.default},"./node_modules/react-icons/lib/md/play-circle-filled.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/index.js"),a=r(i),s=n("./node_modules/react-icon-base/lib/index.js"),c=r(s),l=function(e){return a.default.createElement(c.default,o({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m16.6 27.5l10-7.5-10-7.5v15z m3.4-24.1q6.9 0 11.8 4.8t4.8 11.8-4.8 11.8-11.8 4.8-11.8-4.8-4.8-11.8 4.8-11.8 11.8-4.8z"})))};t.default=l,e.exports=t.default},"./node_modules/style-loader/lib/addStyles.js":function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function i(e,t){var n=b(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=b(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),i(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=y++;n=v||(v=s(t)),r=d.bind(null,n,l,!1),o=d.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=j(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(n){if(void 0===t[n]){var r=e.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[n]=r}return t[n]}}(function(e){return document.querySelector(e)}),v=null,y=0,g=[],j=n("./node_modules/style-loader/lib/urls.js");e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=h[s.id];c.refs--,i.push(c)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete h[c.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},"./node_modules/style-loader/lib/urls.js":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},"./src/App.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/index.js"),s=n.n(a),c=n("./node_modules/react-redux/es/index.js"),l=n("./src/components/Header.js"),u=n("./src/components/Main.js"),d=n("./src/components/Footer.js"),f=n("./src/components/Screen.js"),p=n("./src/components/Sounds.js"),h=n("./src/actions.js"),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(){return Math.random()>=.5?"left":"right"},v=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),m(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props,n=t.isStart,r=t.setNext,o=t.show,i=t.direction;e.isStart&&n!==e.isStart?r(b()):e.isStart&&i.hash!==e.direction.hash&&(e.direction.direction===e.nextDirection.direction?setTimeout(function(){r(b())},900):o())}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.error,n=e.hide,r=e.setNext,o=e.nextDirection;t&&setTimeout(function(){n(),setTimeout(function(){r(o.direction)},500)},200)}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(l.a,null),s.a.createElement(u.a,null),s.a.createElement(d.a,null),s.a.createElement(f.a,null),s.a.createElement(p.a,null))}}]),t}(a.Component),y=function(e){return{level:e.level,isStart:e.app,error:e.error,direction:e.direction,nextDirection:e.nextDirection}},g={hide:h.d,show:h.e,setNext:h.g};t.a=Object(c.connect)(y,g)(v)},"./src/actions.js":function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"e",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"f",function(){return s}),n.d(t,"g",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u});var r=n("./src/reducers/actionTypes.js"),o=function(e){return{type:r.c,level:e}},i=function(){return{type:r.e}},a=function(){return{type:r.d}},s=function(e){return{type:r.f,direction:e,hash:Math.random().toString(36).substring(5)}},c=function(e){return{type:r.g,direction:e,hash:Math.random().toString(36).substring(5)}},l=function(){return{type:r.a}},u=function(){return{type:r.b}}},"./src/assets/global.json":function(e,t){e.exports={chooseLevel:["Choose level","Выбери уровень"],startIt:["Start it","Поехали"],left:["Left","Левый"],right:["Right","Правый"],start:["Start","Начать"],cancel:["Cancel","Отмена"],goodJob:["Good job! Now you can rest.","Хорошая работа! Теперь можно отдохнуть."],popupText:["Click on the rectangle, which I'll call you.","Кликай по прямоугольнику, который я буду называть."],popupOk:["Start!","Начать!"],popupCancel:["Cancel","Отмена"]}},"./src/assets/sounds.json":function(e,t){e.exports={error:"error.mp3",en:{one:{left:"left_one_en.mp3",right:"right_one_en.mp3"},two:{left:"left_en.mp3",right:"right_en.mp3"}},ru:{one:{left:"left_one_ru.mp3",right:"right_one_ru.mp3"},two:{left:"left_ru.mp3",right:"right_ru.mp3"}}}},"./src/components/Footer.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/index.js"),s=n.n(a),c=n("./node_modules/react-localize-redux/es/index.js"),l=n("./node_modules/react-redux/es/index.js"),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.languages,n=e.setLanguage,r=e.currentLanguage;return s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"left"},s.a.createElement("p",null,s.a.createElement("a",{className:"email",href:"mailto:vladzadvorny@icloud.com"},"vladzadvorny@icloud.com"),s.a.createElement("a",{className:"readme",href:"https://github.com/vladzadvorny/left-and-right/blob/master/README.md",target:"_blank"},"README!"))),s.a.createElement("div",{className:"right"},s.a.createElement("div",{className:"ya-share2","data-services":"vkontakte,facebook,odnoklassniki,twitter,whatsapp","data-size":"s"}),s.a.createElement("ul",null,t.map(function(e){return s.a.createElement("li",{key:e.code},s.a.createElement("span",{className:e.code!==r?"link":null,onClick:function(){return n(e.code)}},e.code))}))))}}]),t}(a.Component),f=function(e){return{languages:Object(c.getLanguages)(e.locale),currentLanguage:Object(c.getActiveLanguage)(e.locale).code}},p={setLanguage:c.setActiveLanguage};t.a=Object(l.connect)(f,p)(d)},"./src/components/Header.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/index.js"),s=n.n(a),c=n("./node_modules/react-redux/es/index.js"),l=n("./node_modules/react-localize-redux/es/index.js"),u=n("./node_modules/react-icons/lib/md/looks-one.js"),d=n.n(u),f=n("./node_modules/react-icons/lib/md/looks-two.js"),p=n.n(f),h=n("./node_modules/react-icons/lib/md/looks-3.js"),m=n.n(h),b=n("./node_modules/react-icons/lib/md/looks-4.js"),v=n.n(b),y=n("./node_modules/react-icons/lib/md/pause-circle-filled.js"),g=n.n(y),j=n("./node_modules/react-icons/lib/md/play-circle-filled.js"),x=n.n(j),_=n("./src/actions.js"),w=n("./src/components/Popup.js"),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={popup:!1,time:900},e}return i(t,e),O(t,[{key:"timer",value:function(e){var t=this;e?this.t=setInterval(function(){t.state.time>1?t.setState({time:t.state.time-1}):(t.props.stop(),t.timer(!1),alert(t.props.translate("goodJob")))},1e3):(clearInterval(this.t),this.setState({time:900}))}},{key:"newLevel",value:function(e){this.props.stop(),this.timer(!1),this.props.change(e)}},{key:"showPopup",value:function(){this.setState({popup:!0})}},{key:"hidePopup",value:function(e){var t=this.props.start;"ok"===e&&(t(),this.timer(!0)),this.setState({popup:!1})}},{key:"renderAppButton",value:function(){var e=this,t=this.props,n=t.isStart,r=t.stop;return n?s.a.createElement(g.a,{onClick:function(){r(),e.timer(!1)},className:"active"}):s.a.createElement(x.a,{onClick:function(){return e.showPopup()}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.translate,r=t.level,o=this.state.time,i=Math.floor(o/60),a=o-60*i;return s.a.createElement("div",{className:"header"},900===o?s.a.createElement("div",{className:"logo"},"Left ",s.a.createElement("span",null,"&")," Right"):s.a.createElement("div",{className:"timer"},i,":",a<10?"0"+a:a),s.a.createElement("div",{className:"right"},s.a.createElement("div",{className:"levels"},s.a.createElement("p",null,n("chooseLevel"),":"),s.a.createElement(d.a,{className:1===r?"active":null,onClick:function(){return e.newLevel(1)}}),s.a.createElement(p.a,{className:2===r?"active":null,onClick:function(){return e.newLevel(2)}}),s.a.createElement(m.a,{className:3===r?"active":null,onClick:function(){return e.newLevel(3)}}),s.a.createElement(v.a,{className:4===r?"active":null,onClick:function(){return e.newLevel(4)}})),s.a.createElement("div",{className:"start"},s.a.createElement("p",null,n("startIt"),":"),this.renderAppButton())),this.state.popup?s.a.createElement(w.a,{hideOk:function(){return e.hidePopup("ok")},hideCancel:function(){return e.hidePopup("cancel")}}):null)}}]),t}(a.Component),k=function(e){return{level:e.level,translate:Object(l.getTranslate)(e.locale),isStart:e.app}},P={change:_.c,start:_.a,stop:_.b};t.a=Object(c.connect)(k,P)(E)},"./src/components/Main.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/index.js"),s=n.n(a),c=n("./node_modules/react-redux/es/index.js"),l=n("./node_modules/react-localize-redux/es/index.js"),u=n("./src/actions.js"),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.nextDirection,n=e.level,r=e.setDirection,o=e.translate,i=["left"],a=["right"];return 1===n&&"left"===t&&i.push("selected"),1===n&&"right"===t&&a.push("selected"),s.a.createElement("div",{className:"main"},s.a.createElement("div",{role:"button",className:i.join(" "),onClick:function(){return r("left")}},s.a.createElement("p",null,1===n||2===n?o("left"):null)),s.a.createElement("div",{className:a.join(" "),role:"button",onClick:function(){return r("right")}},s.a.createElement("p",null,1===n||2===n?o("right"):null)))}}]),t}(a.Component),p=function(e){return{translate:Object(l.getTranslate)(e.locale),nextDirection:e.nextDirection.direction,level:e.level}},h={setDirection:u.f};t.a=Object(c.connect)(p,h)(f)},"./src/components/Popup.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/index.js"),s=n.n(a),c=n("./node_modules/react-redux/es/index.js"),l=n("./node_modules/react-localize-redux/es/index.js"),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.hideCancel,n=e.hideOk,r=e.translate;return s.a.createElement("div",{className:"popup"},s.a.createElement("div",{className:"inner"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"text"},r("popupText")),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{onClick:t},r("popupCancel")),s.a.createElement("button",{className:"ok",onClick:n},r("popupOk"))))))}}]),t}(a.Component),f=function(e){return{translate:Object(l.getTranslate)(e.locale)}};t.a=Object(c.connect)(f,null)(d)},"./src/components/Screen.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/index.js"),s=n.n(a),c=n("./node_modules/react-redux/es/index.js"),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.error,t=["screen"];return e&&t.push("show"),s.a.createElement("div",{className:t.join(" ")})}}]),t}(a.Component),d=function(e){return{error:e.error}};t.a=Object(c.connect)(d,null)(u)},"./src/components/Sounds.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("./node_modules/react/index.js"),s=n.n(a),c=n("./node_modules/react-redux/es/index.js"),l=n("./node_modules/react-sound/lib/index.js"),u=n.n(l),d=n("./node_modules/react-localize-redux/es/index.js"),f=n("./src/assets/sounds.json"),p=n.n(f),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={file:p.a.error,position:0,volume:100,playStatus:u.a.status.STOPPED},n}return i(t,e),h(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props,n=t.direction,r=t.currentLanguage,o=t.level,i=4===o?"two":"one";e.error&&this.setState({file:p.a.error,playStatus:u.a.status.PLAYING}),"left"===e.direction.direction&&e.direction.hash!==n.hash&&this.setState({file:p.a[r][i].left,playStatus:u.a.status.PLAYING}),"right"===e.direction.direction&&e.direction.hash!==n.hash&&this.setState({file:p.a[r][i].right,playStatus:u.a.status.PLAYING})}},{key:"render",value:function(){var e=this,t=this.state,n=t.file,r=t.playStatus,o=t.position,i=t.volume;return s.a.createElement(u.a,{url:"/left-and-right/public/"+n,playStatus:r,playFromPosition:o,volume:i,onFinishedPlaying:function(){return e.setState({playStatus:u.a.status.STOPPED})}})}}]),t}(a.Component),b=function(e){return{error:e.error,direction:e.app?e.nextDirection:e.direction,currentLanguage:Object(d.getActiveLanguage)(e.locale).code,level:e.level}},v={};t.a=Object(c.connect)(b,v)(m)},"./src/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/react/index.js"),o=n.n(r),i=n("./node_modules/react-dom/index.js"),a=n.n(i),s=n("./node_modules/redux/es/index.js"),c=n("./node_modules/react-redux/es/index.js"),l=n("./node_modules/react-localize-redux/es/index.js"),u=n("./node_modules/react-hot-loader/index.js"),d=(n.n(u),n("./node_modules/browser-locale/index.js")),f=n.n(d),p=n("./src/style.scss"),h=(n.n(p),n("./src/App.js")),m=n("./src/assets/global.json"),b=n.n(m),v=n("./src/reducers/index.js"),y=Object(s.createStore)(v.a,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=["en","ru"],j=f()().split("-")[0].toLowerCase();y.dispatch(Object(l.initialize)(g,{defaultLanguage:-1===g.indexOf(j)?g[0]:j})),y.dispatch(Object(l.addTranslation)(b.a));var x=function(){a.a.render(o.a.createElement(u.AppContainer,null,o.a.createElement(c.Provider,{store:y},o.a.createElement(h.a,null))),document.getElementById("root"))};x()},"./src/reducers/actionTypes.js":function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"g",function(){return a}),n.d(t,"f",function(){return s}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var r="CHANGE_LEVEL",o="ENABLE_ERROR",i="DISABLE_ERROR",a="SET_NEXT_DIRECTION",s="SET_DIRECTION",c="APP_START",l="APP_STOP"},"./src/reducers/app.js":function(e,t,n){"use strict";var r=n("./src/reducers/actionTypes.js");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case r.a:return!0;case r.b:return!1;default:return e}}},"./src/reducers/direction.js":function(e,t,n){"use strict";var r=n("./src/reducers/actionTypes.js"),o={direction:null,hash:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.f:return{direction:t.direction,hash:t.hash};case r.b:return{direction:null,hash:null};default:return e}}},"./src/reducers/error.js":function(e,t,n){"use strict";var r=n("./src/reducers/actionTypes.js");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch(arguments[1].type){case r.e:return!0;case r.d:return!1;default:return e}}},"./src/reducers/index.js":function(e,t,n){"use strict";var r=n("./node_modules/redux/es/index.js"),o=n("./node_modules/react-localize-redux/es/index.js"),i=n("./src/reducers/level.js"),a=n("./src/reducers/error.js"),s=n("./src/reducers/direction.js"),c=n("./src/reducers/nextDirection.js"),l=n("./src/reducers/app.js");t.a=Object(r.combineReducers)({level:i.a,locale:o.localeReducer,error:a.a,direction:s.a,nextDirection:c.a,app:l.a})},"./src/reducers/level.js":function(e,t,n){"use strict";var r=n("./src/reducers/actionTypes.js");t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];switch(t.type){case r.c:return t.level;default:return e}}},"./src/reducers/nextDirection.js":function(e,t,n){"use strict";var r=n("./src/reducers/actionTypes.js"),o={direction:null,hash:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.g:return{direction:t.direction,hash:t.hash};case r.b:return{direction:null,hash:null};default:return e}}},"./src/style.scss":function(e,t,n){var r=n("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals)}},["./src/index.js"]);