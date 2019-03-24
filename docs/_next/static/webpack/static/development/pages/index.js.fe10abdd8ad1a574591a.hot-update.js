webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/components/BoxHeader.jsx":
/*!*************************************************!*\
  !*** ./templates/main/components/BoxHeader.jsx ***!
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
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/components/BoxHeader.jsx";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BoxHeader__Container",
  componentId: "sc-1h36yeg-0"
})(["position:absolute;top:0;left:0;right:0;display:flex;justify-content:", ";"], function (props) {
  return props.align === 'center' ? 'center' : 'flex-start';
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BoxHeader__Box",
  componentId: "sc-1h36yeg-1"
})(["padding:16px 48px;background-color:var(--primary);border-bottom-right-radius:8px;border-bottom-left-radius:", ";> h1{text-align:", ";}"], function (props) {
  return props.align === 'center' ? '8px' : 0;
}, function (props) {
  return props.align;
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "BoxHeader__Header",
  componentId: "sc-1h36yeg-2"
})(["position:relative;top:-4px;color:var(--white);"]);

var LineHeader = function LineHeader(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    align: props.align,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    align: props.align,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.children)));
};

LineHeader.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"].isRequired,
  align: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['left', 'center'])
};
LineHeader.defaultProps = {
  align: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (LineHeader);

/***/ }),

/***/ "./templates/main/components/BoxHeading.jsx":
/*!**************************************************!*\
  !*** ./templates/main/components/BoxHeading.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BoxHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoxHeader */ "./templates/main/components/BoxHeader.jsx");
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/components/BoxHeading.jsx";




var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "BoxHeading__Content",
  componentId: "sc-127za9x-0"
})(["text-align:", ";margin-top:80px;padding:", ";"], function (props) {
  return props.align;
}, function (props) {
  return props.withPadding ? '0 80px' : 0;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BoxHeading__Wrapper",
  componentId: "sc-127za9x-1"
})(["width:100%;height:680px;margin-top:64px;"]);

var BoxHeading = function BoxHeading(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoxHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    align: props.align,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.title), props.content && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    align: props.align,
    withPadding: props.withPadding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.children));
};

BoxHeading.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"].isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  withPadding: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  align: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['left', 'center'])
};
BoxHeading.defaultProps = {
  align: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (BoxHeading);

/***/ }),

/***/ "./templates/main/slides/Timeline/Timeline.jsx":
/*!*****************************************************!*\
  !*** ./templates/main/slides/Timeline/Timeline.jsx ***!
  \*****************************************************/
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
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item */ "./templates/main/slides/Timeline/Item.jsx");

var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Timeline/Timeline.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Timeline__Container",
  componentId: "sc-9qhxc1-0"
})(["width:100%;height:100%;padding:80px 0;"]);
var Items = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Timeline__Items",
  componentId: "sc-9qhxc1-1"
})(["display:grid;grid-template-columns:repeat(3,1fr);padding-left:", ";padding-right:", ";"], function (props) {
  return props.first ? '80px' : 0;
}, function (props) {
  return props.last ? '80px' : 0;
});

var Timeline = function Timeline(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BoxHeading"], {
    title: props.title,
    content: props.content,
    withPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Items, {
    first: props.first,
    last: props.last,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.items.map(function (item, i) {
    var first = props.first && i === 0;
    var last = props.last && i === props.items.length - 1;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.date
    }, item, {
      first: first,
      last: last,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  }))));
};

Timeline.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  first: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  last: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["exact"])({
    image: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    date: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ })

})
//# sourceMappingURL=index.js.fe10abdd8ad1a574591a.hot-update.js.map