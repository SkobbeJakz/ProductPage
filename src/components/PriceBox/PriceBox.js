import React from "react";
import "./PriceBox.css";

const PriceBox = (props) => {
  if (Object.keys(props.product).length === 0) {
    return null;
  }

  let price = props.product.options["battery_accessories"].price.value;
  let finalPrice = price.toFixed(2);

  return (
    <div className="col pricebox">
      <div className="row">
        <span className="price">
          {props.product.options["battery_accessories"].price.currency.symbol}{" "}
          {finalPrice} - {props.product.options["4k"].price.currency.symbol}{" "}
          {props.product.options["4k"].price.value}
        </span>
        <span className="option">/ Option</span>
        <span className="option2">2 Options</span>
        <span className="order">(Min.Order)</span>
      </div>
      <span className="price2">
        {" "}
        {props.product.options["battery_accessories"].old_price.currency.symbol}
        &nbsp;{
          props.product.options["battery_accessories"].old_price.value
        } - {props.product.options["4k"].old_price.currency.symbol}
        &nbsp;
        {props.product.options["4k"].old_price.value}
      </span>
    </div>
  );
};

export default PriceBox;
