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
            window.abc = window.tracking.track("#video", tracker, {
              camera: true
            });
            tracker.on("track", function (event) {
              if (event.data.length > 0 && isVisible()) {
                topUp();
              }
            });
          }
        }
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
      window.abc.stop(); // window.stream.getTracks().forEach(track => track.stop());
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4021430980" + " " + "demo-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4021430980",
        css: ".demo-container.jsx-4021430980{margin:0 auto;text-align:center;}#video.jsx-4021430980{max-width:100%;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9reWFuZy9Eb2N1bWVudHMvT25lRHJpdmUvZG9pbmcvaGVsbG8tbmV4dC9jb21wb25lbnRzL21vbml0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVvQixBQUcyQixBQUlDLGNBSEcsQ0FJSixjQUNoQixHQUpBIiwiZmlsZSI6Ii9Vc2Vycy9reWFuZy9Eb2N1bWVudHMvT25lRHJpdmUvZG9pbmcvaGVsbG8tbmV4dC9jb21wb25lbnRzL21vbml0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGlzVmlzaWJsZSA9ICgpID0+IHRoaXMucHJvcHMuaXNWaXNpYmxlO1xuICBpbml0Q2FtZXJhU3RyZWFtID0gKHRvcFVwLCBpc1Zpc2libGUpID0+IHtcbiAgICBjb25zdCBEZXRlY3RSVEMgPSByZXF1aXJlKFwiZGV0ZWN0cnRjXCIpO1xuICAgIHJlcXVpcmUoXCJ0cmFja2luZ1wiKTtcbiAgICByZXF1aXJlKFwidHJhY2tpbmcvYnVpbGQvZGF0YS9mYWNlXCIpO1xuXG4gICAgRGV0ZWN0UlRDLmxvYWQoKCkgPT4ge1xuICAgICAgaWYgKERldGVjdFJUQy5pc1dlYlJUQ1N1cHBvcnRlZCA9PSBmYWxzZSkge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICBcIlBsZWFzZSB1c2UgQ2hyb21lLCBGaXJlZm94LCBpT1MgMTEsIEFuZHJvaWQgNSBvciBoaWdoZXIsIFNhZmFyaSAxMSBvciBoaWdoZXJcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKERldGVjdFJUQy5oYXNXZWJjYW0gPT0gZmFsc2UpIHtcbiAgICAgICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIGFuIGV4dGVybmFsIHdlYmNhbSBkZXZpY2UuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRyYWNrZXIgPSBuZXcgd2luZG93LnRyYWNraW5nLk9iamVjdFRyYWNrZXIoXCJmYWNlXCIpO1xuICAgICAgICAgIHRyYWNrZXIuc2V0SW5pdGlhbFNjYWxlKDQpO1xuICAgICAgICAgIHRyYWNrZXIuc2V0U3RlcFNpemUoMik7XG4gICAgICAgICAgdHJhY2tlci5zZXRFZGdlc0RlbnNpdHkoMC4xKTtcblxuICAgICAgICAgIHdpbmRvdy5hYmMgPSB3aW5kb3cudHJhY2tpbmcudHJhY2soXCIjdmlkZW9cIiwgdHJhY2tlciwge1xuICAgICAgICAgICAgY2FtZXJhOiB0cnVlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0cmFja2VyLm9uKFwidHJhY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhLmxlbmd0aCA+IDAgJiYgaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgdG9wVXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICB0YWtlU25hcHNob3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSB0aGlzLnZpZGVvLnZpZGVvV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMudmlkZW8udmlkZW9IZWlnaHQ7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnZpZGVvLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGZ1bmN0aW9uIGdldENhbnZhc0Jsb2IoY2FudmFzKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGNhbnZhcy50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICAgIHJlc29sdmUoYmxvYik7XG4gICAgICAgIH0sIFwiaW1hZ2UvanBlZ1wiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2FudmFzQmxvYihjYW52YXMpLnRoZW4oZnVuY3Rpb24oYmxvYikge1xuICAgICAgY29uc3QgdXJsQ3JlYXRvciA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgICAgIHJldHVybiB1cmxDcmVhdG9yLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICB9KTtcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy52aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW9cIik7XG4gICAgdGhpcy5pbml0Q2FtZXJhU3RyZWFtKHRoaXMucHJvcHMudG9wVXAsIHRoaXMuaXNWaXNpYmxlKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cuYWJjLnN0b3AoKTtcbiAgICAvLyB3aW5kb3cuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICA8dmlkZW8gaWQ9XCJ2aWRlb1wiIGF1dG9QbGF5IGxvb3AgbXV0ZWQgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5kZW1vLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3ZpZGVvIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/kyang/Documents/OneDrive/doing/hello-next/components/monitor.js */",
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=camera.js.79ecaf843ca8dcd76c6b.hot-update.js.map