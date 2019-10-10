import { actionType } from "../actions/profile-action";

const initialState = {
  profileData: [],
  profileUpdate: [],
  status: "START",
  msg: ""
};

export function profileData(state = initialState, action) {
  switch (action.type) {
    case actionType.profileData:
      if (action.profileData.code === 200) {
        return {
          ...state,
          profileData: action.profileData.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          profileData: [],
          status: "FAIL",
          msg: action.profileData.message
        };
      }
    default:
      return state;
  }
}

export function profileUpdate(state = initialState, action) {
  switch (action.type) {
    case actionType.profileUpdate:
      if (action.profileUpdate.code === 200) {
        return {
          ...state,
          profileUpdate: action.profileUpdate.data,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          profileUpdate: [],
          status: "FAIL",
          msg: action.profileUpdate.message
        };
      }
    default:
      return state;
  }
}
