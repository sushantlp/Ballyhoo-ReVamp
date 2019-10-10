export const actionType = {
  customerData: "CUSTOMER_DATA"
};

export const updateCustomerData = customerData => dispatch => {
  return dispatch({ type: actionType.customerData, customerData });
};
