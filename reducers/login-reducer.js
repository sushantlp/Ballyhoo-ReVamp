import { actionType } from "../actions/login-action";

const initialState = {
  login: [],
  status: "START",
  msg: ""
};

export function login(state = initialState, action) {
  switch (action.type) {
    case actionType.login:
      if (action.login.code === 200) {
        return {
          ...state,
          login: action.featuring.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          login: [],
          status: "FAIL",
          msg: action.login.message
        };
      }
    default:
      return state;
  }
}
