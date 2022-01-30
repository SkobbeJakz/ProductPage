import React from "react";
import "./Products.css";
import Incrementor from "../Increment/Increment";

const Products = (props) => {
  if (Object.keys(props.product).length === 0) {
    return null;
  }

  let price = props.product.options["battery_accessories"].price.value;
  let finalPrice = price.toFixed(2);

  return (
    <div className="row products">
      <span className="products-attr attribute">Options:</span>
      <div className="products-item-wrapper">
        <div className="row item">
          <div className="row item-details">
            <span className="product">
              {props.product.options["1080p"].label}
            </span>
            <span className="r-value">
              {props.product.options["1080p"].price.currency.symbol}
              &nbsp;
              {props.product.options["1080p"].price.value}
            </span>
          </div>
          <div className="item-incrementor">
            <Incrementor
              product={"1080p"}
              cart={props.cart}
              qtyController={props.qtyController}
            />
          </div>
        </div>
        <div className="row item">
          <div className="row item-details">
            <span className="product">{props.product.options["4k"].label}</span>
            <span className="r-value">
              {props.product.options["4k"].price.currency.symbol}
              &nbsp;
              {props.product.options["4k"].price.value}
            </span>
          </div>
          <div className="item-incrementor">
            <Incrementor
              product={"4k"}
              cart={props.cart}
              qtyController={props.qtyController}
            />
          </div>
        </div>
        <div className="row item">
          <div className="row item-details">
            <span className="product">Battery (accessories)</span>
            <span className="r-value">
              {
                props.product.options["battery_accessories"].price.currency
                  .symbol
              }
              &nbsp;
              {finalPrice}
            </span>
          </div>
          <div className="item-incrementor">
            <Incrementor
              product={"battery_accessories"}
              cart={props.cart}
              qtyController={props.qtyController}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
