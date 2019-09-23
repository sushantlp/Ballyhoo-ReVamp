export const actionType = {
  urlParam: "URL_PARAM"
};

export const updateUrlParam = urlParam => dispatch => {
  return dispatch({ type: actionType.urlParam, urlParam });
};
