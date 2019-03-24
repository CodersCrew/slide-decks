webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/slides/Percentages/Item.jsx":
/*!****************************************************!*\
  !*** ./templates/main/slides/Percentages/Item.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./templates/main/components/index.js");
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Percentages/Item.jsx";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Container",
  componentId: "jysdzj-0"
})(["display:flex;flex-direction:column;align-items:center;width:100%;text-align:center;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "Item__Title",
  componentId: "jysdzj-1"
})(["margin:40px 0 16px;"]);

var Item = function Item(_ref) {
  var value = _ref.value,
      title = _ref.title,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["CircularPercent"], {
    strokeWidth: 24,
    sqSize: 280,
    percentage: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, content));
};

Item.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.28a1632996641f58d421.hot-update.js.map