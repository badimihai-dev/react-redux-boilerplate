import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import RequestingReducer from "./requesting/RequestingReducer";
import ErrorReducer from "./error/ErrorReducer";
import ToastsReducer from "./toasts/ToastsReducer";
import AuthReducer from "./auth/AuthReducer";
import RestaurantReducer from "./restaurant/RestaurantReducer";
import ProductsReducer from "./products/ProductsReducer";
import OrderReducer from "./order/OrderReducer";
import TableReducer from "./table/TableReducer";

export default (history) => {
  const reducerMap = {
    error: ErrorReducer.reducer,
    requesting: RequestingReducer.reducer,
    router: connectRouter(history),
    toasts: new ToastsReducer().reducer,
    auth: new AuthReducer().reducer,
    restaurant: new RestaurantReducer().reducer,
    products: new ProductsReducer().reducer,
    order: new OrderReducer().reducer,
    table: new TableReducer().reducer,
  };

  return combineReducers(reducerMap);
};
