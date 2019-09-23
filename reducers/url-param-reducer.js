import { actionType } from "../actions/url-param-action";

const initialState = {
  urlParam: {
    city_id: 0,
    api_type: 0,
    key: 0,
    response_type: 0,
    flag: 0
  }
};

export function urlParam(state = initialState, action) {
  switch (action.type) {
    case actionType.urlParam:
      return {
        ...state,
        urlParam: action.urlParam
      };
    default:
      return state;
  }
}
