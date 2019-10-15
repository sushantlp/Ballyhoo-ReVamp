import api from "../utils/api";

export const actionType = {
  activityOffer: "ACTIVITY_OFFER"
};

export function postActivityOffer(
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
      .activityOfferApi(
        offerId,
        customerId,
        paymentType,
        paymentId,
        paymentAmount,
        bookingDate,
        bookingTime,
        bookingItem
      )
      .then(activityOffer =>
        dispatch({ type: actionType.activityOffer, activityOffer })
      );
  };
}
