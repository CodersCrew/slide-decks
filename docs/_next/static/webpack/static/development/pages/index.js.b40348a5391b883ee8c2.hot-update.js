webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/slides/Percentages/Percentages.jsx":
/*!***********************************************************!*\
  !*** ./templates/main/slides/Percentages/Percentages.jsx ***!
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
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Percentages/Percentages.jsx";



 // import Item from './Item';

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Percentages__Container",
  componentId: "sc-8exgvy-0"
})(["width:100%;height:100%;padding:80px;", ""], function (props) {
  return props.styles;
});
var Items = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Percentages__Items",
  componentId: "sc-8exgvy-1"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:min-content;grid-gap:80px;"]);

var Projects = function Projects(_ref) {
  var title = _ref.title,
      content = _ref.content,
      items = _ref.items,
      styles = _ref.styles;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    styles: styles,
    className: "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["BoxHeading"], {
    align: "center",
    title: title,
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["CircularPercent"], {
    strokeWidth: 24,
    sqSize: 400,
    percentage: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
};

Projects.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["exact"])({
    value: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
    title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
  })),
  styles: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_2__["string"])
};
/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.b40348a5391b883ee8c2.hot-update.js.map