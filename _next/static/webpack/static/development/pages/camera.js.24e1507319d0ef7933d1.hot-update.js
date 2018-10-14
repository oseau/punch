webpackHotUpdate("static/development/pages/camera.js",{

/***/ "./components/progress-bar.js":
/*!************************************!*\
  !*** ./components/progress-bar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-progress */ "./node_modules/rc-progress/es/index.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/kyang/Documents/OneDrive/doing/hello-next/components/progress-bar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var playSound = function playSound() {
  var howl = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
    src: ["../static/sound/camera_shutter.mp3"]
  });
  howl.play();
};

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "topUp",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var percent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("inside topup");

              if (!(lodash_isNull__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.lastTimeFaceShown) || dayjs__WEBPACK_IMPORTED_MODULE_4___default()().isAfter(_this.state.lastTimeFaceShown.add(10, "second")))) {
                _context.next = 5;
                break;
              }

              console.log(1);
              _context.next = 5;
              return _this.setState({
                lastTimeFaceShown: dayjs__WEBPACK_IMPORTED_MODULE_4___default()().subtract(10, "second")
              });

            case 5:
              console.log("lasttime", _this.state.lastTimeFaceShown);
              console.log("now", dayjs__WEBPACK_IMPORTED_MODULE_4___default()());

              if (!dayjs__WEBPACK_IMPORTED_MODULE_4___default()().isBefore(_this.state.lastTimeFaceShown.add(0.5, "second"))) {
                _context.next = 10;
                break;
              }

              console.log(2);
              return _context.abrupt("return");

            case 10:
              console.log(3);

              if (!(_this.state.blocking || !_this.props.isActive())) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return");

            case 13:
              percent = _this.state.percent + 10;

              if (!(percent >= 100)) {
                _context.next = 20;
                break;
              }

              _this.props.addToPunchList();

              playSound();

              _this.block();

              _this.restart();

              return _context.abrupt("return");

            case 20:
              _this.setState({
                percent: percent
              });

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "decrease", function () {
      if (!lodash_isNull__WEBPACK_IMPORTED_MODULE_5___default()(_this.state.lastTimeFaceShown) && dayjs__WEBPACK_IMPORTED_MODULE_4___default()().isBefore(_this.state.lastTimeFaceShown.add(10, "second"))) {
        return;
      }

      if (_this.state.blocking) {
        return;
      }

      var percent = _this.state.percent - 1;

      if (percent <= 0) {
        return;
      }

      _this.setState({
        percent: percent
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "block", function () {
      _this.setState({
        blocking: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "unblock", function () {
      _this.setState({
        blocking: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "restart", function () {
      _this.setState({
        percent: 100
      });

      setTimeout(function () {
        _this.setState({
          percent: 0
        });

        _this.unblock();
      }, 10 * 1000);
    });

    _this.state = {
      percent: 0,
      blocking: false,
      lastTimeFaceShown: null
    };
    _this.topUpDebounced = lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(_this.topUp, 200, {
      leading: true,
      maxWait: 200
    });
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {// setInterval(this.decrease, 1000);
      // setInterval(this.topUp, 100);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        strokeWidth: "4",
        percent: this.state.percent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=camera.js.24e1507319d0ef7933d1.hot-update.js.map