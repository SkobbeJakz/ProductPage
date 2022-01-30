import React, { Component } from "react";
import "./QtySelection.css";

export default class QtySelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: null,
    };
  }

  onChangeQty = (event) => {
    this.props.qtyController(
      this.props.selectedProduct,
      parseInt(event.target.value)
    );
  };

  render() {
    return (
      <input
        className={"qty-selection"}
        type="number"
        value={this.props.qty}
        onChange={this.onChangeQty}
      />
    );
  }
}
