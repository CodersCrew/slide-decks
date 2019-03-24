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

var LineHeader = function LineHeader(_ref) {
  var align = _ref.align,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    align: align,
    className: "box-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    align: align,
    className: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, children)));
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

var BoxHeading = function BoxHeading(_ref) {
  var align = _ref.align,
      title = _ref.title,
      content = _ref.content,
      withPadding = _ref.withPadding,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BoxHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    align: align,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, title), content && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    align: align,
    withPadding: withPadding,
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children));
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

/***/ "./templates/main/components/LineHeader.jsx":
/*!**************************************************!*\
  !*** ./templates/main/components/LineHeader.jsx ***!
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
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/components/LineHeader.jsx";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LineHeader__Container",
  componentId: "kn5nzp-0"
})(["display:inline-flex;flex-direction:column;> h1{text-align:", ";}"], function (props) {
  return props.align;
});
var Underline = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LineHeader__Underline",
  componentId: "kn5nzp-1"
})(["width:80%;height:8px;margin:24px 0;background-color:var(--primary);border-radius:2px;"]);

var LineHeader = function LineHeader(_ref) {
  var align = _ref.align,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    align: align,
    className: "line-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Underline, {
    className: "underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
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

/***/ "./templates/main/slides/ImageDescription.jsx":
/*!****************************************************!*\
  !*** ./templates/main/slides/ImageDescription.jsx ***!
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./templates/main/utils/index.jsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./templates/main/components/index.js");
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/ImageDescription.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ImageDescription__Container",
  componentId: "zn7dcr-0"
})(["display:flex;justify-content:center;width:100%;height:100%;"]);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ImageDescription__Left",
  componentId: "zn7dcr-1"
})(["width:50%;background:url('", "') no-repeat center/cover;"], function (props) {
  return props.src;
});
var Right = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ImageDescription__Right",
  componentId: "zn7dcr-2"
})(["display:flex;flex-direction:column;justify-content:center;width:50%;padding:0 80px 0 64px;"]);
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ImageDescription__Middle",
  componentId: "zn7dcr-3"
})(["width:100%;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ImageDescription__Content",
  componentId: "zn7dcr-4"
})(["text-align:left;"]);

var ImageDescription = function ImageDescription(_ref) {
  var image = _ref.image,
      title = _ref.title,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "image-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    src: image,
    className: "left-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
    className: "right-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Middle, {
    className: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["LineHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["renderContent"])(content)))));
};

ImageDescription.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImageDescription);

/***/ }),

/***/ "./templates/main/slides/ImageDescription2.jsx":
/*!*****************************************************!*\
  !*** ./templates/main/slides/ImageDescription2.jsx ***!
  \*****************************************************/
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
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/ImageDescription2.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ImageDescription2__Container",
  componentId: "qupc9x-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;padding:80px;"]);
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ImageDescription2__Middle",
  componentId: "qupc9x-1"
})(["display:flex;width:100%;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ImageDescription2__Image",
  componentId: "qupc9x-2"
})(["width:864px;height:648px;min-width:864px;min-height:648px;background:url('", "') no-repeat center/cover;border-radius:8px;"], function (props) {
  return props.src;
});
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ImageDescription2__Content",
  componentId: "qupc9x-3"
})(["text-align:left;margin-left:64px;padding-top:24px;"]);

var ImageDescription2 = function ImageDescription2(_ref) {
  var title = _ref.title,
      image = _ref.image,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "image-description2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BoxHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Middle, {
    className: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: image,
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["renderContent"])(content))));
};

ImageDescription2.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImageDescription2);

/***/ }),

/***/ "./templates/main/slides/NumberItems/Item.jsx":
/*!****************************************************!*\
  !*** ./templates/main/slides/NumberItems/Item.jsx ***!
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
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/NumberItems/Item.jsx";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Container",
  componentId: "jysdzj-0"
})(["display:flex;width:100%;"]);
var NumberValue = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Item__NumberValue",
  componentId: "jysdzj-1"
})(["min-width:80px;"]);
var Right = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Right",
  componentId: "jysdzj-2"
})(["margin-left:32px;text-align:left;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "Item__Title",
  componentId: "jysdzj-3"
})(["margin:0;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Content",
  componentId: "jysdzj-4"
})(["margin-top:8px;"]);

var Services = function Services(_ref) {
  var number = _ref.number,
      title = _ref.title,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NumberValue, {
    className: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
    className: "right-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, content)));
};

Services.propTypes = {
  number: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./templates/main/slides/NumberItems/NumberItems.jsx":
/*!***********************************************************!*\
  !*** ./templates/main/slides/NumberItems/NumberItems.jsx ***!
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
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item */ "./templates/main/slides/NumberItems/Item.jsx");

var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/NumberItems/NumberItems.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NumberItems__Container",
  componentId: "ks0aan-0"
})(["width:100%;height:100%;padding:80px;", ""], function (props) {
  return props.styles;
});
var Items = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "NumberItems__Items",
  componentId: "ks0aan-1"
})(["display:grid;grid-template-columns:repeat(2,1fr);grid-auto-rows:min-content;grid-gap:80px 72px;width:100%;"]);

var NumberItems = function NumberItems(_ref) {
  var styles = _ref.styles,
      title = _ref.title,
      content = _ref.content,
      items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    styles: styles,
    className: "number-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BoxHeading"], {
    title: title,
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Items, {
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.number
    }, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  }))));
};

