export const actionType = {
  slidderImage: "SLIDDER_IMAGE"
};

export const getSlidderImage = slidderImage => dispatch => {
  return dispatch({ type: actionType.slidderImage, slidderImage });
};
