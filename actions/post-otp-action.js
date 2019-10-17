import api from "../utils/api";

export const actionType = {
  postOtp: "POST_OTP"
};

export function postOtpAction(customerId, otp, type) {
  return dispatch => {
    api
      .postOtpApi(customerId, otp, type)
      .then(postOtp => dispatch({ type: actionType.postOtp, postOtp }));
  };
}
