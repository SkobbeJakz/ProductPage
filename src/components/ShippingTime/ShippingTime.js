import React from "react";
import "./ShippingTime.css";
import iconInfo from "../../assets/imgs/icon8-info.png";

const ShoppingTime = (props) => {
  if (Object.keys(props.product).length === 0) {
    return null;
  }
  let splitValue = props.product.shipping.method.shipping_time.value;

  let Valuelist = splitValue.split(" ");

  return (
    <div className="row shippingtime">
      <span className="shipping-time">
        Shipping time <strong>{Valuelist[0]} </strong>
        {Valuelist[1]}
      </span>
      <img src={iconInfo} className="img icon-info" alt="Icon-Info" />
    </div>
  );
};

export default ShoppingTime;
