export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  isVisible = () => this.props.isVisible;
  initCameraStream = (topUp, isVisible) => {
    const DetectRTC = require("detectrtc");
    require("tracking");
    require("tracking/build/data/face");

    DetectRTC.load(() => {
      if (DetectRTC.isWebRTCSupported == false) {
        alert(
          "Please use Chrome, Firefox, iOS 11, Android 5 or higher, Safari 11 or higher"
        );
      } else {
        if (DetectRTC.hasWebcam == false) {
          alert("Please install an external webcam device.");
        } else {
          const tracker = new window.tracking.ObjectTracker("face");
          tracker.setInitialScale(4);
          tracker.setStepSize(2);
          tracker.setEdgesDensity(0.1);

          window.trackingTask = window.tracking.track("#video", tracker, {
            camera: true
          });

          tracker.on("track", function(event) {
            // console.log("inside on track");
            if (event.data.length > 0 && isVisible()) {
              topUp();
            }
          });
        }
      }
      //   setTimeout(() => {
      //     window.trackingTask.stop();
      //   }, 5500);
    });
  };
  takeSnapshot = () => {
    const canvas = document.createElement("canvas");
    canvas.width = this.video.videoWidth;
    canvas.height = this.video.videoHeight;

    const context = canvas.getContext("2d");
    context.drawImage(this.video, 0, 0, canvas.width, canvas.height);
    function getCanvasBlob(canvas) {
      return new Promise(function(resolve, reject) {
        canvas.toBlob(function(blob) {
          resolve(blob);
        }, "image/jpeg");
      });
    }
    return getCanvasBlob(canvas).then(function(blob) {
      const urlCreator = window.URL || window.webkitURL;
      return urlCreator.createObjectURL(blob);
    });
  };
  componentDidMount() {
    this.video = document.getElementById("video");
    this.initCameraStream(this.props.topUp, this.isVisible);
  }
  componentWillUnmount() {
    window.trackingTask.stop();
  }

  render() {
    return (
      <div className="demo-container">
        <video id="video" autoPlay loop muted />
        <style jsx>{`
          .demo-container {
            margin: 0 auto;
            text-align: center;
          }
          #video {
            max-width: 100%;
            margin: 0 auto;
          }
        `}</style>
      </div>
    );
  }
}
