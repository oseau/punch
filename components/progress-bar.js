import { Line, Circle } from "rc-progress";
import { Howl } from "howler";
import dayjs from "dayjs";
import isNull from "lodash/isNull";
import debounce from "lodash/debounce";

let playSound = () => {
  const howl = new Howl({ src: ["../static/sound/camera_shutter.mp3"] });
  howl.play();
};

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      blocking: false,
      lastTimeFaceShown: null
    };
    this.topUpDebounced = debounce(this.topUp, 50, {
      leading: true,
      maxWait: 100
    });
  }
  componentDidMount() {
    setInterval(async () => {
      await this.decrease();
    }, 500);
  }

  topUp = async () => {
    // console.log("inside topup");
    if (
      isNull(this.state.lastTimeFaceShown) ||
      dayjs().isAfter(this.state.lastTimeFaceShown.add(10, "second"))
    ) {
      // console.log(1);
      await this.setState({
        lastTimeFaceShown: dayjs().subtract(10, "second")
      });
      // return;
    }
    // console.log("lasttime", this.state.lastTimeFaceShown);
    // console.log("now", dayjs());
    if (dayjs().isBefore(this.state.lastTimeFaceShown.add(0.5, "second"))) {
      // console.log(2);
      return;
    }
    // console.log(3);
    if (this.state.blocking || !this.props.isActive()) {
      return;
    }
    const percent = this.state.percent + 10;
    if (percent >= 100) {
      this.props.addToPunchList();
      playSound();
      await this.block();
      await this.restart();
      return;
    }
    await this.setState({ percent });
  };

  decrease = async () => {
    if (
      !isNull(this.state.lastTimeFaceShown) &&
      dayjs().isBefore(this.state.lastTimeFaceShown.add(20, "second"))
    ) {
      return;
    }
    if (this.state.blocking) {
      return;
    }
    const percent = this.state.percent - 10;
    if (percent <= 0) {
      return;
    }
    await this.setState({ percent });
  };

  block = async () => {
    this.setState({ blocking: true });
  };
  unblock = async () => {
    this.setState({ blocking: false });
  };
  restart = async () => {
    this.setState({ percent: 100 });
    setTimeout(async () => {
      this.setState({ percent: 0 });
      await this.unblock();
    }, 10 * 1000);
  };

  render() {
    return <Line strokeWidth="4" percent={this.state.percent} />;
  }
}
