import { actionType } from "../actions/escape-enquiry-action";

const initialState = {
  escapeEnquiry: [],
  status: "START",
  msg: ""
};

export function escapeEnquiry(state = initialState, action) {
  switch (action.type) {
    case actionType.escapeEnquiry:
      if (action.escapeEnquiry.code === 200) {
        return {
          ...state,
          escapeEnquiry: action.escapeEnquiry.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          escapeEnquiry: [],
          status: "FAIL",
          msg: action.escapeEnquiry.message
        };
      }
    default:
      return state;
  }
}
