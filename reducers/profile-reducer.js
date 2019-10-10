import { actionType } from "../actions/profile-action";

const initialState = {
  profile: [],
  status: "START",
  msg: ""
};

export function profileData(state = initialState, action) {
  switch (action.type) {
    case actionType.profileData:
      if (action.profile.code === 200) {
        return {
          ...state,
          profile: action.profile.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          profile: [],
          status: "FAIL",
          msg: action.profile.message
        };
      }
    default:
      return state;
  }
}

export function profileUpdate(state = initialState, action) {
  switch (action.type) {
    case actionType.profileUpdate:
      if (action.profile.code === 200) {
        return {
          ...state,
          profile: action.profile.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          profile: [],
          status: "FAIL",
          msg: action.profile.message
        };
      }
    default:
      return state;
  }
}
