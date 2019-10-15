import { actionType } from "../actions/saloon-offer-action";

const initialState = {
  saloonOffer: [],
  status: "START",
  msg: ""
};

export function saloonOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.saloonOffer:
      if (action.saloonOffer.code === 200) {
        return {
          ...state,
          saloonOffer: action.saloonOffer.data,
          status: "SUCCESS",
          msg: action.saloonOffer.message
        };
      } else {
        return {
          ...state,
          saloonOffer: [],
          status: "FAIL",
          msg: action.saloonOffer.message
        };
      }
    default:
      return state;
  }
}
