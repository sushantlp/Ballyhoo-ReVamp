// import api from "../utils/api";

export const actionType = {
  spaMenu: "SPA_MENU"
};

export const getSpaMenu = spaMenu => dispatch => {
  return dispatch({ type: actionType.spaMenu, spaMenu });
};

// export function getSpaMenu(partnerId) {
//   return dispatch => {
//     api
//       .spaMenuApi(partnerId)
//       .then(spaMenu => dispatch({ type: actionType.spaMenu, spaMenu }));
//   };
// }
