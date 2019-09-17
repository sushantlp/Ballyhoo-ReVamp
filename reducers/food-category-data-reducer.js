import { actionType } from "../actions/food-category-data-action";

const initialState = {
  foodCategoryData: [],
  status: "START",
  msg: ""
};

export function foodCategoryData(state = initialState, action) {
  switch (action.type) {
    case actionType.foodCategoryData:
      if (action.foodCategoryData.code === 200) {
        return {
          ...state,
          foodCategoryData: action.foodCategoryData.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          foodCategoryData: [],
          status: "FAIL",
          msg: action.foodCategoryData.message
        };
      }
    default:
      return state;
  }
}
