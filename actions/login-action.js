import api from "../utils/api";

export const actionType = {
  login: "LOGIN"
};

export function postLogin(email, password) {
  return dispatch => {
    api
      .loginApi(email, password)
      .then(login => dispatch({ type: actionType.login, login }));
  };
}
