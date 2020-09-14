import BaseReducer from "../../utilities/BaseReducer";
import TableAction from "./TableAction";

class TableReducer extends BaseReducer {
  initialState = {
    billRequested: "",
    assignedTo: "",
    lastOrder: "",
    orders: [],
    delivered: 0,
    total: 0,
    tableNumber: "",
    status: "",
  };

  [TableAction.SYNC_TABLE](state, action) {
    return {
      ...state,
      ...action.payload,
    };
  }
  [TableAction.REQUEST_BILL](state, action) {
    return {
      ...state,
      ...action.payload,
    };
  }
}
export default TableReducer;
