export const actionType = {
  searchData: "SEARCH_DATA"
};

export const getsearchData = searchData => dispatch => {
  return dispatch({ type: actionType.searchData, searchData });
};
