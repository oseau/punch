webpackHotUpdate("static/development/pages/camera.js",{

/***/ "./pages/camera.js":
/*!*************************!*\
  !*** ./pages/camera.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-on-screen */ "./node_modules/react-on-screen/lib/index.js");
/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_on_screen__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/counter */ "./components/counter.js");
/* harmony import */ var _components_monitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/monitor */ "./components/monitor.js");
/* harmony import */ var _components_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/progress-bar */ "./components/progress-bar.js");
/* harmony import */ var _components_punch_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/punch-list */ "./components/punch-list.js");
var _jsxFileName = "/Users/kyang/Documents/OneDrive/doing/hello-next/pages/camera.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var toggleFullScreen = function toggleFullScreen() {
  if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
    screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
  }

  window.screenfull = screenfull__WEBPACK_IMPORTED_MODULE_2__;
};

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      pics: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "appendPic", function (pic) {
      var date = new Date();

      var pics = _this.state.pics.concat([{
        pic: pic,
        time: date
      }]);

      _this.setState(function (state) {
        return {
          pics: pics
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addToPunchList", function () {
      _this.monitor.takeSnapshot().then(function (pic) {
        return _this.appendPic(pic);
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "container",
        className: "jsx-3306832547",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_on_screen__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_monitor__WEBPACK_IMPORTED_MODULE_5__["default"], {
        topUp: function topUp() {// this.progressBar.topUp();
        },
        ref: function ref(instance) {
          _this2.monitor = instance;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: toggleFullScreen,
        className: "jsx-3306832547",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "toggle fullscreen"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          console.log("abc");

          _this2.progressBar.topUp();
        },
        className: "jsx-3306832547",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "topUp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_progress_bar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: function ref(instance) {
          _this2.progressBar = instance;
        },
        addToPunchList: this.addToPunchList,
        isActive: function isActive() {
          return screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"];
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_punch_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
        rows: this.state.pics,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3306832547",
        css: "#container.jsx-3306832547{width:90%;margin-left:auto;margin-right:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9reWFuZy9Eb2N1bWVudHMvT25lRHJpdmUvZG9pbmcvaGVsbG8tbmV4dC9wYWdlcy9jYW1lcmEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERvQixBQUd1QixVQUNPLGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMva3lhbmcvRG9jdW1lbnRzL09uZURyaXZlL2RvaW5nL2hlbGxvLW5leHQvcGFnZXMvY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc2NyZWVuZnVsbCBmcm9tIFwic2NyZWVuZnVsbFwiO1xuaW1wb3J0IFRyYWNrVmlzaWJpbGl0eSBmcm9tIFwicmVhY3Qtb24tc2NyZWVuXCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvdW50ZXJcIjtcbmltcG9ydCBNb25pdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL21vbml0b3JcIjtcbmltcG9ydCBQcm9ncmVzcyBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9ncmVzcy1iYXJcIjtcbmltcG9ydCBQdW5jaExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHVuY2gtbGlzdFwiO1xuXG5sZXQgdG9nZ2xlRnVsbFNjcmVlbiA9ICgpID0+IHtcbiAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgIHNjcmVlbmZ1bGwudG9nZ2xlKCk7XG4gIH1cbiAgd2luZG93LnNjcmVlbmZ1bGwgPSBzY3JlZW5mdWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwaWNzOiBbXVxuICB9O1xuXG4gIGFwcGVuZFBpYyA9IHBpYyA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgcGljcyA9IHRoaXMuc3RhdGUucGljcy5jb25jYXQoW3sgcGljOiBwaWMsIHRpbWU6IGRhdGUgfV0pO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgcGljczogcGljcyB9KSk7XG4gIH07XG5cbiAgYWRkVG9QdW5jaExpc3QgPSAoKSA9PiB7XG4gICAgdGhpcy5tb25pdG9yLnRha2VTbmFwc2hvdCgpLnRoZW4ocGljID0+IHRoaXMuYXBwZW5kUGljKHBpYykpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICA8VHJhY2tWaXNpYmlsaXR5PlxuICAgICAgICAgIDxNb25pdG9yXG4gICAgICAgICAgICB0b3BVcD17KCkgPT4ge1xuICAgICAgICAgICAgICAvLyB0aGlzLnByb2dyZXNzQmFyLnRvcFVwKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmVmPXtpbnN0YW5jZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMubW9uaXRvciA9IGluc3RhbmNlO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RyYWNrVmlzaWJpbGl0eT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVGdWxsU2NyZWVufT50b2dnbGUgZnVsbHNjcmVlbjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhYmNcIik7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnRvcFVwKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHRvcFVwXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8UHJvZ3Jlc3NcbiAgICAgICAgICByZWY9e2luc3RhbmNlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBpbnN0YW5jZTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFkZFRvUHVuY2hMaXN0PXt0aGlzLmFkZFRvUHVuY2hMaXN0fVxuICAgICAgICAgIGlzQWN0aXZlPXsoKSA9PiBzY3JlZW5mdWxsLmlzRnVsbHNjcmVlbn1cbiAgICAgICAgLz5cbiAgICAgICAgPFB1bmNoTGlzdCByb3dzPXt0aGlzLnN0YXRlLnBpY3N9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/kyang/Documents/OneDrive/doing/hello-next/pages/camera.js */",
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/camera")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=camera.js.9a5018fa9c6969a7d14d.hot-update.js.map