import { actionType } from "../actions/explore-action";

const initialState = {
  postExplore: [],
  status: "START",
  msg: ""
};

export function postExplore(state = initialState, action) {
  switch (action.type) {
    case actionType.postExplore:
      if (action.postExplore.code === 200) {
        return {
          ...state,
          postExplore: action.postExplore.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          postExplore: [],
          status: "FAIL",
          msg: action.postExplore.message
        };
      }
    default:
      return state;
  }
}
