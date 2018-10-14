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

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

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

    _this.state = {
      pics: []
    };
    _this.progressBar = null;

    _this.setRefProgress = function (element) {
      _this.progressBar = element;
    };

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
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_on_screen__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_monitor__WEBPACK_IMPORTED_MODULE_5__["default"], {
        topUp: function topUp() {
          console.log("monitor"); // this.progressBar.topUpDebounced();

          _this2.progressBar.topUp();
        },
        ref: function ref(instance) {
          _this2.monitor = instance;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: toggleFullScreen,
        className: "jsx-3306832547",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "toggle fullscreen"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_progress_bar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: this.setRefProgress // ref={instance => {
        //   this.progressBar = instance;
        // }}
        ,
        addToPunchList: this.addToPunchList,
        isActive: function isActive() {
          return screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"];
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_punch_list__WEBPACK_IMPORTED_MODULE_7__["default"], {
        rows: this.state.pics,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3306832547",
        css: "#container.jsx-3306832547{width:90%;margin-left:auto;margin-right:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9reWFuZy9Eb2N1bWVudHMvT25lRHJpdmUvZG9pbmcvaGVsbG8tbmV4dC9wYWdlcy9jYW1lcmEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VvQixBQUd1QixVQUNPLGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMva3lhbmcvRG9jdW1lbnRzL09uZURyaXZlL2RvaW5nL2hlbGxvLW5leHQvcGFnZXMvY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc2NyZWVuZnVsbCBmcm9tIFwic2NyZWVuZnVsbFwiO1xuaW1wb3J0IFRyYWNrVmlzaWJpbGl0eSBmcm9tIFwicmVhY3Qtb24tc2NyZWVuXCI7XG5cbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvdW50ZXJcIjtcbmltcG9ydCBNb25pdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL21vbml0b3JcIjtcbmltcG9ydCBQcm9ncmVzcyBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9ncmVzcy1iYXJcIjtcbmltcG9ydCBQdW5jaExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHVuY2gtbGlzdFwiO1xuXG5sZXQgdG9nZ2xlRnVsbFNjcmVlbiA9ICgpID0+IHtcbiAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgIHNjcmVlbmZ1bGwudG9nZ2xlKCk7XG4gIH1cbiAgd2luZG93LnNjcmVlbmZ1bGwgPSBzY3JlZW5mdWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGljczogW11cbiAgICB9O1xuICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRSZWZQcm9ncmVzcyA9IGVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IGVsZW1lbnQ7XG4gICAgfTtcbiAgfVxuICBhcHBlbmRQaWMgPSBwaWMgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHBpY3MgPSB0aGlzLnN0YXRlLnBpY3MuY29uY2F0KFt7IHBpYzogcGljLCB0aW1lOiBkYXRlIH1dKTtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IHBpY3M6IHBpY3MgfSkpO1xuICB9O1xuXG4gIGFkZFRvUHVuY2hMaXN0ID0gKCkgPT4ge1xuICAgIHRoaXMubW9uaXRvci50YWtlU25hcHNob3QoKS50aGVuKHBpYyA9PiB0aGlzLmFwcGVuZFBpYyhwaWMpKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPFRyYWNrVmlzaWJpbGl0eT5cbiAgICAgICAgICA8TW9uaXRvclxuICAgICAgICAgICAgdG9wVXA9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb25pdG9yXCIpO1xuICAgICAgICAgICAgICAvLyB0aGlzLnByb2dyZXNzQmFyLnRvcFVwRGVib3VuY2VkKCk7XG4gICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIudG9wVXAoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZWY9e2luc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5tb25pdG9yID0gaW5zdGFuY2U7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVHJhY2tWaXNpYmlsaXR5PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUZ1bGxTY3JlZW59PnRvZ2dsZSBmdWxsc2NyZWVuPC9idXR0b24+XG4gICAgICAgIHsvKiA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhYmNcIik7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnRvcFVwRGVib3VuY2VkKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHRvcFVwXG4gICAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgICAgPFByb2dyZXNzXG4gICAgICAgICAgcmVmPXt0aGlzLnNldFJlZlByb2dyZXNzfVxuICAgICAgICAgIC8vIHJlZj17aW5zdGFuY2UgPT4ge1xuICAgICAgICAgIC8vICAgdGhpcy5wcm9ncmVzc0JhciA9IGluc3RhbmNlO1xuICAgICAgICAgIC8vIH19XG4gICAgICAgICAgYWRkVG9QdW5jaExpc3Q9e3RoaXMuYWRkVG9QdW5jaExpc3R9XG4gICAgICAgICAgaXNBY3RpdmU9eygpID0+IHNjcmVlbmZ1bGwuaXNGdWxsc2NyZWVufVxuICAgICAgICAvPlxuICAgICAgICA8UHVuY2hMaXN0IHJvd3M9e3RoaXMuc3RhdGUucGljc30gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNjb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/kyang/Documents/OneDrive/doing/hello-next/pages/camera.js */",
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
//# sourceMappingURL=camera.js.b048dbd0385380aec07b.hot-update.js.map