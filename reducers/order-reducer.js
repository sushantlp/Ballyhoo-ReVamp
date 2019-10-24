import { actionType } from "../actions/order-action";

const initialState = {
  orderData: [],
  next_page: null,
  prev_page: 0,
  status: "START",
  msg: ""
};

export function orderData(state = initialState, action) {
  switch (action.type) {
    case actionType.orderData:
      if (action.orderData.code === 200) {
        return {
          ...state,
          orderData: action.orderData.data.orders,
          next_page: action.orderData.data.next_page,
          prev_page: action.orderData.data.prev_page,
          status: "SUCCESS",
          msg: action.orderData.message
        };
      } else {
        return {
          ...state,
          orderData: [],
          status: "FAIL",
          next_page: null,
          prev_page: 0,
          msg: action.orderData.message
        };
      }

    case actionType.orderDataMerge:
      if (action.orderData.code === 200) {
        let previous = state.orderData;
        if (Object.keys(previous).length === 0) previous = [];

        return {
          ...state,
          orderData: previous.concat(action.orderData.data.orders),
          next_page: action.orderData.data.next_page,
          prev_page: action.orderData.data.prev_page,
          status: "SUCCESS",
          msg: action.orderData.message
        };
      } else {
        return {
          ...state,
          orderData: [],
          next_page: null,
          prev_page: 0,
          status: "FAIL",
          msg: action.orderData.message
        };
      }

    default:
      return state;
  }
}
