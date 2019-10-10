import { actionType } from "../actions/token-action";

const initialState = {
  token: [],
  status: "START",
  msg: ""
};

export function token(state = initialState, action) {
  switch (action.type) {
    case actionType.token:
      if (action.token.code === 200) {
        return {
          ...state,
          token: action.token.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          token: [],
          status: "FAIL",
          msg: action.token.message
        };
      }
    default:
      return state;
  }
}
