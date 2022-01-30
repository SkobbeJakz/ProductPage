import React from "react";
import "./AddBox.css";
import Contact from "../Contact/Contact";
import LoginPurchase from "../LoginPurchase/LoginPurchase";
import LeadTime from "../LeadTime/LeadTime";
import ShippingTime from "../ShippingTime/ShippingTime";
import ProductOptions from "../ProductOptions/ProductOptions";

const AddBox = (props) => {
  const productFromApi = props.product;

  if (Object.keys(props.product).length === 0) {
    return null;
  }

  let value = props.product.shipping.method.cost.value;
  let nextValue = value.toFixed(2);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  const finalValue = numberWithCommas(nextValue);

  const truncate = (input) =>
    input.length > 5 ? `${input.substring(0, 15)}...` : input;

  const currier = truncate(props.product.shipping.method.title);

  return (
    <div className="col addbox">
      <div className="row">
        <span className="shop-to">
          Ship to&nbsp;
          <span className="shop-to-line">
            {props.product.shipping.method.country}
            <br />
            {currier}
          </span>
        </span>
        <div className="space"></div>
        <span className="r-span">
          {props.product.shipping.method.cost.currency.symbol}&nbsp;
          {props.cart && props.cart["totalCost"]}
          {!props.cart && "0.00"}
        </span>
      </div>
      <LeadTime product={productFromApi} />
      <ShippingTime product={productFromApi} />
      <LoginPurchase product={productFromApi} />
      <Contact product={productFromApi} />
      <ProductOptions
        state="this.state.count"
        product={productFromApi}
        cart={props.cart}
        qtyController={props.qtyController}
      />
    </div>
  );
};

export default AddBox;
