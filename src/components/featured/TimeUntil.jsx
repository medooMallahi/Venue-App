import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

export default class TimeUntil extends Component {
  state = {
    deadline: "Dec, 16, 2020",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  };

  getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("time passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };
  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil(this.state.deadline);
    }, 1000);
  }
  render() {
    return (
      <Zoom delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event statt in</div>

          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="ountdown_tag">Days</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="ountdown_tag">Houers</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="ountdown_tag">Min</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="ountdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Zoom>
    );
  }
}
