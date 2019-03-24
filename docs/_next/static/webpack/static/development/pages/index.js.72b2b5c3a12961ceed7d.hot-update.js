webpackHotUpdate("static/development/pages/index.js",{

/***/ "./slide-deck/Slide.jsx":
/*!******************************!*\
  !*** ./slide-deck/Slide.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/slide-deck/Slide.jsx";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "Slide__Container",
  componentId: "sc-1ebqp0q-0"
})(["position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;animation-duration:1000ms;background-color:var(--slide-background);> div{width:100%;height:100%;}"]);

var Slide =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Slide, _Component);

  function Slide(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Slide);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Slide).call(this, props));
    console.log('Created', props.data.key);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Slide, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('Unmounted', this.props.data.key);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          animation = _this$props.animation,
          template = _this$props.template,
          data = _this$props.data;
      var animationType = animation && animation.type;
      var animationDiretions = animation && animation.direction;
      var className = classnames__WEBPACK_IMPORTED_MODULE_10___default()("slide-".concat(type), {
        animated: !!animation
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "animation-".concat(animationType), animationType), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "direction-".concat(animationDiretions), animationDiretions));
      var Component = template[data.template];
      console.log('Slide render');
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        type: type,
        className: className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })));
    }
  }]);

  return Slide;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Slide.propTypes = {
  animation: Object(prop_types__WEBPACK_IMPORTED_MODULE_8__["exact"])({
    direction: Object(prop_types__WEBPACK_IMPORTED_MODULE_8__["oneOf"])(['next', 'prev']).isRequired,
    type: Object(prop_types__WEBPACK_IMPORTED_MODULE_8__["oneOf"])(['horizontal', 'vertical']).isRequired
  }),
  data: Object(prop_types__WEBPACK_IMPORTED_MODULE_8__["exact"])({
    animation: Object(prop_types__WEBPACK_IMPORTED_MODULE_8__["exact"])({
      type: prop_types__WEBPACK_IMPORTED_MODULE_8__["string"].isRequired
    }),
    content: prop_types__WEBPACK_IMPORTED_MODULE_8__["object"].isRequired,
    key: prop_types__WEBPACK_IMPORTED_MODULE_8__["number"].isRequired,
    template: prop_types__WEBPACK_IMPORTED_MODULE_8__["string"].isRequired
  }),
  template: Object(prop_types__WEBPACK_IMPORTED_MODULE_8__["objectOf"])(prop_types__WEBPACK_IMPORTED_MODULE_8__["func"]).isRequired,
  type: Object(prop_types__WEBPACK_IMPORTED_MODULE_8__["oneOf"])(['prev', 'curr', 'next']).isRequired,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_8__["bool"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ })

})
//# sourceMappingURL=index.js.72b2b5c3a12961ceed7d.hot-update.js.map