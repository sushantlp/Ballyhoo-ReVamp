import api from "../utils/api";

export const actionType = {
  categoryData: "CATEGORY_DATA"
};

export const getCategoryData = categoryData => dispatch => {
  return dispatch({ type: actionType.categoryData, categoryData });
};

export function getCategoryDataApi(offerId) {
  return dispatch => {
    api
      .categoryDataApi(offerId)
      .then(categoryData =>
        dispatch({ type: actionType.categoryData, categoryData })
      );
  };
}
