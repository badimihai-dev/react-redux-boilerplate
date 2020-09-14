import React, { Component } from "react";
import { connect } from "react-redux";

import Table from "./TableComponent";
import OrdersEffect from "../../../stores/orders/OrdersEffect";

const mapDispatchToProps = (dispatch, ownProps) => ({
  syncTable: (table) => dispatch(OrdersEffect.syncTable(table)),
});

class TableContainer extends Component {
  componentDidMount() {
    this.props.syncTable(this.props.table);
  }

  render() {
    return <Table {...this.props} />;
  }
}
export default connect(null, mapDispatchToProps)(TableContainer);
