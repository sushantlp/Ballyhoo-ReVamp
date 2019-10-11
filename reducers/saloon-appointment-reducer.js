import { actionType } from "../actions/saloon-appointment-action";

const initialState = {
  saloonAppointment: [],
  status: "START",
  msg: ""
};

export function saloonAppointment(state = initialState, action) {
  switch (action.type) {
    case actionType.saloonAppointment:
      if (action.saloonAppointment.code === 200) {
        return {
          ...state,
          saloonAppointment: action.saloonAppointment.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          saloonAppointment: [],
          status: "FAIL",
          msg: action.saloonAppointment.message
        };
      }
    default:
      return state;
  }
}
