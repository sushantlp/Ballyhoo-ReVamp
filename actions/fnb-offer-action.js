import api from "../utils/api";

export const actionType = {
  fnbOffer: "FNB_OFFER"
};

export function postFnbOffer(
  offerId,
  customerId,
  paymentType,
  paymentId,
  paymentAmount,
  paymentDiscount,
  bookingDate,
  bookingTime,
  bookingQuantity
) {
  return dispatch => {
    api
      .fnbOfferApi(
        offerId,
        customerId,
        paymentType,
        paymentId,
        paymentAmount,
        paymentDiscount,
        bookingDate,
        bookingTime,
        bookingQuantity
      )
      .then(fnbOffer => dispatch({ type: actionType.fnbOffer, fnbOffer }));
  };
}
