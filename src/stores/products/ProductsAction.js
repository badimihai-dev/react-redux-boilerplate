import ProductsEffect from "./ProductsEffect";
import ActionUtility from "../../utilities/ActionUtility";

export default class ProductsAction {
  static SET_RESTAURANT_ID = "ProductsAction.SET_RESTAURANT_ID";
  static SELECT_PRODUCT = "ProductsAction.SELECT_PRODUCT";

  static REQUEST_PRODUCTS_BY_CATEGORY =
    "ProductsAction.REQUEST_PRODUCTS_BY_CATEGORY";
  static REQUEST_PRODUCTS_BY_CATEGORY_FINISHED =
    "ProductsAction.REQUEST_PRODUCTS_BY_CATEGORY_FINISHED";

  static setRestaurantId(restaurantId) {
    return ActionUtility.createAction(ProductsAction.SET_RESTAURANT_ID, {
      restaurantId,
    });
  }
  static selectProduct(product) {
    return ActionUtility.createAction(ProductsAction.SELECT_PRODUCT, {
      product,
    });
  }

  static requestProductsByCategory(category) {
    return async (dispatch, getState) => {
      const restaurantId = getState().auth.restaurantId.trim();
      const productsAlreadyLoaded = getState().products.loadedCategories;

      if (productsAlreadyLoaded.includes(category)) {
        return;
      }

      await ActionUtility.createThunkEffect(
        dispatch,
        ProductsAction.REQUEST_PRODUCTS_BY_CATEGORY,
        ProductsEffect.requestProductsByCategory,
        { headers: { restaurantId, category } }
      );
    };
  }
}
