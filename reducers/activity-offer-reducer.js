import { actionType } from "../actions/activity-offer-action";

const initialState = {
  activityOffer: [],
  status: "START",
  msg: ""
};

export function activityOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.activityOffer:
      if (action.activityOffer.code === 200) {
        return {
          ...state,
          activityOffer: action.activityOffer.data,
          status: "SUCCESS",
          msg: action.activityOffer.message
        };
      } else {
        return {
          ...state,
          activityOffer: [],
          status: "FAIL",
          msg: action.activityOffer.message
        };
      }
    default:
      return state;
  }
}
