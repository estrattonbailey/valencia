(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _index = require('../../../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _index2.default)({
  token: '207617934.c76948d.91f3cd6735ac4cf09c01aa8fab1145e7',
  posts: 4
}, function (data) {
  console.log(data);
});

},{"../../../index.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _microJsonp = require('micro-jsonp');

var _microJsonp2 = _interopRequireDefault(_microJsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref, callback) {
  var token = _ref.token;
  var posts = _ref.posts;

  return;
  token && (0, _microJsonp2.default)('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + (posts || 1), {
    response: function response(err, data) {
      if (err) console.log(err);
      callback(data);
    }
  });
};

},{"micro-jsonp":3}],3:[function(require,module,exports){
(function (global){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.microJsonp = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var count = 0;

      /**
       * Options:
       *  - param {String} query parameter + callback name
       *  - timeout {Number} how long to wait for a response 
       *
       * @param {String} url
       * @param {Object} options
       */

      exports.default = function (url) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        var cb = '__c' + count++;
        var param = opts.param || 'callback';
        var query = param + '=' + cb;
        var timeout = opts.timeout || 60000;
        var response = opts.response ? opts.response : function (err, data) {
          return console.log(err, data);
        };
        var script = document.createElement('script');

        var cancel = function cancel() {
          return window[cb] ? cleanup() : null;
        };

        var timer = timeout ? setTimeout(function () {
          cleanup();
          response(new Error('Timeout'));
        }, timeout) : null;

        var cleanup = function cleanup() {
          document.head.removeChild(script);
          window[cb] = function () {};
          if (timer) clearTimeout(timer);
        };

        window[cb] = function (data) {
          response(null, data);
          cleanup();
        };

        script.src = url + '&' + query;
        document.head.appendChild(script);

        return cancel;
      };
    }, {}] }, {}, [1])(1);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsIi4uL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvLWpzb25wL2Rpc3QvbWljcm8tanNvbnAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxxQkFBTTtBQUNKLFNBQU8sb0RBREg7QUFFSixTQUFPO0FBRkgsQ0FBTixFQUdHLFVBQUMsSUFBRCxFQUFVO0FBQ1gsVUFBUSxHQUFSLENBQVksSUFBWjtBQUNELENBTEQ7Ozs7Ozs7OztBQ0ZBOzs7Ozs7a0JBRWUsZ0JBQW1CLFFBQW5CLEVBQWdDO0FBQUEsTUFBN0IsS0FBNkIsUUFBN0IsS0FBNkI7QUFBQSxNQUF0QixLQUFzQixRQUF0QixLQUFzQjs7QUFDN0M7QUFDQSxXQUFTLGtHQUE0RSxLQUE1RSxnQkFBMkYsU0FBUyxDQUFwRyxHQUF5RztBQUNoSCxjQUFVLGtCQUFDLEdBQUQsRUFBTSxJQUFOLEVBQWU7QUFDdkIsVUFBSSxHQUFKLEVBQVMsUUFBUSxHQUFSLENBQVksR0FBWjtBQUNULGVBQVMsSUFBVDtBQUNEO0FBSitHLEdBQXpHLENBQVQ7QUFNRCxDOzs7Ozs7OztBQ1ZELENBQUMsVUFBUyxDQUFULEVBQVc7QUFBQyxNQUFHLFFBQU8sT0FBUCx5Q0FBTyxPQUFQLE9BQWlCLFFBQWpCLElBQTJCLE9BQU8sTUFBUCxLQUFnQixXQUE5QyxFQUEwRDtBQUFDLFdBQU8sT0FBUCxHQUFlLEdBQWY7QUFBbUIsR0FBOUUsTUFBbUYsSUFBRyxPQUFPLE1BQVAsS0FBZ0IsVUFBaEIsSUFBNEIsT0FBTyxHQUF0QyxFQUEwQztBQUFDLFdBQU8sRUFBUCxFQUFVLENBQVY7QUFBYSxHQUF4RCxNQUE0RDtBQUFDLFFBQUksQ0FBSixDQUFNLElBQUcsT0FBTyxNQUFQLEtBQWdCLFdBQW5CLEVBQStCO0FBQUMsVUFBRSxNQUFGO0FBQVMsS0FBekMsTUFBOEMsSUFBRyxP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WUFBSSxTQUFTLFNBQVMsTUFBVCxHQUFrQjtBQUM3QixpQkFBTyxPQUFPLEVBQVAsSUFBYSxTQUFiLEdBQXlCLElBQWhDO0FBQ0QsU0FGRDs7QUFJQSxZQUFJLFFBQVEsVUFBVSxXQUFXLFlBQVk7QUFDM0M7QUFDQSxtQkFBUyxJQUFJLEtBQUosQ0FBVSxTQUFWLENBQVQ7QUFDRCxTQUhxQixFQUduQixPQUhtQixDQUFWLEdBR0UsSUFIZDs7QUFLQSxZQUFJLFVBQVUsU0FBUyxPQUFULEdBQW1CO0FBQy9CLG1CQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLE1BQTFCO0FBQ0EsaUJBQU8sRUFBUCxJQUFhLFlBQVksQ0FBRSxDQUEzQjtBQUNBLGNBQUksS0FBSixFQUFXLGFBQWEsS0FBYjtBQUNaLFNBSkQ7O0FBTUEsZUFBTyxFQUFQLElBQWEsVUFBVSxJQUFWLEVBQWdCO0FBQzNCLG1CQUFTLElBQVQsRUFBZSxJQUFmO0FBQ0E7QUFDRCxTQUhEOztBQUtBLGVBQU8sR0FBUCxHQUFhLE1BQU0sR0FBTixHQUFZLEtBQXpCO0FBQ0EsaUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsTUFBMUI7O0FBRUEsZUFBTyxNQUFQO0FBQ0QsT0FwQ0Q7QUFzQ0MsS0F2RCt5QixFQXVEOXlCLEVBdkQ4eUIsQ0FBSCxFQUEzYixFQXVEM1csRUF2RDJXLEVBdUR4VyxDQUFDLENBQUQsQ0F2RHdXLEVBdURuVyxDQXZEbVcsQ0FBUDtBQXdEMVcsQ0F4REQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGluc3RhIGZyb20gJy4uLy4uLy4uL2luZGV4LmpzJ1xuXG5pbnN0YSh7XG4gIHRva2VuOiAnMjA3NjE3OTM0LmM3Njk0OGQuOTFmM2NkNjczNWFjNGNmMDljMDFhYThmYWIxMTQ1ZTcnLFxuICBwb3N0czogNFxufSwgKGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSlcbn0pXG4iLCJpbXBvcnQganNvbnAgZnJvbSAnbWljcm8tanNvbnAnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRva2VuLCBwb3N0cyB9LCBjYWxsYmFjaykgPT4ge1xuICByZXR1cm5cbiAgdG9rZW4gJiYganNvbnAoYGh0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdXNlcnMvc2VsZi9tZWRpYS9yZWNlbnQvP2FjY2Vzc190b2tlbj0ke3Rva2VufSZjb3VudD0ke3Bvc3RzIHx8IDF9YCwge1xuICAgIHJlc3BvbnNlOiAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSBjb25zb2xlLmxvZyhlcnIpXG4gICAgICBjYWxsYmFjayhkYXRhKVxuICAgIH1cbiAgfSlcbn1cbiIsIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLm1pY3JvSnNvbnAgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY291bnQgPSAwO1xuXG4vKipcbiAqIE9wdGlvbnM6XG4gKiAgLSBwYXJhbSB7U3RyaW5nfSBxdWVyeSBwYXJhbWV0ZXIgKyBjYWxsYmFjayBuYW1lXG4gKiAgLSB0aW1lb3V0IHtOdW1iZXJ9IGhvdyBsb25nIHRvIHdhaXQgZm9yIGEgcmVzcG9uc2UgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIGNiID0gJ19fYycgKyBjb3VudCsrO1xuICB2YXIgcGFyYW0gPSBvcHRzLnBhcmFtIHx8ICdjYWxsYmFjayc7XG4gIHZhciBxdWVyeSA9IHBhcmFtICsgJz0nICsgY2I7XG4gIHZhciB0aW1lb3V0ID0gb3B0cy50aW1lb3V0IHx8IDYwMDAwO1xuICB2YXIgcmVzcG9uc2UgPSBvcHRzLnJlc3BvbnNlID8gb3B0cy5yZXNwb25zZSA6IGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coZXJyLCBkYXRhKTtcbiAgfTtcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gIHZhciBjYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgcmV0dXJuIHdpbmRvd1tjYl0gPyBjbGVhbnVwKCkgOiBudWxsO1xuICB9O1xuXG4gIHZhciB0aW1lciA9IHRpbWVvdXQgPyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhbnVwKCk7XG4gICAgcmVzcG9uc2UobmV3IEVycm9yKCdUaW1lb3V0JykpO1xuICB9LCB0aW1lb3V0KSA6IG51bGw7XG5cbiAgdmFyIGNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICB3aW5kb3dbY2JdID0gZnVuY3Rpb24gKCkge307XG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9O1xuXG4gIHdpbmRvd1tjYl0gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJlc3BvbnNlKG51bGwsIGRhdGEpO1xuICAgIGNsZWFudXAoKTtcbiAgfTtcblxuICBzY3JpcHQuc3JjID0gdXJsICsgJyYnICsgcXVlcnk7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICByZXR1cm4gY2FuY2VsO1xufTtcblxufSx7fV19LHt9LFsxXSkoMSlcbn0pOyJdfQ==
