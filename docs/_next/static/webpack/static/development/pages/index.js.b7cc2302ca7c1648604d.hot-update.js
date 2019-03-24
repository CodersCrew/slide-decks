webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/slides/NumberItems/NumberItems.jsx":
/*!***********************************************************!*\
  !*** ./templates/main/slides/NumberItems/NumberItems.jsx ***!
  \***********************************************************/
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
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item */ "./templates/main/slides/NumberItems/Item.jsx");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Item__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/NumberItems/NumberItems.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "NumberItems__Container",
  componentId: "ks0aan-0"
})(["width:100%;height:100%;padding:80px;", ""], function (props) {
  return props.styles;
});
var Items = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "NumberItems__Items",
  componentId: "ks0aan-1"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:min-content;grid-gap:80px 72px;"]);

var NumberItems = function NumberItems(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    styles: props.styles,
    className: "number-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["BoxHeading"], {
    title: props.title,
    content: props.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    first: props.first,
    last: props.last,
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.number,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, item.title);
  })))));
};

NumberItems.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  first: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  last: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["exact"])({
    image: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    date: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
  })),
  styles: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_2__["string"])
};
/* harmony default export */ __webpack_exports__["default"] = (NumberItems);

/***/ })

})
//# sourceMappingURL=index.js.b7cc2302ca7c1648604d.hot-update.js.map