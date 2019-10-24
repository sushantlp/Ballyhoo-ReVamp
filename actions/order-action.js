export const actionType = {
  orderData: "ORDER_DATA",
  orderDataMerge: "ORDER_DATA_MERGE"
};

export function getOrderData(customerId, startDate, endDate, page) {
  return dispatch => {
    api
      .orderDataApi(customerId, startDate, endDate, page)
      .then(orderData => dispatch({ type: actionType.orderData, orderData }));
  };
}

export function getMoreOrderData(customerId, startDate, endDate, page) {
  return dispatch => {
    api
      .orderDataApi(customerId, startDate, endDate, page)
      .then(orderData =>
        dispatch({ type: actionType.orderDataMerge, orderData })
      );
  };
}
