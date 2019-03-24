webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/slides/Card.jsx":
/*!****************************************!*\
  !*** ./templates/main/slides/Card.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./templates/main/utils/index.jsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./templates/main/components/index.js");
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Card.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Card__Container",
  componentId: "sc-174ul9z-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;", " &::before{content:'';position:absolute;top:0;right:0;left:0;bottom:0;background:url('", "') no-repeat center/cover;opacity:0.75;}"], function (props) {
  return props.styles;
}, function (props) {
  return props.image;
});
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Card__Middle",
  componentId: "sc-174ul9z-1"
})(["position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:1440px;height:800px;border-radius:8px;background-color:var(--slide-background);"]);
var Header = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components__WEBPACK_IMPORTED_MODULE_4__["BoxHeader"]).withConfig({
  displayName: "Card__Header",
  componentId: "sc-174ul9z-2"
})(["top:-48px;"]);
var Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "Card__Subtitle",
  componentId: "sc-174ul9z-3"
})(["color:var(--text-primary);"]);
var Right = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Card__Right",
  componentId: "sc-174ul9z-4"
})(["display:flex;flex-direction:column;justify-content:center;width:50%;padding:0 80px 0 64px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Card__Content",
  componentId: "sc-174ul9z-5"
})(["text-align:left;"]);

var Card = function Card(_ref) {
  var image = _ref.image,
      title = _ref.title,
      subtitle = _ref.subtitle,
      icon = _ref.icon,
      content = _ref.content,
      styles = _ref.styles;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    styles: styles,
    image: image,
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Middle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    align: "all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    src: icon,
    width: 160,
    height: 160,
    fill: "var(--primary)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, subtitle)));
};

Card.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  styles: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_2__["string"])
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.bcc2d63dfc716abd05c6.hot-update.js.map