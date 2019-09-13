import api from "../utils/api";

export const actionType = {
    homeScreen: "HOME_SCREEN"
  };
  
  export const getHomeScreen  = (homeScreen) =>  dispatch => {
    return dispatch({ type: actionType.homeScreen, homeScreen})
  }

  export function getHomeScreenApi(cityId) {
    return dispatch => {
      api
        .homeScreenApi(cityId)
        .then(homeScreen =>
          dispatch({ type: actionType.homeScreen, homeScreen })
        );
    };
  }
  