import React from "react";
import "./Image.css";

const Image = (props) => {
  if (Object.keys(props.product).length === 0) {
    return null;
  }

  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <img
        src={props.product.gallery[0].main}
        className="img image"
        alt="Img"
      />
    </div>
  );
};

export default Image;
