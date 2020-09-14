import OrderEffect from "./OrderEffect";
import ActionUtility from "../../utilities/ActionUtility";

export default class OrderAction {
  static ADD_PRODUCT = "OrderAction.ADD_PRODUCT";
  static REMOVE_PRODUCT = "OrderAction.REMOVE_PRODUCT";
  static TOGGLE_CART_OPEN = "OrderAction.TOGGLE_CART_OPEN";
  static INCREMENT_PRODUCT = "OrderAction.INCREMENT_PRODUCT";
  static SEND_ORDER = "OrderAction.SEND_ORDER";

  static addProduct(product) {
    return ActionUtility.createAction(OrderAction.ADD_PRODUCT, {
      product: {
        ...product,
        delivered: 0,
      },
    });
  }
  static removeProduct(product) {
    return ActionUtility.createAction(OrderAction.REMOVE_PRODUCT, {
      product,
    });
  }
  static toggleCartOpen() {
    return ActionUtility.createAction(OrderAction.TOGGLE_CART_OPEN, {});
  }
  static incrementProduct(product, increment) {
    return ActionUtility.createAction(OrderAction.INCREMENT_PRODUCT, {
      product: {
        ...product,
        quantity: product.quantity + increment,
        total: product.total + increment * product.price,
      },
    });
  }
  static sendOrder() {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      const restaurantId = getState().auth.restaurantId;
      const table = getState().auth.table;
      const order = getState().order;

      await ActionUtility.createThunkEffect(
        dispatch,
        OrderAction.SEND_ORDER,
        OrderEffect.sendOrder,
        {
          token,
          restaurantId,
          table,
          order,
        }
      );
    };
  }
}
