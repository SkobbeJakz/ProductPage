import React from "react";
import "./CountdownTimer.css";
import { useState, useEffect } from "react";
import clockIcon from "../../assets/imgs/icons8-clock.png";

const CountdownTimer = (props) => {
  if (Object.keys(props.product).length === 0) {
    return null;
  }

  // left time
  const calculateTimeLeft = () => {
    let expireDate = new Date("2022-01-31T07:22:58+01:00");
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

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="row Countdowntimer">
      <span className="off">20% OFF</span>
      <span className="dicount-ends-in">Discount ends in</span>
      <img src={clockIcon} className="img clock-icon" alt="Icon-Clock" />
      <span className="timer">{`${timeLeft.days}d:${timeLeft.hours}h:${timeLeft.minutes}m:${timeLeft.seconds}s`}</span>
    </div>
  );
};

export default CountdownTimer;
