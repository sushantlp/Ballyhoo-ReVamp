export const actionType = {
    cityLocality: "CITY_LOCALITY"
  };
  
  export const getCityLocality  = cityLocality =>  dispatch => {
    return dispatch({ type: actionType.cityLocality, cityLocality})
  }