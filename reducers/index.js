import { combineReducers } from "redux";
import { cityLocality } from "./city-locality-reducer";
import { homeScreen } from "./home-screen-reducer";
import { listData } from "./list-reducer";
import { categoryData } from "./category-data-reducer";
import { foodCategoryData } from "./food-category-data-reducer";
import { slidderImage } from "./slidder-image-reducer";
export default combineReducers({
  cityLocality,
  homeScreen,
  listData,
  categoryData,
  foodCategoryData,
  slidderImage
});
