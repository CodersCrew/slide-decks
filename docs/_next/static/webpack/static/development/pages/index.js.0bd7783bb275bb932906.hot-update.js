webpackHotUpdate("static/development/pages/index.js",{

/***/ "./slide-deck/Deck/Deck.tsx":
/*!**********************************!*\
  !*** ./slide-deck/Deck/Deck.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../GlobalStyle */ "./slide-deck/GlobalStyle.js");
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Slide */ "./slide-deck/Slide/Slide.tsx");
/* harmony import */ var _Deck_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Deck.styles */ "./slide-deck/Deck/Deck.styles.js");








var _jsxFileName = "/Users/konradszwarc/Desktop/Repositories/CodersCrew/react-slide-decks/slide-deck/Deck/Deck.tsx";







var omit = function omit(obj, arr) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(obj).filter(function (k) {
    return !arr.includes(k);
  }).reduce(function (acc, key) {
    return acc[key] = obj[key], acc;
  }, {});
};

var renderHead = function renderHead(head) {
  if (head) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(head).map(function (key) {
      if (typeof head[key] === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(key, {
          key: key
        }, head[key]);
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(key, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({
        key: key
      }, head[key]), null);
    }));
  }

  return null;
};

var Deck =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Deck, _Component);

  function Deck(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Deck);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Deck).call(this, props));

    _this.handleScaleChange = function (_ref) {
      var _ref$currentTarget = _ref.currentTarget,
          innerWidth = _ref$currentTarget.innerWidth,
          innerHeight = _ref$currentTarget.innerHeight;
      var _this$template$defaul = _this.template.defaults,
          slideWidth = _this$template$defaul.slideWidth,
          slideHeight = _this$template$defaul.slideHeight;
      var scaleX = innerWidth / slideWidth;
      var scaleY = innerHeight / slideHeight;

      _this.setState({
        scale: Math.min(scaleX, scaleY)
      });
    };

    _this.handleArrowPress = function (_ref2) {
      var keyCode = _ref2.keyCode;

      if (keyCode === 37 && _this.state.slideIndex !== 0) {
        _this.prevSlide();
      } else if (keyCode === 39 && _this.state.slideIndex !== _this.slidesCount - 1) {
        _this.nextSlide();
      }
    };

    _this.nextSlide = function () {
      return _this.setState(function (state) {
        return {
          slideIndex: state.slideIndex + 1
        };
      });
    };

    _this.prevSlide = function () {
      return _this.setState(function (state) {
        return {
          slideIndex: state.slideIndex - 1
        };
      });
    };

    _this.state = {
      slideIndex: 0,
      scale: 0
    };
    _this.template = props.templates[props.deck.template];
    _this.slides = props.deck.slides.map(function (slide, i) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, slide, {
        key: i
      });
    });
    _this.slidesCount = _this.slides.length;
    _this.head = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, _this.template.head, props.deck.head);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Deck, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keydown', this.handleArrowPress);
      window.addEventListener('resize', this.handleScaleChange);
      this.handleScaleChange({
        currentTarget: window
      });
      var slideIndex = Number(window.location.hash.replace('#', ''));

      if (this.state.slideIndex !== slideIndex) {
        this.setState({
          slideIndex: slideIndex
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.slideIndex !== this.state.slideIndex) {
        window.location.hash = this.state.slideIndex;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.handleArrowPress);
      window.removeEventListener('resize', this.handleScaleChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          slideIndex = _this$state.slideIndex,
          scale = _this$state.scale;
      var _this$template$defaul2 = this.template.defaults,
          slideWidth = _this$template$defaul2.slideWidth,
          slideHeight = _this$template$defaul2.slideHeight;
      var slidesToRender = [slideIndex, slideIndex + 1, slideIndex - 1];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, renderHead(this.head), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_GlobalStyle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        templateStyle: this.template.styles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Deck_styles__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, scale && this.slides.map(function (slide) {
        if (slidesToRender.includes(slide.key)) {
          var Comp = _this2.template.slides[slide.template];
          var props = omit(slide, ['template']);
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Slide__WEBPACK_IMPORTED_MODULE_11__["default"], {
            visible: slideIndex === slide.key,
            key: slide.key,
            slideWidth: slideWidth,
            slideHeight: slideHeight,
            scale: scale,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Comp, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
            style: slide.style,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          })));
        }

        return null;
      })));
    }
  }]);

  return Deck;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Deck);

/***/ })

})
//# sourceMappingURL=index.js.0bd7783bb275bb932906.hot-update.js.map