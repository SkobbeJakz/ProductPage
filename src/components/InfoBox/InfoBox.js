import React from "react";
import "./InfoBox.css";
import stockImg from "../../assets/imgs/icons8-ok.png";
import RattingBox from "../RattingBox/RattingBox";
import PriceBox from "../PriceBox/PriceBox";
import MarchExpo from "../MarchExpo/MarchExpo";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import Products from "../Products/Products";
import TradeAssurance from "../TradeAssurance/TradeAssurance";
import Payments from "../Payments/Payments";
import Links from "../Links/Links";

const InfoBox = (props) => {
  const productFromApi = props.product;

  if (Object.keys(props.product).length === 0) {
    return null;
  }

  return (
    <div className="col infobox">
      <div className="row badges">
        <div className="row ready-ship">
          <label className="read-ship-label">Ready to Ship</label>
        </div>
        <div className="row stock">
          <img src={stockImg} className="img icon-ok" alt="Stock-Icon" />
          <label className="stock-label">In Stock</label>
        </div>
        <div className="row fast-dispatch">
          <img
            src={stockImg}
            className="img icon-ok"
            alt="Fast-dispatch-Icon"
          />
          <label className="fast-dispatch-label">Fast Dispatch</label>
        </div>
      </div>
      <div className="row hotsaleporoducts">
        <span className="hot-selling-gps">
          {props.product.name} &nbsp;
          <label className="hot-sale-poroducts-label">Hot sale products</label>
        </span>
      </div>
      <RattingBox product={productFromApi} />
      <PriceBox product={productFromApi} />
      <MarchExpo product={productFromApi} />
      <CountdownTimer product={productFromApi} />
      <Products
        product={productFromApi}
        cart={props.cart}
        qtyController={props.qtyController}
      />
      <TradeAssurance product={productFromApi} />
      <Payments product={productFromApi} />
      <Links product={productFromApi} />
    </div>
  );
};

export default InfoBox;
