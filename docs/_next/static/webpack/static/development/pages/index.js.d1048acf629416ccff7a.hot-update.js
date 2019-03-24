webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/main/components/CircularPercent.jsx":
/*!*******************************************************!*\
  !*** ./templates/main/components/CircularPercent.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/templates/main/components/CircularPercent.jsx";


var CircularProgressBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CircularProgressBar, _React$Component);

  function CircularProgressBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CircularProgressBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CircularProgressBar).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CircularProgressBar, [{
    key: "render",
    value: function render() {
      // Size of the enclosing square
      var sqSize = this.props.sqSize; // SVG centers the stroke width on the radius, subtract out so circle fits in square

      var radius = (this.props.sqSize - this.props.strokeWidth) / 2; // Enclose cicle in a circumscribing square

      var viewBox = "0 0 ".concat(sqSize, " ").concat(sqSize); // Arc length at 100% coverage is the circle circumference

      var dashArray = radius * Math.PI * 2; // Scale 100% coverage overlay with the actual percent

      var dashOffset = dashArray - dashArray * this.props.percentage / 100;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        width: this.props.sqSize,
        height: this.props.sqSize,
        viewBox: viewBox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
        className: "circle-background",
        cx: this.props.sqSize / 2,
        cy: this.props.sqSize / 2,
        r: radius,
        strokeWidth: "".concat(this.props.strokeWidth, "px"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
        className: "circle-progress",
        cx: this.props.sqSize / 2,
        cy: this.props.sqSize / 2,
        r: radius,
        strokeWidth: "".concat(this.props.strokeWidth, "px") // Start progress marker at 12 O'Clock
        ,
        transform: "rotate(-90 ".concat(this.props.sqSize / 2, " ").concat(this.props.sqSize / 2, ")"),
        style: {
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("text", {
        className: "circle-text",
        x: "50%",
        y: "50%",
        dy: ".3em",
        textAnchor: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "".concat(this.props.percentage, "%")));
    }
  }]);

  return CircularProgressBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

CircularProgressBar.defaultProps = {
  sqSize: 200,
  percentage: 25,
  strokeWidth: 10
};
/* harmony default export */ __webpack_exports__["default"] = (CircularProgressBar);

/***/ }),

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
    strokeWidth: "10",
    sqSize: "200",
    percentage: 25,
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
//# sourceMappingURL=index.js.d1048acf629416ccff7a.hot-update.js.map