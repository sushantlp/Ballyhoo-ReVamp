import { actionType } from "../actions/post-otp-action";

const initialState = {
  postOtp: [],
  status: "START",
  msg: ""
};

export function postOtp(state = initialState, action) {
  switch (action.type) {
    case actionType.postOtp:
      if (action.postOtp.code === 200) {
        return {
          ...state,
          postOtp: action.postOtp.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          postOtp: [],
          status: "FAIL",
          msg: action.postOtp.message
        };
      }
    default:
      return state;
  }
}
