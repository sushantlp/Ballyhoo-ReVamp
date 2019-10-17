import api from "../utils/api";

export const actionType = {
  getOtp: "GET_OTP"
};

export function getOtpAction(customerId, type) {
  return dispatch => {
    api
      .getOtpApi(customerId, type)
      .then(getOtp => dispatch({ type: actionType.getOtp, getOtp }));
  };
}
