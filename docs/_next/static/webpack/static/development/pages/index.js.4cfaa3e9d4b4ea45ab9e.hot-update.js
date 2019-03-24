webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/components/CircularPercent.jsx":
/*!*******************************************************!*\
  !*** ./templates/main/components/CircularPercent.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/components/CircularPercent.jsx";


var CircularProgressBar = function CircularProgressBar(props) {
  var sqSize = props.sqSize;
  var radius = (props.sqSize - props.strokeWidth) / 2;
  var viewBox = "0 0 ".concat(sqSize, " ").concat(sqSize);
  var dashArray = radius * Math.PI * 2;
  var dashOffset = dashArray - dashArray * props.percentage / 100;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: props.sqSize,
    height: props.sqSize,
    viewBox: viewBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "circle-background",
    cx: props.sqSize / 2,
    cy: props.sqSize / 2,
    r: radius,
    strokeWidth: "".concat(props.strokeWidth, "px"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "circle-progress",
    cx: props.sqSize / 2,
    cy: props.sqSize / 2,
    r: radius,
    strokeWidth: "".concat(props.strokeWidth, "px"),
    transform: "rotate(-90 ".concat(props.sqSize / 2, " ").concat(props.sqSize / 2, ")"),
    style: {
      strokeDasharray: dashArray,
      strokeDashoffset: dashOffset
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    className: "circle-text",
    x: "50%",
    y: "50%",
    dy: ".3em",
    textAnchor: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "".concat(props.percentage, "%")));
};

CircularProgressBar.defaultProps = {
  sqSize: 200,
  percentage: 25,
  strokeWidth: 10
};
/* harmony default export */ __webpack_exports__["default"] = (CircularProgressBar);

/***/ })

})
//# sourceMappingURL=index.js.4cfaa3e9d4b4ea45ab9e.hot-update.js.map