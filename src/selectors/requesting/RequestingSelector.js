import { createSelector } from "reselect";

export class RequestingSelector {
  static selectRequesting(requestingState, actionTypes) {
    return actionTypes.some((actionType) => {
      return requestingState[actionType];
    });
  }
}

export const selectRequesting = createSelector(
  (state) => state.requesting,
  (state, actionTypes) => actionTypes,
  RequestingSelector.selectRequesting
);
