import { combineReducers } from "redux";
import { cityLocality } from "./city-locality-reducer";
import { homeScreen } from "./home-screen-reducer";
import { listData } from "./list-reducer";
import { escapeTrending } from "./escape-trending-reducer";
export default combineReducers({
  cityLocality,
  homeScreen,
  listData,
  escapeTrending
});
