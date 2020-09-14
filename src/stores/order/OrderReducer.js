import BaseReducer from "../../utilities/BaseReducer";
import OrderAction from "./OrderAction";

const calculateTotal = (products) => {
  let total = 0;
  products.forEach((product) => (total += product.total));
  return total;
};

class OrderReducer extends BaseReducer {
  initialState = localStorage.getItem("ORDER")
    ? JSON.parse(localStorage.getItem("ORDER"))
    : {
        products: [],
        total: 0,
        cartOpen: false,
        currency: "RON",
      };

  [OrderAction.ADD_PRODUCT](state, action) {
    let products = state.products;

    const index = products.findIndex(
      (product) => product.name === action.payload.product.name
    );

    if (index !== -1) {
      products[index].quantity += action.payload.product.quantity;
      products[index].total += action.payload.product.total;
    } else {
      products.push(action.payload.product);
    }

    return {
      ...state,
      products: [...products],
      total: calculateTotal(products),
    };
  }

  [OrderAction.REMOVE_PRODUCT](state, action) {
    let products = state.products;

    const index = products.findIndex(
      (product) => product.name === action.payload.product.name
    );

    if (index !== -1) {
      products = products.splice(index, 1);
    }

    return {
      ...state,
      products: [...products],
      total: calculateTotal(products),
    };
  }

  [OrderAction.INCREMENT_PRODUCT](state, action) {
    let products = state.products;

    const index = products.findIndex(
      (product) => product.name === action.payload.product.name
    );

    if (index !== -1) {
      if (action.payload.product.quantity > 0) {
        products[index] = action.payload.product;
      } else {
        products.splice(index, 1);
      }
      console.log(products);
    }

    return {
      ...state,
      products: [...products],
      total: calculateTotal(products),
    };
  }

  [OrderAction.TOGGLE_CART_OPEN](state, action) {
    return {
      ...state,
      cartOpen: !state.cartOpen,
    };
  }
  [OrderAction.SEND_ORDER](state, action) {
    return {
      products: [],
      total: 0,
      cartOpen: false,
    };
  }
}
export default OrderReducer;
