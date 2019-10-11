import api from "../utils/api";

export const actionType = {
  seo: "SEO"
};

export function getSeo(cityId, categoryId, partnerId) {
  return dispatch => {
    api
      .seoApi(cityId, categoryId, partnerId)
      .then(seo => dispatch({ type: actionType.seo, seo }));
  };
}
