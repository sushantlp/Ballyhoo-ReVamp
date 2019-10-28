import api from "../utils/api";

export const actionType = {
  escapeEnquiry: "ESCAPE_ENQUIRY"
};

export function postEscapeEnquiry(
  offerId,
  name,
  mobile,
  email,
  queryDate,
  guest,
  query,
  queryPackage
) {
  return dispatch => {
    api
      .escapeEnquiryApi(
        offerId,
        name,
        mobile,
        email,
        queryDate,
        guest,
        query,
        queryPackage
      )
      .then(escapeEnquiry =>
        dispatch({ type: actionType.escapeEnquiry, escapeEnquiry })
      );
  };
}
