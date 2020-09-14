import React, { Component } from "react";
import LayoutComponent from "./LayoutComponent";
import { connect } from "react-redux";
import RestaurantAction from "../../../stores/restaurant/RestaurantAction";
import Loader from "../../_common/loader/LoaderComponent";

import { selectRequesting } from "../../../selectors/requesting/RequestingSelector";
import ErrorModal from "../error-modal/ErrorModalContainer";

const mapStateToProps = (state, ownProps) => ({
  restaurant: state.restaurant,
  isRequesting: selectRequesting(state, [
    RestaurantAction.REQUEST_RESTAURANT_DATA,
  ]),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestRestaurantData: () =>
    dispatch(RestaurantAction.requestRestaurantData()),
});

class LayoutContainer extends Component {
  componentDidMount() {
    this.props.requestRestaurantData();
  }
  render() {
    if (this.props.isRequesting) {
      return <Loader />;
    } else if (this.props.restaurant.restaurantTitle === "") {
      return (
        <ErrorModal
          text="Something went wrong, please check your internet connection and try again."
          okText="Retry"
          okHandler={() => {
            // localStorage.removeItem("GUESTTOKEN");
            window.location.reload();
          }}
          closeModal={() => {
            localStorage.removeItem("GUESTTOKEN");
            window.location.reload();
          }}
        />
      );
    } else {
      return (
        <LayoutComponent {...this.props} location={window.location.pathname} />
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
