import React, { Component } from "react";
import "./Home.css";
import Image from "../../components/Image/Image";
import InfoBox from "../../components/InfoBox/InfoBox";
import AddBox from "../../components/AddBox/AddBox";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      isLoaded: false,
      count: 0,
      input: InputEvent,
      cart: null,
    };
  }

  QtyController = (product, operator) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    // selected product details
    let productPrice = this.state.product.options[product].price.value;
    let selectProduct = cart[product];
    let qty = selectProduct.qty;
    let sum = selectProduct.sum;
    let cost = selectProduct.cost;

    // qty controll
    if (operator === "+") {
      qty = qty + 1;
    } else if (operator === "-" && qty !== 0) {
      qty = qty - 1;
    } else if (operator >= 0) {
      qty = operator;
    }

    // set cost
    cost = parseFloat(productPrice * qty).toFixed(2);

    // cart object
    cart[product] = {
      qty: qty,
      sum: sum,
      cost: cost,
    };

    // call total cost calculator function
    this.totalCartCost(cart);

    // call refresher
    this.cartRefresh();
  };

  // calculate total cost
  totalCartCost = (cart) => {
    // calculate total cost
    let cartTotalCost = 0;
    Object.keys(this.state.product.options).forEach((productItem) => {
      cartTotalCost =
        +parseFloat(cartTotalCost) + +parseFloat(cart[productItem].cost);
    });

    // set total cost
    cart["totalCost"] = parseFloat(cartTotalCost).toFixed(2);

    // update cart
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart: cart });
  };

  cartRefresh = () => {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    this.setState({ refreshNum: randomNumber });
  };

  // fetch and Parse data from API
  componentDidMount() {
    fetch("https://fe-assignment.vaimo.net/")
      .then((result) => result.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          product: json.product,
        });
      });

    // default cart
    let cart = JSON.parse(localStorage.getItem("cart"));
    let cartProductObj = {};
    if (!cart ) {
      Object.keys(this.state.product.options).forEach((productItem)  => {
        cartProductObj[productItem] = {
          qty: 0,
          sum: 0,
          cost: 0,
        } 
      });
      cartProductObj.totalCost = 0;
      localStorage.setItem("cart", JSON.stringify(cartProductObj));
    } else {
      cartProductObj = JSON.parse(localStorage.getItem("cart"));
    }
    this.setState({ cart: cartProductObj });
  }

  render() {
    return (
      <div className="container">
        <Image product={this.state.product} />
        <div className="pagespace"></div>
        <InfoBox
          product={this.state.product}
          cart={this.state.cart}
          qtyController={this.QtyController}
        />
        <div className="pagespace"></div>
        <AddBox
          product={this.state.product}
          cart={this.state.cart}
          qtyController={this.QtyController}
        />
      </div>
    );
  }
}

export default Home;
