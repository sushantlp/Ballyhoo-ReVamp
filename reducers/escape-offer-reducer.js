import { actionType } from "../actions/escape-offer-action";

const initialState = {
  escapeOffer: [],
  status: "START",
  msg: ""
};

export function escapeOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.escapeOffer:
      if (action.escapeOffer.code === 200) {
        return {
          ...state,
          escapeOffer: action.escapeOffer.data,
          status: "SUCCESS",
          msg: action.escapeOffer.message
        };
      } else {
        return {
          ...state,
          escapeOffer: [],
          status: "FAIL",
          msg: action.escapeOffer.message
        };
      }
    default:
      return state;
  }
}
