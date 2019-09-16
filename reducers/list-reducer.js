import { actionType } from "../actions/list-action";

const initialState = {
  listData: [],
  next_page: 1,
  prev_page: 0,
  response_type: 0,
  status: "START",
  msg: ""
};

export function listData(state = initialState, action) {
  switch (action.type) {
    case actionType.listData:
      if (action.listData.code === 200) {
        return {
          ...state,
          listData: action.listData.data.results,
          next_page: action.listData.data.next_page,
          prev_page: action.listData.data.prev_page,
          response_type: action.listData.data.result_type,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          listData: [],
          next_page: 1,
          prev_page: 0,
          response_type: 0,
          status: "FAIL",
          msg: action.listData.message
        };
      }

    case actionType.listDataMerge:
      if (action.listData.code === 200) {
        let previous = state.listData;
        if (Object.keys(previous).length === 0) previous = [];

        return {
          ...state,
          listData: previous.concat(action.listData.data.results),
          next_page: action.listData.data.next_page,
          prev_page: action.listData.data.prev_page,
          response_type: action.listData.data.result_type,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          listData: [],
          next_page: 1,
          prev_page: 0,
          response_type: 0,
          status: "FAIL",
          msg: action.listData.message
        };
      }

    default:
      return state;
  }
}
