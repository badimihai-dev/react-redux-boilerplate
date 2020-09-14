import environment from "environment";
import EffectUtility from "../../utilities/EffectUtility";
import ProductsModel from "../../models/Products/ProductsModel";

export default class AuthEffect {
  static async requestProductsByCategory(data) {
    const endpoint = environment.api.category;
    return EffectUtility.getToModel(ProductsModel, endpoint, data);
  }
}
