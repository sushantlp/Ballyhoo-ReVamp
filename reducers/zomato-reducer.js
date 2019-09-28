import { actionType } from "../actions/zomato-action";

const initialState = {
  zomatoData: [],
  next_page: 1,
  prev_page: 0,
  status: "START",
  msg: ""
};

export function zomatoData(state = initialState, action) {
  switch (action.type) {
    case actionType.zomatoData:
      if (action.zomatoData.code === 200) {
        return {
          ...state,
          zomatoData: action.zomatoData.data.reviews,
          next_page: action.zomatoData.data.next_page,
          prev_page: action.zomatoData.data.prev_page,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          zomatoData: [],
          next_page: 1,
          prev_page: 0,
          status: "FAIL",
          msg: action.listData.message
        };
      }

    case actionType.zomatoDataMerge:
      if (action.zomatoData.code === 200) {
        let previous = state.zomatoData;
        if (Object.keys(previous).length === 0) previous = [];

        return {
          ...state,
          zomatoData: previous.concat(action.zomatoData.data.reviews),
          next_page: action.zomatoData.data.next_page,
          prev_page: action.zomatoData.data.prev_page,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          zomatoData: [],
          next_page: 1,
          prev_page: 0,
          status: "FAIL",
          msg: action.zomatoData.message
        };
      }

    default:
      return state;
  }
}