NumberItems.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["exact"])({
    number: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
  })),
  styles: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_3__["string"])
};
/* harmony default export */ __webpack_exports__["default"] = (NumberItems);

/***/ }),

/***/ "./templates/main/slides/Services/Item.jsx":
/*!*************************************************!*\
  !*** ./templates/main/slides/Services/Item.jsx ***!
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./templates/main/components/index.js");
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Services/Item.jsx";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Container",
  componentId: "jysdzj-0"
})(["display:flex;width:100%;"]);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Left",
  componentId: "jysdzj-1"
})(["min-width:80px;"]);
var Right = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Right",
  componentId: "jysdzj-2"
})(["margin-left:32px;text-align:left;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "Item__Title",
  componentId: "jysdzj-3"
})(["margin:0;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Content",
  componentId: "jysdzj-4"
})(["margin-top:8px;"]);

var Services = function Services(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    className: "left-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    src: icon,
    width: 80,
    height: 80,
    fill: "var(--primary)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
    className: "right-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, content)));
};

Services.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./templates/main/slides/Services/Services.jsx":
/*!*****************************************************!*\
  !*** ./templates/main/slides/Services/Services.jsx ***!
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
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item */ "./templates/main/slides/Services/Item.jsx");

var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Services/Services.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Services__Container",
  componentId: "sc-1pk8yf0-0"
})(["width:100%;height:100%;padding:80px;"]);
var Items = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Services__Items",
  componentId: "sc-1pk8yf0-1"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:min-content;grid-gap:80px 72px;"]);

var Services = function Services(_ref) {
  var title = _ref.title,
      content = _ref.content,
      items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BoxHeading"], {
    align: "center",
    title: title,
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Items, {
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.icon
    }, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  }))));
};

Services.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["exact"])({
    icon: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./templates/main/slides/Services2/Item.jsx":
/*!**************************************************!*\
  !*** ./templates/main/slides/Services2/Item.jsx ***!
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./templates/main/components/index.js");
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Services2/Item.jsx";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Item__Container",
  componentId: "jysdzj-0"
})(["display:flex;flex-direction:column;align-items:center;width:100%;text-align:center;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "Item__Title",
  componentId: "jysdzj-1"
})(["margin:16px 0 8px;"]);

var Item = function Item(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    src: icon,
    width: 80,
    height: 80,
    fill: "var(--primary)",
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
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./templates/main/slides/Services2/Services2.jsx":
/*!*******************************************************!*\
  !*** ./templates/main/slides/Services2/Services2.jsx ***!
  \*******************************************************/
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
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item */ "./templates/main/slides/Services2/Item.jsx");

var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Services2/Services2.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Services2__Container",
  componentId: "sc-1yu1y6y-0"
})(["width:100%;height:100%;padding:80px;"]);
var Items = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Services2__Items",
  componentId: "sc-1yu1y6y-1"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:min-content;grid-gap:80px 72px;"]);

var Services2 = function Services2(_ref) {
  var title = _ref.title,
      content = _ref.content,
      items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: "services2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BoxHeading"], {
    align: "center",
    title: title,
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Items, {
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.icon
    }, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  }))));
};

Services2.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"].isRequired,
  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["exact"])({
    icon: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    content: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Services2);

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

var Item = function Item(_ref) {
  var image = _ref.image,
      first = _ref.first,
      last = _ref.last,
      date = _ref.date,
      title = _ref.title,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: image,
    first: first,
    last: last,
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
  }, date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, content));
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
})(["width:100%;height:100%;padding:80px 0;", ""], function (props) {
  return props.styles;
});
var Items = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Timeline__Items",
  componentId: "sc-9qhxc1-1"
})(["display:grid;grid-template-columns:repeat(3,1fr);padding-left:", ";padding-right:", ";"], function (props) {
  return props.first ? '80px' : 0;
}, function (props) {
  return props.last ? '80px' : 0;
});

var Timeline = function Timeline(_ref) {
  var styles = _ref.styles,
      title = _ref.title,
      content = _ref.content,
      first = _ref.first,
      last = _ref.last,
      items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    styles: styles,
    className: "timeline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BoxHeading"], {
    title: title,
    content: content,
    withPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Items, {
    first: first,
    last: last,
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, items.map(function (item, i) {
    var isFirst = first && i === 0;
    var isLast = last && i === items.length - 1;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: item.date
    }, item, {
      first: isFirst,
      last: isLast,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
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
  })),
  styles: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_3__["string"])
};
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./templates/main/slides/Title.jsx":
/*!*****************************************!*\
  !*** ./templates/main/slides/Title.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/slides/Title.jsx";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Title__Container",
  componentId: "ka6jjn-0"
})(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;"]);
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Title__Middle",
  componentId: "ka6jjn-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:80%;margin-top:-80px;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Title__Image",
  componentId: "ka6jjn-2"
})(["max-width:600px;max-height:480px;margin-bottom:32px;"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Title__Header",
  componentId: "ka6jjn-3"
})(["text-align:center;"]);
var SubHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "Title__SubHeader",
  componentId: "ka6jjn-4"
})(["margin-top:24px;text-align:center;"]);

var Title = function Title(_ref) {
  var image = _ref.image,
      title = _ref.title,
      subtitle = _ref.subtitle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Middle, {
    className: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: image,
    className: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubHeader, {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, subtitle)));
};

Title.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ })

})
//# sourceMappingURL=index.js.d4955c56e95667b56ed9.hot-update.js.map