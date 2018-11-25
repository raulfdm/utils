var simpleId = (function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _opts$noUnderscore = opts.noUnderscore,
      noUnderscore = _opts$noUnderscore === void 0 ? false : _opts$noUnderscore;
  var randomValue = Math.random().toString(36).substr(2, 9);
  return "".concat(!noUnderscore ? '_' : '').concat(randomValue);
});

export default simpleId;
