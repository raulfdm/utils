var simpleId = function simpleId(_ref) {
  var _ref$noUnderscore = _ref.noUnderscore,
      noUnderscore = _ref$noUnderscore === void 0 ? false : _ref$noUnderscore;
  var id = Math.random().toString(36).substr(2, 9);
  return "".concat(!noUnderscore && '_').concat(id);
};

export default simpleId;
