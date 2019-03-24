webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/slides/Timeline/Item.jsx":
/*!*************************************************!*\
  !*** ./templates/main/slides/Timeline/Item.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Timeline/Item.jsx";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Container",
  componentId: "jysdzj-0"
})(["position:relative;display:flex;flex-direction:column;align-items:center;width:100%;text-align:center;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Item__Image",
  componentId: "jysdzj-1"
})(["object-fit:cover;width:100%;height:342px;border-top-left-radius:", ";border-top-right-radius:", ";border-bottom-right-radius:", ";border-bottom-left-radius:", ";"], function (props) {
  return props.first ? '171px' : 0;
}, function (props) {
  return props.last ? '171px' : 0;
}, function (props) {
  return props.last ? '171px' : 0;
}, function (props) {
  return props.first ? '171px' : 0;
});
var DateCircle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__DateCircle",
  componentId: "jysdzj-2"
})(["position:absolute;top:264px;display:flex;align-items:center;justify-content:center;width:160px;height:160px;border-radius:100%;background-color:var(--primary);border:8px solid var(--white);font-size:var(--size-sm);line-height:1;font-weight:var(--bold);color:var(--white);"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "Item__Title",
  componentId: "jysdzj-3"
})(["margin:88px 0 8px;padding:0 40px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Content",
  componentId: "jysdzj-4"
})(["padding:0 24px;"]);
var isServer = typeof window === 'undefined';

var Item = function Item(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: props.image,
    first: props.first,
    last: props.last,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateCircle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, props.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, props.content));
};

Item.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  date: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  first: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  last: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"]
};
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.8803ad3f54d2381294e4.hot-update.js.map