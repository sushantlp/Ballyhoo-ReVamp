import { actionType } from "../actions/spa-menu-action";

const initialState = {
  spaMenu: [],
  status: "START",
  msg: ""
};

export function spaMenu(state = initialState, action) {
  switch (action.type) {
    case actionType.spaMenu:
      if (action.spaMenu.code === 200) {
        return {
          ...state,
          spaMenu: action.spaMenu,
          status: "SUCCESS",
          msg: action.spaMenu.message
        };
      } else {
        return {
          ...state,
          spaMenu: [],
          status: "FAIL",
          msg: action.spaMenu.message
        };
      }
    default:
      return state;
  }
}
