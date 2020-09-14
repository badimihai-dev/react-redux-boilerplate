import BaseReducer from "../../utilities/BaseReducer";
import AuthAction from "./AuthAction";

class AuthReducer extends BaseReducer {
  initialState = {
    // restaurantId: "",
    restaurantId: "",
    token: "",
    table: "",
    isGuest: false,
    isAuth: false,
  };

  [AuthAction.SET_GUEST_DATA](state, action) {
    return {
      ...state,
      restaurantId: action.payload.restaurantId.trim(),
      token: action.payload.token,
      isGuest: action.payload.isGuest,
      table: action.payload.table,
    };
  }
}
export default AuthReducer;
