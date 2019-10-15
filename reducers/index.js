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
import { register } from "./register-reducer";
import { forget } from "./forget-reducer";
import { postExplore } from "./explore-reducer";
import { customerData } from "./customer-data-reducer";
import { profileData, profileUpdate } from "./profile-reducer";
import { payment } from "./payment-option-reducer";
import { escapeEnquiry } from "./escape-enquiry-reducer";
import { fnbReservation } from "./fnb-reservation-reducer";
import { saloonAppointment } from "./saloon-appointment-reducer";
import { fnbOffer } from "./fnb-offer-reducer";
import { eventOffer } from "./event-offer-reducer";
import { activityOffer } from "./activity-offer-reducer";
import { escapeOffer } from "./escape-offer-reducer";
import { saloonOffer } from "./saloon-offer-reducer";

import { seo } from "./seo-data-reducer";
import { applicationStatus } from "./application-status-reducer";

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
  login,
  register,
  forget,
  postExplore,
  customerData,
  profileData,
  profileUpdate,
  payment,
  escapeEnquiry,
  fnbReservation,
  saloonAppointment,
  seo,
  applicationStatus,
  fnbOffer,
  eventOffer,
  activityOffer,
  escapeOffer,
  saloonOffer
});
