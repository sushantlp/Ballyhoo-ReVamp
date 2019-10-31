import api from "../utils/api";

export const actionType = {
  seo: "SEO"
};

export function getSeoApi(cityId, categoryId, partnerId) {
  return dispatch => {
    api
      .seoApi(cityId, categoryId, partnerId)
      .then(seo => dispatch({ type: actionType.seo, seo }));
  };
}

export const getSeo = seo => dispatch => {
  return dispatch({ type: actionType.seo, seo });
};
