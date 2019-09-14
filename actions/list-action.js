import api from "../utils/api";

export const actionType = {
  listData: "LIST_DATA"
};

export const getListData = listData => dispatch => {
  return dispatch({ type: actionType.listData, listData });
};
