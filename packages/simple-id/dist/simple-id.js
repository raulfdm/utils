(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.SimpleId = factory());
}(this, (function () { 'use strict';

  const simpleId = ({
    noUnderscore = false
  }) => {
    const id = Math.random().toString(36).substr(2, 9);
    return `${!noUnderscore && '_'}${id}`;
  };

  return simpleId;

})));
