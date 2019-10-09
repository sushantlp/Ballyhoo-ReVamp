import { actionType } from "../actions/enquiry-action";

const initialState = {
  postEnquiry: [],
  status: "START",
  msg: ""
};

export function postEnquiry(state = initialState, action) {
  switch (action.type) {
    case actionType.postEnquiry:
      if (action.postEnquiry.code === 200) {
        return {
          ...state,
          postEnquiry: action.featuring.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          postEnquiry: [],
          status: "FAIL",
          msg: action.postEnquiry.message
        };
      }
    default:
      return state;
  }
}
