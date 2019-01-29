(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.DecimalCounter = factory());
}(this, (function () { 'use strict';

  function decimalCounter(number) {
      var hasDecimal = /[.,]/gi;
      var numberString = "" + number;
      if (!hasDecimal.test(numberString)) {
          return 0;
      }
      var regex = /[.,](\d*)/;
      var _a = numberString.match(regex), _ = _a[0], result = _a[1];
      return result.length;
  }

  return decimalCounter;

})));
