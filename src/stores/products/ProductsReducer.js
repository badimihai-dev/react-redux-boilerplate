import BaseReducer from "../../utilities/BaseReducer";
import ProductsAction from "./ProductsAction";

class ProductsReducer extends BaseReducer {
  initialState = {
    selectedProduct: null,
    loadedCategories: [],
    items: [],
  };

  [ProductsAction.REQUEST_PRODUCTS_BY_CATEGORY_FINISHED](state, action) {
    let loadedCategories = [];
    if (state.loadedCategories.includes(action.payload.category)) {
      loadedCategories = state.loadedCategories;
    } else {
      loadedCategories = [...state.loadedCategories, action.payload.category];
    }

    return {
      ...state,
      loadedCategories,
      items: [...state.items, ...action.payload.items],
    };
  }
  [ProductsAction.SELECT_PRODUCT](state, action) {
    return {
      ...state,
      selectedProduct: action.payload.product,
    };
  }
}
export default ProductsReducer;
