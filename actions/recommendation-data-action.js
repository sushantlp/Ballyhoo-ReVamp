import api from "../utils/api";

export const actionType = {
  recommendation: "RECOMMENDATION"
};

export const getrecommendation = recommendation => dispatch => {
  return dispatch({ type: actionType.recommendation, recommendation });
};

export function getRecommendationApi() {
  return dispatch => {
    api
      .recommendationApi()
      .then(recommendation =>
        dispatch({ type: actionType.recommendation, recommendation })
      );
  };
}
