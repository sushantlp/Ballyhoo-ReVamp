import api from "../utils/api";

export const actionType = {
  escapeOffer: "ESCAPE_OFFER"
};

export function postEscapeOffer(
  offerId,
  customerId,
  paymentType,
  paymentId,
  paymentAmount,
  bookingDate,
  bookingTime,
  bookingItem
) {
  return dispatch => {
    api
      .escapeOfferApi(
        offerId,
        customerId,
        paymentType,
        paymentId,
        paymentAmount,
        bookingDate,
        bookingTime,
        bookingItem
      )
      .then(escapeOffer =>
        dispatch({ type: actionType.escapeOffer, escapeOffer })
      );
  };
}
