import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./NavbarComponent";

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

class NavbarContainer extends Component {
  render() {
    return <Navbar {...this.props} />;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
