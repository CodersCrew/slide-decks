webpackHotUpdate("static/development/pages/index.js",{

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
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    className: "wrapper",
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
})(["margin:96px 0 8px;padding:0 40px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Content",
  componentId: "jysdzj-4"
})(["padding:0 24px;"]);

var Item = function Item(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: props.image,
    first: props.first,
    last: props.last,
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateCircle, {
    className: "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, props.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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
//# sourceMappingURL=index.js.cddf61d3d73c1414ce34.hot-update.js.map