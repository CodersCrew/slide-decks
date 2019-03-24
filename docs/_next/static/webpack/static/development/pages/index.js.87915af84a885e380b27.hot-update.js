webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/slides/Logos/Logos.jsx":
/*!***********************************************!*\
  !*** ./templates/main/slides/Logos/Logos.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./templates/main/components/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item */ "./templates/main/slides/Logos/Item.jsx");

var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Logos/Logos.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Logos__Container",
  componentId: "sc-1sh3x7d-0"
})(["width:100%;height:100%;padding:80px;", ""], function (props) {
  return props.styles;
});
var Items = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Logos__Items",
  componentId: "sc-1sh3x7d-1"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:min-content;grid-gap:80px 72px;"]);

var Logos = function Logos(_ref) {
  var title = _ref.title,
      content = _ref.content,
      items = _ref.items,
      styles = _ref.styles;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    styles: styles,
    className: "services2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BoxHeading"], {
    align: "center",
    title: title,
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Items, {
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, items.map(function (item) {
    return console.log(item.image) || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.image
    }, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  }))));
};

Logos.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["exact"])({
    image: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
  })),
  styles: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_3__["string"])
};
/* harmony default export */ __webpack_exports__["default"] = (Logos);

/***/ })

})
//# sourceMappingURL=index.js.87915af84a885e380b27.hot-update.js.map