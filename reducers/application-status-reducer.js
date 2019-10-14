import { actionType } from "../actions/application-status-action";

const initialState = {
  applicationStatus: {
    login: false
  }
};

export function applicationStatus(state = initialState, action) {
  switch (action.type) {
    case actionType.applicationStatus:
      return {
        ...state,
        applicationStatus: action.applicationStatus
      };
    default:
      return state;
  }
}
