import { actionType } from "../actions/forget-action";

const initialState = {
  forget: [],
  status: "START",
  msg: ""
};

export function forget(state = initialState, action) {
  switch (action.type) {
    case actionType.forget:
      if (action.forget.code === 200) {
        return {
          ...state,
          forget: action.forget.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          forget: [],
          status: "FAIL",
          msg: action.forget.message
        };
      }
    default:
      return state;
  }
}
