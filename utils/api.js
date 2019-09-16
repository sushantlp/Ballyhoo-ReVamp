import getQueryString from "./paramParser";
import { host } from "../constants";

export default {
  homeScreenApi: cityId => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/home?city_id=${cityId}`)
        .then(response => {
          response
            .json()
            .then(homeScreen => resolve(homeScreen))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  listDataApi: (cityId, type, key, page) => {
    console.log("API");
    return new Promise((resolve, reject) => {
      fetch(
        `${host}api/v9/web/listing?city_id=${cityId}&type=${type}&q=${key}&page=${page}`
      )
        .then(response => {
          response
            .json()
            .then(listData => resolve(listData))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  }
};
