export const actionType = {
  applicationStatus: "APPLICATION_STATUS"
};

export const applicationStatusAction = applicationStatus => dispatch => {
  return dispatch({ type: actionType.applicationStatus, applicationStatus });
};
