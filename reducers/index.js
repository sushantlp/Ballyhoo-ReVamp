import { combineReducers } from "redux";
import { cityLocality } from "./city-locality-reducer";
import { homeScreen } from "./home-screen-reducer";
import { listData } from "./list-reducer";
import { categoryData } from "./category-data-reducer";
import { foodCategoryData } from "./food-category-data-reducer";
import { slidderImage } from "./slidder-image-reducer";
import { recommendation } from "./recommendation-data-reducer";
import { searchData } from "./search-data-reducer";
import { urlParam } from "./url-param-reducer";
import { featuring } from "./featuring-reducer";
import { zomatoData } from "./zomato-reducer";
import { postEnquiry } from "./enquiry-reducer";
import { login } from "./login-reducer";
export default combineReducers({
  cityLocality,
  homeScreen,
  listData,
  categoryData,
  foodCategoryData,
  slidderImage,
  recommendation,
  searchData,
  urlParam,
  featuring,
  zomatoData,
  postEnquiry,
  login
});
