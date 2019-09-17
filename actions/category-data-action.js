import api from "../utils/api";

export const actionType = {
  categoryData: "CATEGORY_DATA"
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
