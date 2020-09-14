import React, { Component } from "react";
import { connect } from "react-redux";

import ProductModal from "./ProductModal";
import OrderAction from "../../stores/order/OrderAction";

const mapDispatchToProps = (dispatch, ownProps) => ({
  addProduct: (product) => dispatch(OrderAction.addProduct(product)),
  removeProduct: (product) => dispatch(OrderAction.removeProduct(product)),
});

class ProductModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      price: this.props.product.price,
      total: this.props.product.price,
      comments: "",
    };
  }

  changeQuantity = (increment) => {
    let newState = this.state;

    newState.quantity += increment;
    newState.total = newState.quantity * newState.price;

    this.setState(newState);
  };
  addToOrder = () => {
    this.props.addProduct({ ...this.state, ...this.props.product });
    this.props.closeModal();
  };
  setComments = (e) => {
    let newState = this.state;

    newState.comments = e.target.value;

    this.setState(newState);
  };
  render() {
    return (
      <ProductModal
        {...this.state}
        {...this.props}
        increment={() => this.changeQuantity(+1)}
        decrement={() => this.changeQuantity(-1)}
        addToOrder={this.addToOrder}
        setComments={this.setComments}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(ProductModalContainer);
