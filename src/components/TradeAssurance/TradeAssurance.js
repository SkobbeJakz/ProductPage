import React from "react";
import "./TradeAssurance.css";
import iconIcon from "../../assets/imgs/icon.svg";

const TradeAssurance = () => {
  return (
    <div className="row tradeassurance">
      <img src={iconIcon} className="img icon-icon" alt="Icon-Security_Lock" />
      <span className="trade-assurance">Trade Assurance</span>
      <span className="protects-your-alibab">
        protects your Alibaba.com orders
      </span>
    </div>
  );
};

export default TradeAssurance;
