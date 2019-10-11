import api from "../utils/api";

export const actionType = {
  fnbReservation: "FNB_RESERVATION"
};

export function postFnbReservation(
  partnerId,
  customerId,
  reservationDate,
  reservationTime,
  guest
) {
  return dispatch => {
    api
      .fnbReservationApi(
        partnerId,
        customerId,
        reservationDate,
        reservationTime,
        guest
      )
      .then(fnbReservation =>
        dispatch({ type: actionType.fnbReservation, fnbReservation })
      );
  };
}
