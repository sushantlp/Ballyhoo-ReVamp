import { actionType } from "../actions/customer-data-action";

const initialState = {
  customerData: {
    customer_id: 0,
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    gender: 0,
    birthday: "",
    loyality: 0
  }
};

export function customerData(state = initialState, action) {
  switch (action.type) {
    case actionType.customerData:
      return {
        ...state,
        customerData: action.customerData
      };
    default:
      return state;
  }
}
