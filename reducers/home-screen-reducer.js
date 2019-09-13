import { actionType } from "../actions/home-screen-action";

const initialState = {
  homeScreen: [],
  status: "START",
  msg: ""
};

export function homeScreen(state = initialState, action) {
  switch (action.type) {
    case actionType.homeScreen:
     if (action.homeScreen.code === 200) {
        return {
          ...state,
          homeScreen: action.homeScreen.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          homeScreen: [],
          status: "FAIL",
          msg: action.homeScreen.message
        };
      }
    default:
      return state;
  }
}
