webpackHotUpdate("static/development/pages/camera.js",{

/***/ "./components/monitor.js":
/*!*******************************!*\
  !*** ./components/monitor.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kyang/Documents/OneDrive/doing/hello-next/components/monitor.js";



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

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isVisible", function () {
      return _this.props.isVisible;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initCameraStream", function (topUp, isVisible) {
      var DetectRTC = __webpack_require__(/*! detectrtc */ "./node_modules/detectrtc/DetectRTC.js");

      __webpack_require__(/*! tracking */ "./node_modules/tracking/build/tracking.js");

      __webpack_require__(/*! tracking/build/data/face */ "./node_modules/tracking/build/data/face.js");

      DetectRTC.load(function () {
        if (DetectRTC.isWebRTCSupported == false) {
          alert("Please use Chrome, Firefox, iOS 11, Android 5 or higher, Safari 11 or higher");
        } else {
          if (DetectRTC.hasWebcam == false) {
            alert("Please install an external webcam device.");
          } else {
            var tracker = new window.tracking.ObjectTracker("face");
            tracker.setInitialScale(4);
            tracker.setStepSize(2);
            tracker.setEdgesDensity(0.1);
            window.trackingTask = window.tracking.track("#video", tracker, {
              camera: true
            });
            tracker.on("track", function (event) {
              console.log("inside on track");

              if (event.data.length > 0 && isVisible()) {
                topUp();
              }
            });
          }
        }

        setTimeout(function () {
          window.trackingTask.stop();
        }, 5500);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "takeSnapshot", function () {
      var canvas = document.createElement("canvas");
      canvas.width = _this.video.videoWidth;
      canvas.height = _this.video.videoHeight;
      var context = canvas.getContext("2d");
      context.drawImage(_this.video, 0, 0, canvas.width, canvas.height);

      function getCanvasBlob(canvas) {
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            resolve(blob);
          }, "image/jpeg");
        });
      }

      return getCanvasBlob(canvas).then(function (blob) {
        var urlCreator = window.URL || window.webkitURL;
        return urlCreator.createObjectURL(blob);
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.video = document.getElementById("video");
      this.initCameraStream(this.props.topUp, this.isVisible);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.trackingTask.stop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4021430980" + " " + "demo-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
        id: "video",
        autoPlay: true,
        loop: true,
        muted: true,
        className: "jsx-4021430980",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4021430980",
        css: ".demo-container.jsx-4021430980{margin:0 auto;text-align:center;}#video.jsx-4021430980{max-width:100%;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9reWFuZy9Eb2N1bWVudHMvT25lRHJpdmUvZG9pbmcvaGVsbG8tbmV4dC9jb21wb25lbnRzL21vbml0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VvQixBQUcyQixBQUlDLGNBSEcsQ0FJSixjQUNoQixHQUpBIiwiZmlsZSI6Ii9Vc2Vycy9reWFuZy9Eb2N1bWVudHMvT25lRHJpdmUvZG9pbmcvaGVsbG8tbmV4dC9jb21wb25lbnRzL21vbml0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGlzVmlzaWJsZSA9ICgpID0+IHRoaXMucHJvcHMuaXNWaXNpYmxlO1xuICBpbml0Q2FtZXJhU3RyZWFtID0gKHRvcFVwLCBpc1Zpc2libGUpID0+IHtcbiAgICBjb25zdCBEZXRlY3RSVEMgPSByZXF1aXJlKFwiZGV0ZWN0cnRjXCIpO1xuICAgIHJlcXVpcmUoXCJ0cmFja2luZ1wiKTtcbiAgICByZXF1aXJlKFwidHJhY2tpbmcvYnVpbGQvZGF0YS9mYWNlXCIpO1xuXG4gICAgRGV0ZWN0UlRDLmxvYWQoKCkgPT4ge1xuICAgICAgaWYgKERldGVjdFJUQy5pc1dlYlJUQ1N1cHBvcnRlZCA9PSBmYWxzZSkge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICBcIlBsZWFzZSB1c2UgQ2hyb21lLCBGaXJlZm94LCBpT1MgMTEsIEFuZHJvaWQgNSBvciBoaWdoZXIsIFNhZmFyaSAxMSBvciBoaWdoZXJcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKERldGVjdFJUQy5oYXNXZWJjYW0gPT0gZmFsc2UpIHtcbiAgICAgICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIGFuIGV4dGVybmFsIHdlYmNhbSBkZXZpY2UuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRyYWNrZXIgPSBuZXcgd2luZG93LnRyYWNraW5nLk9iamVjdFRyYWNrZXIoXCJmYWNlXCIpO1xuICAgICAgICAgIHRyYWNrZXIuc2V0SW5pdGlhbFNjYWxlKDQpO1xuICAgICAgICAgIHRyYWNrZXIuc2V0U3RlcFNpemUoMik7XG4gICAgICAgICAgdHJhY2tlci5zZXRFZGdlc0RlbnNpdHkoMC4xKTtcblxuICAgICAgICAgIHdpbmRvdy50cmFja2luZ1Rhc2sgPSB3aW5kb3cudHJhY2tpbmcudHJhY2soXCIjdmlkZW9cIiwgdHJhY2tlciwge1xuICAgICAgICAgICAgY2FtZXJhOiB0cnVlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0cmFja2VyLm9uKFwidHJhY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIG9uIHRyYWNrXCIpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEubGVuZ3RoID4gMCAmJiBpc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICB0b3BVcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnRyYWNraW5nVGFzay5zdG9wKCk7XG4gICAgICB9LCA1NTAwKTtcbiAgICB9KTtcbiAgfTtcbiAgdGFrZVNuYXBzaG90ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLndpZHRoID0gdGhpcy52aWRlby52aWRlb1dpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLnZpZGVvLnZpZGVvSGVpZ2h0O1xuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy52aWRlbywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBmdW5jdGlvbiBnZXRDYW52YXNCbG9iKGNhbnZhcykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBjYW52YXMudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgICByZXNvbHZlKGJsb2IpO1xuICAgICAgICB9LCBcImltYWdlL2pwZWdcIik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENhbnZhc0Jsb2IoY2FudmFzKS50aGVuKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgIGNvbnN0IHVybENyZWF0b3IgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG4gICAgICByZXR1cm4gdXJsQ3JlYXRvci5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgfSk7XG4gIH07XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpO1xuICAgIHRoaXMuaW5pdENhbWVyYVN0cmVhbSh0aGlzLnByb3BzLnRvcFVwLCB0aGlzLmlzVmlzaWJsZSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnRyYWNraW5nVGFzay5zdG9wKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgPHZpZGVvIGlkPVwidmlkZW9cIiBhdXRvUGxheSBsb29wIG11dGVkIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGVtby1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICN2aWRlbyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/kyang/Documents/OneDrive/doing/hello-next/components/monitor.js */",
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=camera.js.6bb496f0d0cf5e495afd.hot-update.js.map