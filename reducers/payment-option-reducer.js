import { actionType } from "../actions/payment-option-action";

const initialState = {
  payment: [],
  status: "START",
  msg: ""
};

export function payment(state = initialState, action) {
  switch (action.type) {
    case actionType.payment:
      if (action.payment.code === 200) {
        return {
          ...state,
          payment: action.payment.data,
          status: "SUCCESS",
          msg: action.payment.message
        };
      } else {
        return {
          ...state,
          payment: [],
          status: "FAIL",
          msg: action.payment.message
        };
      }
    default:
      return state;
  }
}
