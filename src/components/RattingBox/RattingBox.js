import React from "react";
import "./RattingBox.css";
import starImg from "../../assets/imgs/icons8-star_filled.png";

const RattingBox = (props) => {
  if (Object.keys(props.product).length === 0) {
    return null;
  }

  return (
    <div className="row rattingbox">
      <img src={starImg} className="img icon-star" alt="Star-Img" />
      <img src={starImg} className="img icon-star" alt="Star-Img" />
      <img src={starImg} className="img icon-star" alt="Star-Img" />
      <img src={starImg} className="img icon-star" alt="Star-Img" />
      <img src={starImg} className="img icon-star" alt="Star-Img" />
      <span className="starcount">{props.product.reviews.rating}</span>
      <span className="reviews"> {props.product.reviews.count} Reviews</span>
      <span className="buyers">
        {props.product.reviews.total_buyers} buyers
      </span>
    </div>
  );
};

export default RattingBox;
