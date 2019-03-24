webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/components/Icon.jsx":
/*!********************************************!*\
  !*** ./templates/main/components/Icon.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-inlinesvg */ "./node_modules/react-inlinesvg/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/components/Icon.jsx";






var getMeasure = function getMeasure(num) {
  return typeof num === 'number' ? "".concat(num, "px") : num;
};

var StyledSVG = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_inlinesvg__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Icon__StyledSVG",
  componentId: "sc-1h70f9h-0"
})(["min-width:", ";min-height:", ";svg{fill:", ";width:", ";height:", ";}"], function (props) {
  return getMeasure(props.width);
}, function (props) {
  return getMeasure(props.height);
}, function (props) {
  return props.fill;
}, function (props) {
  return getMeasure(props.width);
}, function (props) {
  return getMeasure(props.height);
});

var Icon = function Icon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSVG, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('icon', props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
};

Icon.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  fill: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  width: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["string"], prop_types__WEBPACK_IMPORTED_MODULE_2__["number"]]),
  height: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["string"], prop_types__WEBPACK_IMPORTED_MODULE_2__["number"]]),
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

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

var LineHeader = function LineHeader(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    align: props.align,
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
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Underline, {
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

var ImageDescription = function ImageDescription(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "image-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    src: props.image,
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
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["renderContent"])(props.content)))));
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

var ImageDescription2 = function ImageDescription2(props) {
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
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Middle, {
    className: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: props.image,
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
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["renderContent"])(props.content))));
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

var Services = function Services(props) {
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
  }, props.number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
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
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.content)));
};

Services.propTypes = {
  number: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Services);

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

var Services = function Services(props) {
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
    src: props.icon,
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
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, props.content)));
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

var Services = function Services(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BoxHeading"], {
    align: "center",
    title: props.title,
    content: props.content,
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
  }, props.items.map(function (item) {
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

var Item = function Item(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    src: props.icon,
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
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.content));
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

var Services2 = function Services2(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: "services2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BoxHeading"], {
    align: "center",
    title: props.title,
    content: props.content,
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
  }, props.items.map(function (item) {
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

var Title = function Title(props) {
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
  }, props.image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: props.image,
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
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubHeader, {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.subtitle)));
};

Title.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ })

})
//# sourceMappingURL=index.js.bd277b159900f16a3364.hot-update.js.map