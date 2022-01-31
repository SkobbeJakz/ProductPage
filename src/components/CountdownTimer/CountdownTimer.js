import React, { Component, useState } from "react";
import "./CountdownTimer.css";
import clockIcon from "../../assets/imgs/icons8-clock.png";

export default class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
    };
  }

  calculateTimeLeft = () => {
    let expireDate = new Date("2022-04-31T07:22:58+01:00");
    let difference = expireDate - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    this.setState({ timeLeft: timeLeft });
  };

  componentDidMount() {
    setInterval(() => this.calculateTimeLeft(), 1000);
  }

  render() {
    return (
      <div className="row Countdowntimer">
        <span className="off">20% OFF</span>
        <span className="dicount-ends-in">Discount ends in</span>
        <img src={clockIcon} className="img clock-icon" alt="Icon-Clock" />
        <span className="timer">
          {this.state.timeLeft &&
            `${this.state.timeLeft.days}d:${this.state.timeLeft.hours}h:${this.state.timeLeft.minutes}m:${this.state.timeLeft.seconds}s`}
        </span>
      </div>
    );
  }
}
