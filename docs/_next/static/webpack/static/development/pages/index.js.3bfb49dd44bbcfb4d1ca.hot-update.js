webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/components/CircularPercent.jsx":
/*!*******************************************************!*\
  !*** ./templates/main/components/CircularPercent.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/components/CircularPercent.jsx";



var CircleBackground = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].circle.withConfig({
  displayName: "CircularPercent__CircleBackground",
  componentId: "sc-1xzhhqu-0"
})(["fill:none;stroke:var(--grey-lighter);"]);
var CircleProgress = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].circle.withConfig({
  displayName: "CircularPercent__CircleProgress",
  componentId: "sc-1xzhhqu-1"
})(["fill:none;stroke:var(--primary);stroke-linecap:round;stroke-linejoin:round;"]);
var CircleText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].text.withConfig({
  displayName: "CircularPercent__CircleText",
  componentId: "sc-1xzhhqu-2"
})(["font-size:", "px;font-weight:var(--bold);fill:var(--primary);"], function (props) {
  return props.sqSize / 5;
});

var CircularProgressBar = function CircularProgressBar(props) {
  var sqSize = props.sqSize,
      strokeWidth = props.strokeWidth,
      percentage = props.percentage;
  var radius = (sqSize - strokeWidth) / 2;
  var viewBox = "0 0 ".concat(sqSize, " ").concat(sqSize);
  var dashArray = radius * Math.PI * 2;
  var dashOffset = dashArray - dashArray * percentage / 100;
  var circleProps = {
    cx: sqSize / 2,
    cy: sqSize / 2,
    r: radius,
    strokeWidth: "".concat(strokeWidth, "px")
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: sqSize,
    height: sqSize,
    viewBox: viewBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CircleBackground, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, circleProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CircleProgress, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, circleProps, {
    transform: "rotate(-90 ".concat(sqSize / 2, " ").concat(sqSize / 2, ")"),
    style: {
      strokeDasharray: dashArray,
      strokeDashoffset: dashOffset,
      strokeLinecap: 'square'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CircleText, {
    x: "50%",
    y: "50%",
    dy: ".3em",
    textAnchor: "middle",
    sqSize: sqSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "".concat(percentage, "%")));
};

CircularProgressBar.propTypes = {
  sqSize: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  percentage: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"]
};
/* harmony default export */ __webpack_exports__["default"] = (CircularProgressBar);

/***/ })

})
//# sourceMappingURL=index.js.3bfb49dd44bbcfb4d1ca.hot-update.js.map