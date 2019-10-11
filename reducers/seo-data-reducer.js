import { actionType } from "../actions/seo-data-action";

const initialState = {
  seo: [],
  status: "START",
  msg: ""
};

export function seo(state = initialState, action) {
  switch (action.type) {
    case actionType.seo:
      if (action.seo.code === 200) {
        return {
          ...state,
          seo: action.seo.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          seo: [],
          status: "FAIL",
          msg: action.seo.message
        };
      }
    default:
      return state;
  }
}
