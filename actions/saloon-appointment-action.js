import api from "../utils/api";

export const actionType = {
  saloonAppointment: "SALOON_APPOINTMENT"
};

export function postSaloonAppointment(
  partnerId,
  customerId,
  appointmentDate,
  appointmentTime,
  appointmentItem
) {
  return dispatch => {
    api
      .saloonAppointmentApi(
        partnerId,
        customerId,
        appointmentDate,
        appointmentTime,
        appointmentItem
      )
      .then(saloonAppointment =>
        dispatch({ type: actionType.saloonAppointment, saloonAppointment })
      );
  };
}
