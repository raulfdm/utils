(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.SimpleId = factory());
}(this, (function () { 'use strict';

  var simpleId = (function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _opts$noUnderscore = opts.noUnderscore,
        noUnderscore = _opts$noUnderscore === void 0 ? false : _opts$noUnderscore;
    var randomValue = Math.random().toString(36).substr(2, 9);
    return "".concat(!noUnderscore ? '_' : '').concat(randomValue);
  });

  return simpleId;

})));
