import api from "../utils/api";

export const actionType = {
  eventOffer: "EVENT_OFFER"
};

export function postEventOffer(
  offerId,
  customerId,
  paymentType,
  paymentId,
  paymentAmount,
  bookingItem
) {
  return dispatch => {
    api
      .eventOfferApi(
        offerId,
        customerId,
        paymentType,
        paymentId,
        paymentAmount,
        bookingItem
      )
      .then(eventOffer =>
        dispatch({ type: actionType.eventOffer, eventOffer })
      );
  };
}
