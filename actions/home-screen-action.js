export const actionType = {
    homeScreen: "HOME_SCREEN"
  };
  
  export const getHomeScreen  = (homeScreen) =>  dispatch => {
    return dispatch({ type: actionType.homeScreen, homeScreen})
  }