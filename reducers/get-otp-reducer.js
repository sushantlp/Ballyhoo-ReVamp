import { actionType } from "../actions/get-otp-action";

const initialState = {
  getOtp: [],
  status: "START",
  msg: ""
};

export function getOtp(state = initialState, action) {
  switch (action.type) {
    case actionType.getOtp:
      if (action.getOtp.code === 200) {
        return {
          ...state,
          getOtp: action.getOtp.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          getOtp: [],
          status: "FAIL",
          msg: action.getOtp.message
        };
      }
    default:
      return state;
  }
}
