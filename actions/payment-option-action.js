import api from "../utils/api";

export const actionType = {
  payment: "PAYMENT_OPTION"
};

export function paymentOption(partnerId) {
  return dispatch => {
    api
      .paymentOptionApi(partnerId)
      .then(payment => dispatch({ type: actionType.payment, payment }));
  };
}
