import environment from "environment";
import EffectUtility from "../../utilities/EffectUtility";
import RestaurantModel from "../../models/Restaurant/RestaurantModel";

export default class AuthEffect {
  static async requestRestaurantData(data) {
    const endpoint = environment.api.restaurant;
    return EffectUtility.getToModel(RestaurantModel, endpoint, data);
  }
}
