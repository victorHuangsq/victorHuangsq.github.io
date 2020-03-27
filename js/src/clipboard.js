// build time:Fri Mar 27 2020 18:34:11 GMT+0800 (中国标准时间)
(function e(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n();else if(typeof define==="function"&&define.amd)define([],n);else if(typeof exports==="object")exports["ClipboardJS"]=n();else t["ClipboardJS"]=n()})(this,function(){return function(e){var t={};function n(r){if(t[r]){return t[r].exports}var i=t[r]={i:r,l:false,exports:{}};e[r].call(i.exports,i,i.exports,n);i.l=true;return i.exports}n.m=e;n.c=t;n.i=function(e){return e};n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:r})}};n.n=function(e){var t=e&&e.__esModule?function r(){return e["default"]}:function i(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=3)}([function(e,t,n){var r,i,o;(function(a,u){if(true){!(i=[e,n(7)],r=u,o=typeof r==="function"?r.apply(t,i):r,o!==undefined&&(e.exports=o))}else if(typeof t!=="undefined"){u(e,require("select"))}else{var c={exports:{}};u(c,a.select);a.clipboardAction=c.exports}})(this,function(e,t){"use strict";var n=r(t);function r(e){return e&&e.__esModule?e:{"default":e}}var i=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var u=function(){function e(t){o(this,e);this.resolveOptions(t);this.initSelection()}a(e,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.action=e.action;this.container=e.container;this.emitter=e.emitter;this.target=e.target;this.text=e.text;this.trigger=e.trigger;this.selectedText=""}},{key:"initSelection",value:function r(){if(this.text){this.selectFake()}else if(this.target){this.selectTarget()}}},{key:"selectFake",value:function u(){var e=this;var t=document.documentElement.getAttribute("dir")=="rtl";this.removeFake();this.fakeHandlerCallback=function(){return e.removeFake()};this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||true;this.fakeElem=document.createElement("textarea");this.fakeElem.style.fontSize="12pt";this.fakeElem.style.border="0";this.fakeElem.style.padding="0";this.fakeElem.style.margin="0";this.fakeElem.style.position="absolute";this.fakeElem.style[t?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=r+"px";this.fakeElem.setAttribute("readonly","");this.fakeElem.value=this.text;this.container.appendChild(this.fakeElem);this.selectedText=(0,n.default)(this.fakeElem);this.copyText()}},{key:"removeFake",value:function c(){if(this.fakeHandler){this.container.removeEventListener("click",this.fakeHandlerCallback);this.fakeHandler=null;this.fakeHandlerCallback=null}if(this.fakeElem){this.container.removeChild(this.fakeElem);this.fakeElem=null}}},{key:"selectTarget",value:function l(){this.selectedText=(0,n.default)(this.target);this.copyText()}},{key:"copyText",value:function s(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=false}this.handleResult(e)}},{key:"handleResult",value:function f(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function d(){if(this.trigger){this.trigger.focus()}window.getSelection().removeAllRanges()}},{key:"destroy",value:function p(){this.removeFake()}},{key:"action",set:function h(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"copy";this._action=e;if(this._action!=="copy"&&this._action!=="cut"){throw new Error('Invalid "action" value, use either "copy" or "cut"')}},get:function y(){return this._action}},{key:"target",set:function v(e){if(e!==undefined){if(e&&(typeof e==="undefined"?"undefined":i(e))==="object"&&e.nodeType===1){if(this.action==="copy"&&e.hasAttribute("disabled")){throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute')}if(this.action==="cut"&&(e.hasAttribute("readonly")||e.hasAttribute("disabled"))){throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}this._target=e}else{throw new Error('Invalid "target" value, use a valid Element')}}},get:function m(){return this._target}}]);return e}();e.exports=u})},function(e,t,n){var r=n(6);var i=n(5);function o(e,t,n){if(!e&&!t&&!n){throw new Error("Missing required arguments")}if(!r.string(t)){throw new TypeError("Second argument must be a String")}if(!r.fn(n)){throw new TypeError("Third argument must be a Function")}if(r.node(e)){return a(e,t,n)}else if(r.nodeList(e)){return u(e,t,n)}else if(r.string(e)){return c(e,t,n)}else{throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}}function a(e,t,n){e.addEventListener(t,n);return{destroy:function(){e.removeEventListener(t,n)}}}function u(e,t,n){Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)});return{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function c(e,t,n){return i(document.body,e,t,n)}e.exports=o},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});(r[e]||(r[e]=[])).push({fn:t,ctx:n});return this},once:function(e,t,n){var r=this;function i(){r.off(e,i);t.apply(n,arguments)}i._=t;return this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1);var n=((this.e||(this.e={}))[e]||[]).slice();var r=0;var i=n.length;for(r;r<i;r++){n[r].fn.apply(n[r].ctx,t)}return this},off:function(e,t){var n=this.e||(this.e={});var r=n[e];var i=[];if(r&&t){for(var o=0,a=r.length;o<a;o++){if(r[o].fn!==t&&r[o].fn._!==t)i.push(r[o])}}i.length?n[e]=i:delete n[e];return this}};e.exports=n},function(e,t,n){var r,i,o;(function(a,u){if(true){!(i=[e,n(0),n(2),n(1)],r=u,o=typeof r==="function"?r.apply(t,i):r,o!==undefined&&(e.exports=o))}else if(typeof t!=="undefined"){u(e,require("./clipboard-action"),require("tiny-emitter"),require("good-listener"))}else{var c={exports:{}};u(c,a.clipboardAction,a.tinyEmitter,a.goodListener);a.clipboard=c.exports}})(this,function(e,t,n,r){"use strict";var i=u(t);var o=u(n);var a=u(r);function u(e){return e&&e.__esModule?e:{"default":e}}var c=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function l(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function d(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var p=function(e){d(t,e);function t(e,n){l(this,t);var r=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));r.resolveOptions(n);r.listenClick(e);return r}s(t,[{key:"resolveOptions",value:function n(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.action=typeof e.action==="function"?e.action:this.defaultAction;this.target=typeof e.target==="function"?e.target:this.defaultTarget;this.text=typeof e.text==="function"?e.text:this.defaultText;this.container=c(e.container)==="object"?e.container:document.body}},{key:"listenClick",value:function r(e){var t=this;this.listener=(0,a.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function o(e){var t=e.delegateTarget||e.currentTarget;if(this.clipboardAction){this.clipboardAction=null}this.clipboardAction=new i.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function u(e){return h("action",e)}},{key:"defaultTarget",value:function p(e){var t=h("target",e);if(t){return document.querySelector(t)}}},{key:"defaultText",value:function y(e){return h("text",e)}},{key:"destroy",value:function v(){this.listener.destroy();if(this.clipboardAction){this.clipboardAction.destroy();this.clipboardAction=null}}}],[{key:"isSupported",value:function m(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:["copy","cut"];var t=typeof e==="string"?[e]:e;var n=!!document.queryCommandSupported;t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)});return n}}]);return t}(o.default);function h(e,t){var n="data-clipboard-"+e;if(!t.hasAttribute(n)){return}return t.getAttribute(n)}e.exports=p})},function(e,t){var n=9;if(typeof Element!=="undefined"&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function i(e,t){while(e&&e.nodeType!==n){if(typeof e.matches==="function"&&e.matches(t)){return e}e=e.parentNode}}e.exports=i},function(e,t,n){var r=n(4);function i(e,t,n,r,i){var o=a.apply(this,arguments);e.addEventListener(n,o,i);return{destroy:function(){e.removeEventListener(n,o,i)}}}function o(e,t,n,r,o){if(typeof e.addEventListener==="function"){return i.apply(null,arguments)}if(typeof n==="function"){return i.bind(null,document).apply(null,arguments)}if(typeof e==="string"){e=document.querySelectorAll(e)}return Array.prototype.map.call(e,function(e){return i(e,t,n,r,o)})}function a(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t);if(n.delegateTarget){i.call(e,n)}}}e.exports=o},function(e,t){t.node=function(e){return e!==undefined&&e instanceof HTMLElement&&e.nodeType===1};t.nodeList=function(e){var n=Object.prototype.toString.call(e);return e!==undefined&&(n==="[object NodeList]"||n==="[object HTMLCollection]")&&"length"in e&&(e.length===0||t.node(e[0]))};t.string=function(e){return typeof e==="string"||e instanceof String};t.fn=function(e){var t=Object.prototype.toString.call(e);return t==="[object Function]"}},function(e,t){function n(e){var t;if(e.nodeName==="SELECT"){e.focus();t=e.value}else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var n=e.hasAttribute("readonly");if(!n){e.setAttribute("readonly","")}e.select();e.setSelectionRange(0,e.value.length);if(!n){e.removeAttribute("readonly")}t=e.value}else{if(e.hasAttribute("contenteditable")){e.focus()}var r=window.getSelection();var i=document.createRange();i.selectNodeContents(e);r.removeAllRanges();r.addRange(i);t=r.toString()}return t}e.exports=n}])});
//rebuild by neat 