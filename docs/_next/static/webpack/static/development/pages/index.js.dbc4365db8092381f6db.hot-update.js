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
})(["margin:16px 0 8px;"]);

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

/***/ }),

/***/ "./templates/main/slides/Percentages/Percentages.jsx":
/*!***********************************************************!*\
  !*** ./templates/main/slides/Percentages/Percentages.jsx ***!
  \***********************************************************/
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
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item */ "./templates/main/slides/Percentages/Item.jsx");

var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Percentages/Percentages.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Percentages__Container",
  componentId: "sc-8exgvy-0"
})(["width:100%;height:100%;padding:80px;", ""], function (props) {
  return props.styles;
});
var Items = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Percentages__Items",
  componentId: "sc-8exgvy-1"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:min-content;grid-gap:80px;"]);

var Projects = function Projects(_ref) {
  var title = _ref.title,
      content = _ref.content,
      items = _ref.items,
      styles = _ref.styles;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    styles: styles,
    className: "projects",
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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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

Projects.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["exact"])({
    value: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"],
    title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
  })),
  styles: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_3__["string"])
};
/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.dbc4365db8092381f6db.hot-update.js.map