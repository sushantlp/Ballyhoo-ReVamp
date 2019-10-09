import api from "../utils/api";

export const actionType = {
  postExplore: "POST_EXPLORE"
};

export function postExploreApi(
  name,
  contact,
  email,
  escapeType,
  tourType,
  tourCoordinator,
  tourDuration,
  tourDate,
  adult,
  children,
  pet,
  accomodation,
  cabService,
  destination,
  sightSeeing
) {
  return dispatch => {
    api
      .exploreApi(
        name,
        contact,
        email,
        escapeType,
        tourType,
        tourCoordinator,
        tourDuration,
        tourDate,
        adult,
        children,
        pet,
        accomodation,
        cabService,
        destination,
        sightSeeing
      )
      .then(postExplore =>
        dispatch({ type: actionType.postExplore, postExplore })
      );
  };
}
