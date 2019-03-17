webpackHotUpdate("static/development/pages/index.js",{

/***/ "./slide-deck/Slide/Slide.tsx":
/*!************************************!*\
  !*** ./slide-deck/Slide/Slide.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slide_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slide.styles */ "./slide-deck/Slide/Slide.styles.js");

var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/slide-deck/Slide/Slide.tsx";



var useScaleLevel = function useScaleLevel(slideWidth, slideHeight) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      scale = _useState2[0],
      setScale = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleScaleChange = function handleScaleChange(_ref) {
      var _ref$currentTarget = _ref.currentTarget,
          innerWidth = _ref$currentTarget.innerWidth,
          innerHeight = _ref$currentTarget.innerHeight;
      var scaleX = innerWidth / slideWidth;
      var scaleY = innerHeight / slideHeight;
      setScale(Math.min(scaleX, scaleY));
    };

    window.addEventListener('resize', handleScaleChange);
    handleScaleChange({
      currentTarget: window
    });
    return function () {
      window.removeEventListener('resize', handleScaleChange);
    };
  });
  return scale;
};

var Slide = function Slide(_ref2) {
  var slideWidth = _ref2.slideWidth,
      slideHeight = _ref2.slideHeight,
      visible = _ref2.visible,
      children = _ref2.children,
      style = _ref2.style;
  var scale = useScaleLevel(slideWidth, slideHeight);
  console.log('slide rendered');
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Slide_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: style,
    scale: scale,
    visible: visible,
    slideWidth: slideWidth,
    slideHeight: slideHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children);
};

var isStillHidden = function isStillHidden(prevProps, nextProps) {
  return prevProps.visible === nextProps.visible;
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Slide, isStillHidden));

/***/ })

})
//# sourceMappingURL=index.js.0f9a16583e92f1847fee.hot-update.js.map