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
            window.tracking.track("#video", tracker, {
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
      console.log(window);
      window.stream.getTracks().forEach(function (track) {
        return track.stop();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4021430980" + " " + "demo-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
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
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4021430980",
        css: ".demo-container.jsx-4021430980{margin:0 auto;text-align:center;}#video.jsx-4021430980{max-width:100%;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9reWFuZy9Eb2N1bWVudHMvT25lRHJpdmUvZG9pbmcvaGVsbG8tbmV4dC9jb21wb25lbnRzL21vbml0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVvQixBQUcyQixBQUlDLGNBSEcsQ0FJSixjQUNoQixHQUpBIiwiZmlsZSI6Ii9Vc2Vycy9reWFuZy9Eb2N1bWVudHMvT25lRHJpdmUvZG9pbmcvaGVsbG8tbmV4dC9jb21wb25lbnRzL21vbml0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGlzVmlzaWJsZSA9ICgpID0+IHRoaXMucHJvcHMuaXNWaXNpYmxlO1xuICBpbml0Q2FtZXJhU3RyZWFtID0gKHRvcFVwLCBpc1Zpc2libGUpID0+IHtcbiAgICBjb25zdCBEZXRlY3RSVEMgPSByZXF1aXJlKFwiZGV0ZWN0cnRjXCIpO1xuICAgIHJlcXVpcmUoXCJ0cmFja2luZ1wiKTtcbiAgICByZXF1aXJlKFwidHJhY2tpbmcvYnVpbGQvZGF0YS9mYWNlXCIpO1xuXG4gICAgRGV0ZWN0UlRDLmxvYWQoKCkgPT4ge1xuICAgICAgaWYgKERldGVjdFJUQy5pc1dlYlJUQ1N1cHBvcnRlZCA9PSBmYWxzZSkge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICBcIlBsZWFzZSB1c2UgQ2hyb21lLCBGaXJlZm94LCBpT1MgMTEsIEFuZHJvaWQgNSBvciBoaWdoZXIsIFNhZmFyaSAxMSBvciBoaWdoZXJcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKERldGVjdFJUQy5oYXNXZWJjYW0gPT0gZmFsc2UpIHtcbiAgICAgICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIGFuIGV4dGVybmFsIHdlYmNhbSBkZXZpY2UuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRyYWNrZXIgPSBuZXcgd2luZG93LnRyYWNraW5nLk9iamVjdFRyYWNrZXIoXCJmYWNlXCIpO1xuICAgICAgICAgIHRyYWNrZXIuc2V0SW5pdGlhbFNjYWxlKDQpO1xuICAgICAgICAgIHRyYWNrZXIuc2V0U3RlcFNpemUoMik7XG4gICAgICAgICAgdHJhY2tlci5zZXRFZGdlc0RlbnNpdHkoMC4xKTtcblxuICAgICAgICAgIHdpbmRvdy50cmFja2luZy50cmFjayhcIiN2aWRlb1wiLCB0cmFja2VyLCB7IGNhbWVyYTogdHJ1ZSB9KTtcblxuICAgICAgICAgIHRyYWNrZXIub24oXCJ0cmFja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEubGVuZ3RoID4gMCAmJiBpc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICB0b3BVcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHRha2VTbmFwc2hvdCA9ICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IHRoaXMudmlkZW8udmlkZW9XaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy52aWRlby52aWRlb0hlaWdodDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMudmlkZW8sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgZnVuY3Rpb24gZ2V0Q2FudmFzQmxvYihjYW52YXMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY2FudmFzLnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgICAgcmVzb2x2ZShibG9iKTtcbiAgICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDYW52YXNCbG9iKGNhbnZhcykudGhlbihmdW5jdGlvbihibG9iKSB7XG4gICAgICBjb25zdCB1cmxDcmVhdG9yID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgcmV0dXJuIHVybENyZWF0b3IuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIH0pO1xuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlb1wiKTtcbiAgICB0aGlzLmluaXRDYW1lcmFTdHJlYW0odGhpcy5wcm9wcy50b3BVcCwgdGhpcy5pc1Zpc2libGUpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdyk7XG4gICAgd2luZG93LnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1jb250YWluZXJcIj5cbiAgICAgICAgPHZpZGVvIGlkPVwidmlkZW9cIiBhdXRvUGxheSBsb29wIG11dGVkIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGVtby1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICN2aWRlbyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/kyang/Documents/OneDrive/doing/hello-next/components/monitor.js */",
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=camera.js.ad13d592fc24d18af31f.hot-update.js.map