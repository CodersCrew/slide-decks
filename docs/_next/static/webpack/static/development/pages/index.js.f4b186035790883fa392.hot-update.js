webpackHotUpdate("static/development/pages/index.js",{

/***/ "./slide-deck/GlobalStyle.js":
/*!***********************************!*\
  !*** ./slide-deck/GlobalStyle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote::before,\n  blockquote::after,\n  q::before,\n  q::after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  div {\n    box-sizing: border-box;\n  }\n\n  #__next {\n    background-color: var(--global-background);\n    max-width: 100vw;\n    max-height: 100vh;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.templateStyle;
});
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

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
})(["fill:none;stroke:#ddd;"]);
var CircleProgress = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].circle.withConfig({
  displayName: "CircularPercent__CircleProgress",
  componentId: "sc-1xzhhqu-1"
})(["fill:none;stroke:red;stroke-linecap:round;stroke-linejoin:round;"]);
var CircleText = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].text.withConfig({
  displayName: "CircularPercent__CircleText",
  componentId: "sc-1xzhhqu-2"
})(["font-size:3em;font-weight:bold;fill:red;"]);

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
      strokeDashoffset: dashOffset
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
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
//# sourceMappingURL=index.js.f4b186035790883fa392.hot-update.js.map