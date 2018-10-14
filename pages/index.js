import * as screenfull from "screenfull";
import TrackVisibility from "react-on-screen";

import Counter from "../components/counter";
import Monitor from "../components/monitor";
import Progress from "../components/progress-bar";
import PunchList from "../components/punch-list";

let toggleFullScreen = () => {
  if (screenfull.enabled) {
    screenfull.toggle();
  }
  window.screenfull = screenfull;
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: []
    };
    this.progressBar = null;

    this.setRefProgress = element => {
      this.progressBar = element;
    };
  }
  appendPic = pic => {
    const date = new Date();
    const pics = this.state.pics.concat([{ pic: pic, time: date }]);
    this.setState(state => ({ pics: pics }));
  };

  addToPunchList = () => {
    this.monitor.takeSnapshot().then(pic => this.appendPic(pic));
  };
  topUp = async () => {
    await this.progressBar.topUp();
  };

  render() {
    return (
      <div id="container">
        <TrackVisibility>
          <Monitor
            topUp={() => {
              // this.progressBar.topUpDebounced();
              // this.progressBar.topUp();
              this.topUp();
            }}
            ref={instance => {
              this.monitor = instance;
            }}
          />
        </TrackVisibility>
        <button onClick={toggleFullScreen}>toggle fullscreen</button>
        {/* <button
          onClick={() => {
            console.log("abc");
            this.progressBar.topUpDebounced();
          }}
        >
          topUp
        </button> */}
        <Progress
          ref={this.setRefProgress}
          // ref={instance => {
          //   this.progressBar = instance;
          // }}
          addToPunchList={this.addToPunchList}
          isActive={() => screenfull.isFullscreen}
        />
        <PunchList rows={this.state.pics} />
        <style jsx>{`
          #container {
            width: 90%;
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </div>
    );
  }
}
