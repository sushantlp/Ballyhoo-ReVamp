import { combineReducers } from 'redux';
import { cityLocality } from "./city-locality-reducer";
import { homeScreen } from "./home-screen-reducer";
export default combineReducers({cityLocality,homeScreen});