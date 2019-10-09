import api from "../utils/api";

export const actionType = {
  postEnquiry: "POST_ENQUIRY"
};

export function postEnquiryApi(
  name,
  contact,
  email,
  occasionName,
  occasionDate,
  occasionTime,
  preference,
  alcohol,
  guest,
  avgCost,
  request
) {
  return dispatch => {
    api
      .enquiryApi(
        name,
        contact,
        email,
        occasionName,
        occasionDate,
        occasionTime,
        preference,
        alcohol,
        guest,
        avgCost,
        request
      )
      .then(postEnquiry =>
        dispatch({ type: actionType.postEnquiry, postEnquiry })
      );
  };
}
