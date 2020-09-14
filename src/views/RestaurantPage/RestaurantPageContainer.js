import React, { Component } from "react";
import { connect } from "react-redux";

import RestaurantPage from "./RestaurantPageComponent";
import ProductsAction from "../../stores/products/ProductsAction";
import { selectRequesting } from "../../selectors/requesting/RequestingSelector";
import RestaurantAction from "../../stores/restaurant/RestaurantAction";
import OrderAction from "../../stores/order/OrderAction";
import TableAction from "../../stores/table/TableAction";

const mapStateToProps = (state, ownProps) => ({
  table: state.table,
  cartOpen: state.order.cartOpen,
  restaurant: state.restaurant,
  selectedProduct: state.products.selectedProduct,
  products: state.products.items.filter(
    (item) => item.category === state.restaurant.defaultCategory
  ),
  showCartButton: state.order.products.length > 0,
  isRequestingProducts: selectRequesting(state, [
    ProductsAction.REQUEST_PRODUCTS_BY_CATEGORY,
  ]),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  syncTable: () => dispatch(TableAction.syncTable()),
  toggleCartOpen: () => dispatch(OrderAction.toggleCartOpen()),
  requestProductsByCategory: (category) =>
    dispatch(ProductsAction.requestProductsByCategory(category)),
  setDefaultCategory: (category) =>
    dispatch(RestaurantAction.setDefaultCategory(category)),
  selectProduct: (product) => dispatch(ProductsAction.selectProduct(product)),
});

class RestaurantPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderOpen: false,
    };
  }

  componentDidMount() {
    if (this.props.restaurant.categories) {
      this.props.requestProductsByCategory(
        this.props.restaurant.defaultCategory
      );
    }

    this.props.syncTable();
  }

  toggleOrderOpen = () => {
    this.setState({ orderOpen: !this.state.orderOpen });
  };

  render() {
    return (
      <RestaurantPage
        {...this.props}
        toggleOrderOpen={this.toggleOrderOpen}
        orderOpen={this.state.orderOpen}
      />
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantPageContainer);
