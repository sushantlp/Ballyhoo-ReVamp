import { actionType } from "../actions/city-locality-action";

const initialState = {
  cityLocality: [],
  status: "START",
  msg: ""
};

export function cityLocality(state = initialState, action) {
  switch (action.type) {
    case actionType.cityLocality:
      if (action.cityLocality.code === 200) {
        return {
          ...state,
          cityLocality: action.cityLocality.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          cityLocality: [],
          status: "FAIL",
          msg: action.cityLocality.message
        };
      }
    default:
      return state;
  }
}
