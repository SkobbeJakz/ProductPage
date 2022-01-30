import React from "react";
import "./MarchExpo.css";
import logoImg from "../../assets/imgs/logo.png";
import IconForward from "../../assets/imgs/icon8-forward.png";

const MarchExpo = () => {
  return (
    <div className="row marchexpo">
      <img src={logoImg} className="logo" alt="logo" />
      <span className="free-shipping-up">• Free shipping (up to $40)</span>
      <span className="on-time-delivery-g">• On-time delivery guaranteed</span>
      <img src={IconForward} className="img icon-forward" alt="Icon-Forward" />
    </div>
  );
};

export default MarchExpo;
