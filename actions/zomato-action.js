import api from "../utils/api";

export const actionType = {
  zomatoData: "ZOMATO_DATA",
  zomatoDataMerge: "ZOMATO_DATA_MERGE"
};

export const getZomatoData = zomatoData => dispatch => {
  return dispatch({ type: actionType.zomatoData, zomatoData });
};

export function getZomatoDataApi(partnerId, page) {
  return dispatch => {
    api
      .zomatoDataApi(partnerId, page)
      .then(zomatoData =>
        dispatch({ type: actionType.zomatoDataMerge, zomatoData })
      );
  };
}
