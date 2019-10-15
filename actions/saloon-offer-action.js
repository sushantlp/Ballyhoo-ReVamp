import api from "../utils/api";

export const actionType = {
  saloonOffer: "SALOON_OFFER"
};

export function postSaloonOffer(
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
      .saloonOfferApi(
        offerId,
        customerId,
        paymentType,
        paymentId,
        paymentAmount,
        bookingDate,
        bookingTime,
        bookingItem
      )
      .then(saloonOffer =>
        dispatch({ type: actionType.saloonOffer, saloonOffer })
      );
  };
}
