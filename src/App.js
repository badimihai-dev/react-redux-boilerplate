import React, { Component } from "react";

import "./App.scss";
import Scanner from "./views/ScannerPage/ScannerContainer";
import Layout from "./views/_common/layout/LayoutContainer";
import RestaurantPage from "./views/RestaurantPage/RestaurantPageContainer";
import AuthAction from "./stores/auth/AuthAction";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  hasCode: state.auth.isAuth || state.auth.isGuest,
});

const mapDispatchToPropes = (dispatch, ownProps) => ({
  parseToken: (token) => dispatch(AuthAction.parseToken(token)),
});

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("GUESTTOKEN");

    if (token) {
      this.props.parseToken(token);
    }
  }

  render() {
    if (this.props.hasCode) {
      return (
        <Layout>
          <RestaurantPage />
        </Layout>
      );
    } else {
      return <Scanner />;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToPropes)(App);
