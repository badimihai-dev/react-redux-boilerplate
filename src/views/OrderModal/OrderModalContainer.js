import React, { Component } from "react";
import Modal from "../_common/modal/ModalContainer";
import OrderModal from "./OrderModalComponent";
import { connect } from "react-redux";
import TableAction from "../../stores/table/TableAction";

const mapStateToProps = (state, ownProps) => ({
  table: state.table,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBill: () => dispatch(TableAction.requestBill()),
});

class OrderModalContainer extends Component {
  render() {
    return (
      <Modal>
        <OrderModal {...this.props} />
      </Modal>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderModalContainer);
