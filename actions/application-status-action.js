export const actionType = {
  applicationStatus: "APPLICATION_STATUS"
};

export const applicationStatus = applicationStatus => dispatch => {
  return dispatch({ type: actionType.applicationStatus, applicationStatus });
};
