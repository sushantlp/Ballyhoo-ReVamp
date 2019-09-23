import { actionType } from "../actions/search-data-action";

const initialState = {
  searchData: [],
  status: "START",
  msg: ""
};

export function searchData(state = initialState, action) {
  switch (action.type) {
    case actionType.searchData:
      if (action.searchData.code === 200) {
        return {
          ...state,
          searchData: action.searchData.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          searchData: [],
          status: "FAIL",
          msg: action.searchData.message
        };
      }
    default:
      return state;
  }
}
