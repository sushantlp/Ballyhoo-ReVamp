import { actionType } from "../actions/featuring-action";

const initialState = {
  featuring: [],
  status: "START",
  msg: ""
};

export function featuring(state = initialState, action) {
  switch (action.type) {
    case actionType.featuring:
      if (action.featuring.code === 200) {
        return {
          ...state,
          featuring: action.featuring.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          featuring: [],
          status: "FAIL",
          msg: action.featuring.message
        };
      }
    default:
      return state;
  }
}
