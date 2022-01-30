import React, { useEffect, useState } from "react";
import "./ProductOptions.css";
import QtySelection from "../QtySelection/QtySelection";

const ProductOptions = (props) => {
  if (Object.keys(props.product).length === 0) {
    return null;
  }

  return (
    <div className="col-products">
      <div className="row item">
        <div className="row">
          <span className="attribute">Summary:</span>
          <span className="r-value">
            <span className="qty">
              <QtySelection
                qtyController={props.qtyController}
                selectedProduct={"1080p"}
                qty={props.cart && props.cart["1080p"].qty}
              />
            </span>
            {props.product.options["1080p"].price.currency.symbol}
            &nbsp;
            {props.cart && props.cart["1080p"].cost}
            {!props.cart && "0.00"}
          </span>
        </div>
        <div className="space"></div>
      </div>
      <div className="row item">
        <div className="row">
          <span className="attribute"></span>
          <span className="r-value">
            <span className="qty">
              <QtySelection
                qtyController={props.qtyController}
                selectedProduct={"4k"}
                qty={props.cart && props.cart["4k"].qty}
              />
            </span>
            {props.product.options["4k"].price.currency.symbol}
            &nbsp;
            {props.cart && props.cart["4k"].cost}
            {!props.cart && "0.00"}
          </span>
        </div>
        <div className="space"></div>
      </div>
      <div className="row item">
        <div className="row">
          <span className="attribute"></span>
          <span className="r-value">
            <span className="qty">
              <QtySelection
                qtyController={props.qtyController}
                selectedProduct={"battery_accessories"}
                qty={props.cart && props.cart["battery_accessories"].qty}
              />
            </span>
            {props.product.options["battery_accessories"].price.currency.symbol}
            &nbsp;
            {props.cart && props.cart["battery_accessories"].cost}
            {!props.cart && "0.00"}
          </span>
        </div>
        <div className="space"></div>
      </div>
    </div>
  );
};

export default ProductOptions;
