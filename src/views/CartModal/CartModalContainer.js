import React, { Component } from "react";
import { connect } from "react-redux";

import Modal from "../_common/modal/ModalContainer";
import CartModal from "./CartModalComponent";
import OrderAction from "../../stores/order/OrderAction";

const mapStateToProps = (state, ownProps) => ({
  products: state.order.products,
  total: state.order.total,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  incrementProduct: (product) =>
    dispatch(OrderAction.incrementProduct(product, +1)),
  decrementProduct: (product) =>
    dispatch(OrderAction.incrementProduct(product, -1)),
  sendOrder: () => dispatch(OrderAction.sendOrder()),
});

class CartModalContainer extends Component {
  render() {
    return (
      <Modal>
        <CartModal {...this.props} />
      </Modal>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartModalContainer);
