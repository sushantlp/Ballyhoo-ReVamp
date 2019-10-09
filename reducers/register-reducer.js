import { actionType } from "../actions/register-action";

const initialState = {
  register: [],
  status: "START",
  msg: ""
};

export function register(state = initialState, action) {
  switch (action.type) {
    case actionType.register:
      if (action.register.code === 200) {
        return {
          ...state,
          register: action.register.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          register: [],
          status: "FAIL",
          msg: action.register.message
        };
      }
    default:
      return state;
  }
}
