webpackHotUpdate("static/development/pages/index.js",{

/***/ "./slide-deck/Deck/utils.js":
/*!**********************************!*\
  !*** ./slide-deck/Deck/utils.js ***!
  \**********************************/
/*! exports provided: updateURL, checkForStateChange, checkForNewAnimation, addKeysToSlides, getScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateURL", function() { return updateURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForStateChange", function() { return checkForStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForNewAnimation", function() { return checkForNewAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addKeysToSlides", function() { return addKeysToSlides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScale", function() { return getScale; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var updateURL = function updateURL(prevState, state, router) {
  if (prevState.slideIndex !== state.slideIndex) {
    router.replace("".concat(router.pathname, "?slide=").concat(state.slideIndex));
  }
};
var checkForStateChange = function checkForStateChange(currState, nextState) {
  var index = currState.slideIndex !== nextState.slideIndex;
  var scale = currState.scale !== nextState.scale;
  var animation = currState.animation !== nextState.animation;
  return scale || index || animation;
};
var checkForNewAnimation = function checkForNewAnimation(prevState, currState, callback) {
  if (!prevState.animaiton && currState.animation) {
    window.setTimeout(callback, 1000);
  }
};
var addKeysToSlides = function addKeysToSlides(slides) {
  return slides.map(function (slide, i) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, slide, {
      key: i
    });
  });
};
var getScale = function getScale(_ref, template) {
  var _ref$currentTarget = _ref.currentTarget,
      innerWidth = _ref$currentTarget.innerWidth,
      innerHeight = _ref$currentTarget.innerHeight;
  var _template$globals = template.globals,
      width = _template$globals.width,
      height = _template$globals.height;
  var scaleX = innerWidth / width;
  var scaleY = innerHeight / height;
  return Math.min(scaleX, scaleY);
};

/***/ })

})
//# sourceMappingURL=index.js.365776fd98e1e583418e.hot-update.js.map