import { actionType } from "../actions/recommendation-data-action";

const initialState = {
  recommendation: [],
  status: "START",
  msg: ""
};

export function recommendation(state = initialState, action) {
  switch (action.type) {
    case actionType.recommendation:
      if (action.recommendation.code === 200) {
        return {
          ...state,
          recommendation: action.recommendation.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          recommendation: [],
          status: "FAIL",
          msg: action.recommendation.message
        };
      }
    default:
      return state;
  }
}
