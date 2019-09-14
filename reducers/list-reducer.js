import { actionType } from "../actions/list-action";

const initialState = {
  listData: [],
  status: "START",
  msg: ""
};

export function listData(state = initialState, action) {
  switch (action.type) {
    case actionType.listData:
      if (action.listData.code === 200) {
        return {
          ...state,
          listData: action.listData.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          listData: [],
          status: "FAIL",
          msg: action.listData.message
        };
      }
    default:
      return state;
  }
}
