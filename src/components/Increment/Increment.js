import React, { Component } from "react";
import "./Increment.css";
import IconPlus from "../../assets/imgs/icons8-plus_math.png";
import IconMinus from "../../assets/imgs/icon8-minus_math.png";

class Incrementor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      input: InputEvent,
    };
    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({ count: parseInt(this.state.count + 1) });
    this.props.qtyController(this.props.product, "+");
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
    this.props.qtyController(this.props.product, "-");
  };

  handleChange(event) {
    this.setState({ count: parseInt(event.target.value || 0) });
    this.props.qtyController(
      this.props.product,
      parseInt(event.target.value || 0)
    );
  }

  getSelectedQty = (cart) => {
    // set cart count
    let qty = cart[this.props.product].qty;
    this.setState({ count: parseInt(qty) });
  };

  componentDidMount = () => {
    this.getSelectedQty(this.props.cart);
  };

  componentWillReceiveProps = (nextProps) => {
    this.getSelectedQty(nextProps.cart);
  };

  render() {
    return (
      <div className="row">
        <button
          className="button-decrement"
          onClick={this.decrement}
          disabled={this.state.count === 0}
        >
          <img src={IconMinus} className="img icon-minus" alt="Icon-Minus" />
        </button>
        <input
          onChange={this.handleChange}
          value={this.state.count}
          className="input-quantity"
        ></input>
        <button className="button-increment" onClick={this.increment}>
          <img src={IconPlus} className="img icon-plus" alt="Icon-Plus" />
        </button>
      </div>
    );
  }
}

export default Incrementor;
