import { actionType } from "../actions/event-offer-action";

const initialState = {
  eventOffer: [],
  status: "START",
  msg: ""
};

export function eventOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.eventOffer:
      if (action.eventOffer.code === 200) {
        return {
          ...state,
          eventOffer: action.eventOffer.data,
          status: "SUCCESS",
          msg: action.eventOffer.message
        };
      } else {
        return {
          ...state,
          eventOffer: [],
          status: "FAIL",
          msg: action.eventOffer.message
        };
      }
    default:
      return state;
  }
}
