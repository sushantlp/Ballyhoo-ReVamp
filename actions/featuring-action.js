export const actionType = {
  featuring: "FEATURING"
};

export const getFeaturingData = featuring => dispatch => {
  return dispatch({ type: actionType.featuring, featuring });
};
