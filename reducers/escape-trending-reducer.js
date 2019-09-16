import { actionType } from "../actions/escape-trending-action";

const initialState = {
  escapeTrending: [],
  status: "START",
  msg: ""
};

export function escapeTrending(state = initialState, action) {
  switch (action.type) {
    case actionType.escapeTrending:
      if (action.escapeTrending.code === 200) {
        return {
          ...state,
          escapeTrending: action.escapeTrending.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          escapeTrending: [],
          status: "FAIL",
          msg: action.escapeTrending.message
        };
      }
    default:
      return state;
  }
}
