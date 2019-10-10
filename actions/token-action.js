import api from "../utils/api";

export const actionType = {
  token: "TOKEN"
};

export function getToken(email, password) {
  return dispatch => {
    api
      .tokenApi(email, password)
      .then(token => dispatch({ type: actionType.token, token }));
  };
}
