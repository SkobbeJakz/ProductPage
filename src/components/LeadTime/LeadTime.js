import React from "react";
import "./LeadTime.css";
import iconInfo from "../../assets/imgs/icon8-info.png";

const LoadTime = (props) => {
  if (Object.keys(props.product).length === 0) {
    return null;
  }

  let splitValue = props.product.shipping.lead_time.value;

  let Valuelist = splitValue.split(" ");

  return (
    <div className="row leadtime">
      <span className="lead-time">
        Lead Time <strong>{Valuelist[0]} </strong>
        {Valuelist[1]}
      </span>
      <img src={iconInfo} className="img icon-info" alt="Icon-Info" />
    </div>
  );
};

export default LoadTime;
