(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.valencia = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _microJsonp=require("micro-jsonp"),_microJsonp2=_interopRequireDefault(_microJsonp);exports.default=function(e,n){var t=e.token,r=e.count,o={images:[],next:function(){return console.log("Awaiting response...")},res:{}},u=function(e,n){return e&&console.log(e),o.images=n.data,o.next=i(n.pagination.next_url),o.res=n,{images:o.images,next:o.next,res:n}},i=function(e){return function(t){return s(e,function(e,r){return t?t(u(e,r)):n(u(e,r))})}},s=function(e,n){return(0,_microJsonp2.default)(e,{response:n})};return t&&s("https://api.instagram.com/v1/users/self/media/recent/?access_token="+t+"&count="+(r||1),u),o};
},{"micro-jsonp":2}],2:[function(require,module,exports){
(function (global){
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.microJsonp=e()}}(function(){return function e(n,o,t){function r(i,f){if(!o[i]){if(!n[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var l=o[i]={exports:{}};n[i][0].call(l.exports,function(e){var o=n[i][1][e];return r(o?o:e)},l,l.exports,e,n,o,t)}return o[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,o){Object.defineProperty(o,"__esModule",{value:!0});var t=0;o.default=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o="__c"+t++,r=n.param||"callback",u=r+"="+o,i=n.timeout||6e4,f=n.response?n.response:function(e,n){return console.log(e,n)},c=document.createElement("script"),d=function(){return window[o]?p():null},l=i?setTimeout(function(){p(),f(new Error("Timeout"))},i):null,p=function(){document.head.removeChild(c),window[o]=function(){},l&&clearTimeout(l)};return window[o]=function(e){f(null,e),p()},c.src=e+"&"+u,document.head.appendChild(c),d}},{}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});