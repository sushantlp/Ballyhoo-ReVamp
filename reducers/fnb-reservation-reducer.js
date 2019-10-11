import { actionType } from "../actions/fnb-reservation-action";

const initialState = {
  fnbReservation: [],
  status: "START",
  msg: ""
};

export function fnbReservation(state = initialState, action) {
  switch (action.type) {
    case actionType.fnbReservation:
      if (action.fnbReservation.code === 200) {
        return {
          ...state,
          fnbReservation: action.fnbReservation.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          fnbReservation: [],
          status: "FAIL",
          msg: action.fnbReservation.message
        };
      }
    default:
      return state;
  }
}
