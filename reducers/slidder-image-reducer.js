import { actionType } from "../actions/slidder-image-action";

const initialState = {
  slidderImage: [],
  status: "START",
  msg: ""
};

export function slidderImage(state = initialState, action) {
  switch (action.type) {
    case actionType.slidderImage:
      if (action.slidderImage.code === 200) {
        return {
          ...state,
          slidderImage: action.slidderImage.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          slidderImage: [],
          status: "FAIL",
          msg: action.slidderImage.message
        };
      }
    default:
      return state;
  }
}
