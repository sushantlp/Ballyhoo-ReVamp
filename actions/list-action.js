import api from "../utils/api";

export const actionType = {
  listData: "LIST_DATA",
  listDataMerge: "LIST_DATA_MERGE"
};

export const getListData = listData => dispatch => {
  return dispatch({ type: actionType.listData, listData });
};

export function getListDataApi(cityId, type, key, page) {
  return dispatch => {
    api
      .listDataApi(cityId, type, key, page)
      .then(listData => dispatch({ type: actionType.listDataMerge, listData }));
  };
}

export const getSearchListData = listData => dispatch => {
  return dispatch({ type: actionType.listData, listData });
};

export function getSearchListDataApi(cityId, type, key, page) {
  return dispatch => {
    api
      .searchListDataApi(cityId, type, key, page)
      .then(listData => dispatch({ type: actionType.listDataMerge, listData }));
  };
}
