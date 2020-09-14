import React, { Component } from "react";

import Scanner from "./ScannerComponent";
import { connect } from "react-redux";

import AuthAction from "../../stores/auth/AuthAction";

const mapDispatchToProps = (dispatch, ownProps) => ({
  generateToken: (restaurantId, table) =>
    dispatch(AuthAction.generateToken(restaurantId, table)),
});

class ScannerContainer extends Component {
  state = {
    done: false,
  };

  handleScan = (data) => {
    let newState = this.state;

    let json = JSON.parse(data);

    if (json != null && "stopQR" in json) {
      newState.done = true;

      this.props.generateToken(json.code, json.tableNumber);
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <Scanner handleScan={this.handleScan} handleError={this.handleError} />
    );
  }
}

export default connect(null, mapDispatchToProps)(ScannerContainer);
