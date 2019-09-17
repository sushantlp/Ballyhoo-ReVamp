import api from "../utils/api";

export const actionType = {
  foodCategoryData: "FOOD_CATEGORY_DATA"
};

export const getFoodCategoryData = foodCategoryData => dispatch => {
  return dispatch({ type: actionType.foodCategoryData, foodCategoryData });
};

export function getFoodCategoryDataApi(partnerId, key) {
  return dispatch => {
    api
      .foodCategoryDataApi(partnerId, key)
      .then(foodCategoryData =>
        dispatch({ type: actionType.foodCategoryData, foodCategoryData })
      );
  };
}
