import api from "../utils/api";

export const actionType = {
  register: "REGISTER"
};

export function postRegister(mobile, email, password, fname, lname, sex, dob) {
  return dispatch => {
    api
      .registerApi(mobile, email, password, fname, lname, sex, dob)
      .then(register => dispatch({ type: actionType.register, register }));
  };
}
