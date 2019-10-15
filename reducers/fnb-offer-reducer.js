import { actionType } from "../actions/fnb-offer-action";

const initialState = {
  fnbOffer: [],
  status: "START",
  msg: ""
};

export function fnbOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.fnbOffer:
      if (action.fnbOffer.code === 200) {
        return {
          ...state,
          fnbOffer: action.fnbOffer.data,
          status: "SUCCESS",
          msg: action.fnbOffer.message
        };
      } else {
        return {
          ...state,
          fnbOffer: [],
          status: "FAIL",
          msg: action.fnbOffer.message
        };
      }
    default:
      return state;
  }
}
