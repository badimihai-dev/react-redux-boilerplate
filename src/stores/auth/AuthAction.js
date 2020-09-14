import ActionUtility from "../../utilities/ActionUtility";
import CryptoJS from "crypto-js";
import environment from "environment";

const secretKey = "ourmenu242";

export default class AuthAction {
  static SET_GUEST_DATA = "AuthAction.SET_GUEST_DATA";

  static generateToken(restaurantId, table) {
    const date = new Date();
    const expiry = date.getTime() + environment.localStorage.guestTokenExpiry;

    const object = {
      date,
      restaurantId,
      expiry,
      table,
      isGuest: true,
    };

    var token = CryptoJS.AES.encrypt(JSON.stringify(object), secretKey);

    localStorage.setItem("GUESTTOKEN", token);

    return ActionUtility.createAction(AuthAction.SET_GUEST_DATA, {
      ...object,
      token,
    });
  }

  static parseToken(token) {
    var bytes = CryptoJS.AES.decrypt(token, secretKey);
    var object = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    if (object.expiry < new Date().getTime()) {
      localStorage.removeItem("GUESTTOKEN");
      return ActionUtility.createAction(AuthAction.SET_GUEST_DATA, {
        restaurantId: "",
        token: "",
        table: "",
        isGuest: false,
      });
    }

    return ActionUtility.createAction(AuthAction.SET_GUEST_DATA, {
      ...object,
      token,
    });
  }
}
