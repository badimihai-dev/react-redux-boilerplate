import RestaurantEffect from "./RestaurantEffect";
import ActionUtility from "../../utilities/ActionUtility";

export default class RestaurantAction {
  static SET_RESTAURANT_ID = "RestaurantAction.SET_RESTAURANT_ID";
  static SET_DEFAULT_CATEGORY = "RestaurantAction.SET_DEFAULT_CATEGORY";

  static REQUEST_RESTAURANT_DATA = "RestaurantAction.REQUEST_RESTAURANT_DATA";
  static REQUEST_RESTAURANT_DATA_FINISHED =
    "RestaurantAction.REQUEST_RESTAURANT_DATA_FINISHED";

  static setRestaurantId(restaurantId) {
    return ActionUtility.createAction(RestaurantAction.SET_RESTAURANT_ID, {
      restaurantId,
    });
  }

  static setDefaultCategory(category) {
    return ActionUtility.createAction(RestaurantAction.SET_DEFAULT_CATEGORY, {
      category,
    });
  }

  static requestRestaurantData() {
    return async (dispatch, getState) => {
      const restaurantId = getState().auth.restaurantId.trim();

      await ActionUtility.createThunkEffect(
        dispatch,
        RestaurantAction.REQUEST_RESTAURANT_DATA,
        RestaurantEffect.requestRestaurantData,
        { headers: { restaurantId } }
      );
    };
  }
}
