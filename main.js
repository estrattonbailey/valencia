(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _index = require('../../../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var feed = (0, _index2.default)({
  token: '143903426.c76948d.816afe8b2721400195b569fa4f1ec7c7',
  count: 4
}, function (_ref) {
  // render

  var images = _ref.images;
  var res = _ref.res;
  var next = _ref.next;
});

},{"../../../index.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _microJsonp = require('micro-jsonp');

var _microJsonp2 = _interopRequireDefault(_microJsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref, cb) {
  var token = _ref.token;
  var count = _ref.count;

  var data = {
    images: [],
    next: function next() {
      return console.log('Awaiting response...');
    },
    res: {}
  };

  var response = function response(err, res) {
    if (err) console.log(err);

    data.images = res.data;
    data.next = next(res.pagination.next_url);
    data.res = res;

    cb(data);

    return {
      images: data.images,
      next: data.next,
      res: res
    };
  };

  var next = function next(url) {
    return function (done) {
      return get(url, done ? function (err, res) {
        var data = response(err, res);
        done(data);
      } : response);
    };
  };

  var get = function get(url, done) {
    return (0, _microJsonp2.default)(url, {
      response: done
    });
  };

  token && get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + (count || 1), response);

  return data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsIi4uL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvLWpzb25wL2Rpc3QvbWljcm8tanNvbnAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxJQUFNLE9BQU8scUJBQVM7QUFDcEIsU0FBTyxvREFEYTtBQUVwQixTQUFPO0FBRmEsQ0FBVCxFQUdWLGdCQUEyQjtBQUM1Qjs7QUFENEIsTUFBeEIsTUFBd0IsUUFBeEIsTUFBd0I7QUFBQSxNQUFoQixHQUFnQixRQUFoQixHQUFnQjtBQUFBLE1BQVgsSUFBVyxRQUFYLElBQVc7QUFFN0IsQ0FMWSxDQUFiOzs7Ozs7Ozs7QUNGQTs7Ozs7O2tCQUVlLGdCQUFtQixFQUFuQixFQUEwQjtBQUFBLE1BQXZCLEtBQXVCLFFBQXZCLEtBQXVCO0FBQUEsTUFBaEIsS0FBZ0IsUUFBaEIsS0FBZ0I7O0FBQ3ZDLE1BQU0sT0FBTztBQUNYLFlBQVEsRUFERztBQUVYLFVBQU07QUFBQSxhQUFNLFFBQVEsR0FBUixDQUFZLHNCQUFaLENBQU47QUFBQSxLQUZLO0FBR1gsU0FBSztBQUhNLEdBQWI7O0FBTUEsTUFBTSxXQUFXLFNBQVgsUUFBVyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDN0IsUUFBSSxHQUFKLEVBQVMsUUFBUSxHQUFSLENBQVksR0FBWjs7QUFFVCxTQUFLLE1BQUwsR0FBYyxJQUFJLElBQWxCO0FBQ0EsU0FBSyxJQUFMLEdBQVksS0FBSyxJQUFJLFVBQUosQ0FBZSxRQUFwQixDQUFaO0FBQ0EsU0FBSyxHQUFMLEdBQVcsR0FBWDs7QUFFQSxPQUFHLElBQUg7O0FBRUEsV0FBTztBQUNMLGNBQVEsS0FBSyxNQURSO0FBRUwsWUFBTSxLQUFLLElBRk47QUFHTDtBQUhLLEtBQVA7QUFLRCxHQWREOztBQWdCQSxNQUFNLE9BQU8sU0FBUCxJQUFPO0FBQUEsV0FBTztBQUFBLGFBQVEsSUFBSSxHQUFKLEVBQVMsT0FBTyxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQWM7QUFDeEQsWUFBSSxPQUFPLFNBQVMsR0FBVCxFQUFjLEdBQWQsQ0FBWDtBQUNBLGFBQUssSUFBTDtBQUNELE9BSG9DLEdBR2pDLFFBSHdCLENBQVI7QUFBQSxLQUFQO0FBQUEsR0FBYjs7QUFLQSxNQUFNLE1BQU0sU0FBTixHQUFNLENBQUMsR0FBRCxFQUFNLElBQU47QUFBQSxXQUFlLDBCQUFNLEdBQU4sRUFBVztBQUNwQyxnQkFBVTtBQUQwQixLQUFYLENBQWY7QUFBQSxHQUFaOztBQUlBLFdBQVMsNEVBQTBFLEtBQTFFLGdCQUF5RixTQUFTLENBQWxHLEdBQXVHLFFBQXZHLENBQVQ7O0FBRUEsU0FBTyxJQUFQO0FBQ0QsQzs7Ozs7Ozs7QUNyQ0QsQ0FBQyxVQUFTLENBQVQsRUFBVztBQUFDLE1BQUcsUUFBTyxPQUFQLHlDQUFPLE9BQVAsT0FBaUIsUUFBakIsSUFBMkIsT0FBTyxNQUFQLEtBQWdCLFdBQTlDLEVBQTBEO0FBQUMsV0FBTyxPQUFQLEdBQWUsR0FBZjtBQUFtQixHQUE5RSxNQUFtRixJQUFHLE9BQU8sTUFBUCxLQUFnQixVQUFoQixJQUE0QixPQUFPLEdBQXRDLEVBQTBDO0FBQUMsV0FBTyxFQUFQLEVBQVUsQ0FBVjtBQUFhLEdBQXhELE1BQTREO0FBQUMsUUFBSSxDQUFKLENBQU0sSUFBRyxPQUFPLE1BQVAsS0FBZ0IsV0FBbkIsRUFBK0I7QUFBQyxVQUFFLE1BQUY7QUFBUyxLQUF6QyxNQUE4QyxJQUFHLE9BQU8sTUFBUCxLQUFnQixXQUFuQixFQUErQjtBQUFDLFVBQUUsTUFBRjtBQUFTLEtBQXpDLE1BQThDLElBQUcsT0FBTyxJQUFQLEtBQWMsV0FBakIsRUFBNkI7QUFBQyxVQUFFLElBQUY7QUFBTyxLQUFyQyxNQUF5QztBQUFDLFVBQUUsSUFBRjtBQUFPLE9BQUUsVUFBRixHQUFlLEdBQWY7QUFBbUI7QUFBQyxDQUFwVSxFQUFzVSxZQUFVO0FBQUMsTUFBSSxNQUFKLEVBQVcsTUFBWCxFQUFrQixPQUFsQixDQUEwQixPQUFRLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLGFBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxVQUFHLENBQUMsRUFBRSxDQUFGLENBQUosRUFBUztBQUFDLFlBQUcsQ0FBQyxFQUFFLENBQUYsQ0FBSixFQUFTO0FBQUMsY0FBSSxJQUFFLE9BQU8sT0FBUCxJQUFnQixVQUFoQixJQUE0QixPQUFsQyxDQUEwQyxJQUFHLENBQUMsQ0FBRCxJQUFJLENBQVAsRUFBUyxPQUFPLEVBQUUsQ0FBRixFQUFJLENBQUMsQ0FBTCxDQUFQLENBQWUsSUFBRyxDQUFILEVBQUssT0FBTyxFQUFFLENBQUYsRUFBSSxDQUFDLENBQUwsQ0FBUCxDQUFlLElBQUksSUFBRSxJQUFJLEtBQUosQ0FBVSx5QkFBdUIsQ0FBdkIsR0FBeUIsR0FBbkMsQ0FBTixDQUE4QyxNQUFNLEVBQUUsSUFBRixHQUFPLGtCQUFQLEVBQTBCLENBQWhDO0FBQWtDLGFBQUksSUFBRSxFQUFFLENBQUYsSUFBSyxFQUFDLFNBQVEsRUFBVCxFQUFYLENBQXdCLEVBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxJQUFSLENBQWEsRUFBRSxPQUFmLEVBQXVCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxJQUFFLEVBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQU4sQ0FBaUIsT0FBTyxFQUFFLElBQUUsQ0FBRixHQUFJLENBQU4sQ0FBUDtBQUFnQixTQUFwRSxFQUFxRSxDQUFyRSxFQUF1RSxFQUFFLE9BQXpFLEVBQWlGLENBQWpGLEVBQW1GLENBQW5GLEVBQXFGLENBQXJGLEVBQXVGLENBQXZGO0FBQTBGLGNBQU8sRUFBRSxDQUFGLEVBQUssT0FBWjtBQUFvQixTQUFJLElBQUUsT0FBTyxPQUFQLElBQWdCLFVBQWhCLElBQTRCLE9BQWxDLENBQTBDLEtBQUksSUFBSSxJQUFFLENBQVYsRUFBWSxJQUFFLEVBQUUsTUFBaEIsRUFBdUIsR0FBdkI7QUFBMkIsUUFBRSxFQUFFLENBQUYsQ0FBRjtBQUEzQixLQUFtQyxPQUFPLENBQVA7QUFBUyxHQUF6YixDQUEyYixFQUFDLEdBQUUsQ0FBQyxVQUFTLE9BQVQsRUFBaUIsTUFBakIsRUFBd0IsT0FBeEIsRUFBZ0M7QUFDajFCOztBQUVBLGFBQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxlQUFPO0FBRG9DLE9BQTdDO0FBR0EsVUFBSSxRQUFRLENBQVo7O0FBRUE7Ozs7Ozs7OztBQVNBLGNBQVEsT0FBUixHQUFrQixVQUFVLEdBQVYsRUFBZTtBQUMvQixZQUFJLE9BQU8sVUFBVSxNQUFWLElBQW9CLENBQXBCLElBQXlCLFVBQVUsQ0FBVixNQUFpQixTQUExQyxHQUFzRCxFQUF0RCxHQUEyRCxVQUFVLENBQVYsQ0FBdEU7O0FBRUEsWUFBSSxLQUFLLFFBQVEsT0FBakI7QUFDQSxZQUFJLFFBQVEsS0FBSyxLQUFMLElBQWMsVUFBMUI7QUFDQSxZQUFJLFFBQVEsUUFBUSxHQUFSLEdBQWMsRUFBMUI7QUFDQSxZQUFJLFVBQVUsS0FBSyxPQUFMLElBQWdCLEtBQTlCO0FBQ0EsWUFBSSxXQUFXLEtBQUssUUFBTCxHQUFnQixLQUFLLFFBQXJCLEdBQWdDLFVBQVUsR0FBVixFQUFlLElBQWYsRUFBcUI7QUFDbEUsaUJBQU8sUUFBUSxHQUFSLENBQVksR0FBWixFQUFpQixJQUFqQixDQUFQO0FBQ0QsU0FGRDtBQUdBLFlBQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjs7QUFFQSxZQUFJLFNBQVMsU0FBUyxNQUFULEdBQWtCO0FBQzdCLGlCQUFPLE9BQU8sRUFBUCxJQUFhLFNBQWIsR0FBeUIsSUFBaEM7QUFDRCxTQUZEOztBQUlBLFlBQUksUUFBUSxVQUFVLFdBQVcsWUFBWTtBQUMzQztBQUNBLG1CQUFTLElBQUksS0FBSixDQUFVLFNBQVYsQ0FBVDtBQUNELFNBSHFCLEVBR25CLE9BSG1CLENBQVYsR0FHRSxJQUhkOztBQUtBLFlBQUksVUFBVSxTQUFTLE9BQVQsR0FBbUI7QUFDL0IsbUJBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsTUFBMUI7QUFDQSxpQkFBTyxFQUFQLElBQWEsWUFBWSxDQUFFLENBQTNCO0FBQ0EsY0FBSSxLQUFKLEVBQVcsYUFBYSxLQUFiO0FBQ1osU0FKRDs7QUFNQSxlQUFPLEVBQVAsSUFBYSxVQUFVLElBQVYsRUFBZ0I7QUFDM0IsbUJBQVMsSUFBVCxFQUFlLElBQWY7QUFDQTtBQUNELFNBSEQ7O0FBS0EsZUFBTyxHQUFQLEdBQWEsTUFBTSxHQUFOLEdBQVksS0FBekI7QUFDQSxpQkFBUyxJQUFULENBQWMsV0FBZCxDQUEwQixNQUExQjs7QUFFQSxlQUFPLE1BQVA7QUFDRCxPQXBDRDtBQXNDQyxLQXZEK3lCLEVBdUQ5eUIsRUF2RDh5QixDQUFILEVBQTNiLEVBdUQzVyxFQXZEMlcsRUF1RHhXLENBQUMsQ0FBRCxDQXZEd1csRUF1RG5XLENBdkRtVyxDQUFQO0FBd0QxVyxDQXhERCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdmFsZW5jaWEgZnJvbSAnLi4vLi4vLi4vaW5kZXguanMnXG5cbmNvbnN0IGZlZWQgPSB2YWxlbmNpYSh7XG4gIHRva2VuOiAnMTQzOTAzNDI2LmM3Njk0OGQuODE2YWZlOGIyNzIxNDAwMTk1YjU2OWZhNGYxZWM3YzcnLFxuICBjb3VudDogNFxufSwgKHsgaW1hZ2VzLCByZXMsIG5leHQgfSkgPT4ge1xuICAvLyByZW5kZXJcbn0pXG4iLCJpbXBvcnQganNvbnAgZnJvbSAnbWljcm8tanNvbnAnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRva2VuLCBjb3VudCB9LCBjYikgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGltYWdlczogW10sXG4gICAgbmV4dDogKCkgPT4gY29uc29sZS5sb2coJ0F3YWl0aW5nIHJlc3BvbnNlLi4uJyksXG4gICAgcmVzOiB7fVxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSAoZXJyLCByZXMpID0+IHtcbiAgICBpZiAoZXJyKSBjb25zb2xlLmxvZyhlcnIpXG5cbiAgICBkYXRhLmltYWdlcyA9IHJlcy5kYXRhXG4gICAgZGF0YS5uZXh0ID0gbmV4dChyZXMucGFnaW5hdGlvbi5uZXh0X3VybClcbiAgICBkYXRhLnJlcyA9IHJlc1xuXG4gICAgY2IoZGF0YSlcblxuICAgIHJldHVybiB7XG4gICAgICBpbWFnZXM6IGRhdGEuaW1hZ2VzLFxuICAgICAgbmV4dDogZGF0YS5uZXh0LFxuICAgICAgcmVzXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmV4dCA9IHVybCA9PiBkb25lID0+IGdldCh1cmwsIGRvbmUgPyAoZXJyLCByZXMpID0+IHtcbiAgICBsZXQgZGF0YSA9IHJlc3BvbnNlKGVyciwgcmVzKVxuICAgIGRvbmUoZGF0YSlcbiAgfSA6IHJlc3BvbnNlKVxuXG4gIGNvbnN0IGdldCA9ICh1cmwsIGRvbmUpID0+IGpzb25wKHVybCwge1xuICAgIHJlc3BvbnNlOiBkb25lIFxuICB9KVxuXG4gIHRva2VuICYmIGdldChgaHR0cHM6Ly9hcGkuaW5zdGFncmFtLmNvbS92MS91c2Vycy9zZWxmL21lZGlhL3JlY2VudC8/YWNjZXNzX3Rva2VuPSR7dG9rZW59JmNvdW50PSR7Y291bnQgfHwgMX1gLCByZXNwb25zZSlcblxuICByZXR1cm4gZGF0YSBcbn1cbiIsIihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nLm1pY3JvSnNvbnAgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY291bnQgPSAwO1xuXG4vKipcbiAqIE9wdGlvbnM6XG4gKiAgLSBwYXJhbSB7U3RyaW5nfSBxdWVyeSBwYXJhbWV0ZXIgKyBjYWxsYmFjayBuYW1lXG4gKiAgLSB0aW1lb3V0IHtOdW1iZXJ9IGhvdyBsb25nIHRvIHdhaXQgZm9yIGEgcmVzcG9uc2UgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIGNiID0gJ19fYycgKyBjb3VudCsrO1xuICB2YXIgcGFyYW0gPSBvcHRzLnBhcmFtIHx8ICdjYWxsYmFjayc7XG4gIHZhciBxdWVyeSA9IHBhcmFtICsgJz0nICsgY2I7XG4gIHZhciB0aW1lb3V0ID0gb3B0cy50aW1lb3V0IHx8IDYwMDAwO1xuICB2YXIgcmVzcG9uc2UgPSBvcHRzLnJlc3BvbnNlID8gb3B0cy5yZXNwb25zZSA6IGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coZXJyLCBkYXRhKTtcbiAgfTtcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gIHZhciBjYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgcmV0dXJuIHdpbmRvd1tjYl0gPyBjbGVhbnVwKCkgOiBudWxsO1xuICB9O1xuXG4gIHZhciB0aW1lciA9IHRpbWVvdXQgPyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhbnVwKCk7XG4gICAgcmVzcG9uc2UobmV3IEVycm9yKCdUaW1lb3V0JykpO1xuICB9LCB0aW1lb3V0KSA6IG51bGw7XG5cbiAgdmFyIGNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICB3aW5kb3dbY2JdID0gZnVuY3Rpb24gKCkge307XG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9O1xuXG4gIHdpbmRvd1tjYl0gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJlc3BvbnNlKG51bGwsIGRhdGEpO1xuICAgIGNsZWFudXAoKTtcbiAgfTtcblxuICBzY3JpcHQuc3JjID0gdXJsICsgJyYnICsgcXVlcnk7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICByZXR1cm4gY2FuY2VsO1xufTtcblxufSx7fV19LHt9LFsxXSkoMSlcbn0pOyJdfQ==
