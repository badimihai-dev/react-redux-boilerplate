import { database } from "../../firebase/fire";
import ActionUtility from "../../utilities/ActionUtility";
// import TableEffect from "./TableEffect";

export default class TableAction {
  static SYNC_TABLE = "TableAction.SYNC_TABLE";
  static REQUEST_BILL = "TableAction.REQUEST_BILL";

  static stateUpdate(payload) {
    return ActionUtility.createAction(TableAction.UPDATE_TABLE, {
      table: payload,
    });
  }

  static syncTable() {
    return async (dispatch, getState) => {
      const restaurantId = getState().auth.restaurantId;
      const tableNumber = getState().auth.table;

      database
        .ref(`${restaurantId.trim()}/tables/${tableNumber}`)
        .on("value", (snap) => {
          if (snap.val()) {
            dispatch({ type: TableAction.SYNC_TABLE, payload: snap.val() });
          } else {
            dispatch({
              type: TableAction.SYNC_TABLE,
              payload: {
                billRequested: "",
                assignedTo: "",
                lastOrder: "",
                orders: [],
                delivered: 0,
                total: 0,
                tableNumber: "",
                status: "",
              },
            });
          }
        });
    };
  }

  static requestBill() {
    return (dispatch, getState) => {
      const restaurantId = getState().auth.restaurantId;
      const tableNumber = getState().auth.table;

      database
        .ref(`${restaurantId.trim()}/tables/${tableNumber}/billRequested`)
        .set(true)
        .then(() => {
          dispatch({
            type: TableAction.SYNC_TABLE,
            payload: { billRequested: true },
          });
        });
    };
  }
}
