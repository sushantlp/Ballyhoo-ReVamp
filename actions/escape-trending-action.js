import api from "../utils/api";

export const actionType = {
  escapeTrending: "ESCAPE_TRENDING"
};

export function getEscapeDataApi(offerId) {
  console.log("Esca");
  return dispatch => {
    api
      .escapeDataApi(offerId)
      .then(escapeTrending =>
        dispatch({ type: actionType.escapeTrending, escapeTrending })
      );
  };
}
