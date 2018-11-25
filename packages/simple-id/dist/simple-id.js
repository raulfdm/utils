(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.SimpleId = factory());
}(this, (function () { 'use strict';

  var simpleId = function simpleId(_ref) {
    var _ref$noUnderscore = _ref.noUnderscore,
        noUnderscore = _ref$noUnderscore === void 0 ? false : _ref$noUnderscore;
    var id = Math.random().toString(36).substr(2, 9);
    return "".concat(!noUnderscore && '_').concat(id);
  };

  return simpleId;

})));
