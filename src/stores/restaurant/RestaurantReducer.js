import BaseReducer from "../../utilities/BaseReducer";
import RestaurantAction from "./RestaurantAction";

class RestaurantReducer extends BaseReducer {
  initialState = {
    restaurantId: "",
    restaurantTitle: "",
  };

  [RestaurantAction.SET_RESTAURANT_ID](state, action) {
    return {
      ...state,
      restaurantId: action.payload,
    };
  }
  [RestaurantAction.SET_DEFAULT_CATEGORY](state, action) {
    return {
      ...state,
      defaultCategory: action.payload.category,
    };
  }

  [RestaurantAction.REQUEST_RESTAURANT_DATA_FINISHED](state, action) {
    return {
      ...state,
      ...action.payload,
    };
  }
}
export default RestaurantReducer;
