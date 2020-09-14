import { database } from "../../firebase/fire";

export default class OrderEffect {
  static sendOrder({ table, restaurantId, order, token }) {
    database
      .ref(`${restaurantId.trim()}/tables/${table}/orders`)
      .push({ ...order, date: new Date().toString() });
    database
      .ref(`${restaurantId.trim()}/tables/${table}/lastOrder`)
      .set(new Date().toString());
    database
      .ref(`${restaurantId.trim()}/tables/${table}/status`)
      .set("in progress");
  }
}
