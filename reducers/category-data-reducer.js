import { actionType } from "../actions/category-data-action";

const initialState = {
  categoryData: [],
  status: "START",
  msg: ""
};

export function categoryData(state = initialState, action) {
  switch (action.type) {
    case actionType.categoryData:
      if (action.categoryData.code === 200) {
        return {
          ...state,
          categoryData: action.categoryData.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          categoryData: [],
          status: "FAIL",
          msg: action.categoryData.message
        };
      }
    default:
      return state;
  }
}
