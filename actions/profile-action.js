import api from "../utils/api";

export const actionType = {
  profileData: "GET_PROFILE",
  profileUpdate: "PUT_PROFILE"
};

export function getProfile(customerId) {
  return dispatch => {
    api
      .getProfileApi(customerId)
      .then(profile => dispatch({ type: actionType.profileData, profile }));
  };
}

export function putProfile(customerId, firstName, lastName, sex, dob) {
  return dispatch => {
    api
      .putProfileApi(customerId, firstName, lastName, sex, dob)
      .then(profile => dispatch({ type: actionType.profileUpdate, profile }));
  };
}
