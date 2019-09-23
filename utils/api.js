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
  },

  searchListDataApi: (cityId, type, key, page) => {
    return new Promise((resolve, reject) => {
      fetch(
        `${host}api/v9/web/search?city_id=${cityId}&type=${type}&key=${key}&page=${page}`
      )
        .then(response => {
          response
            .json()
            .then(listData => resolve(listData))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  categoryDataApi: offerId => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/offers/${offerId}`)
        .then(response => {
          response
            .json()
            .then(categoryData => resolve(categoryData))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  foodCategoryDataApi: (partnerId, key) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/partners/${partnerId}?key=${key}`)
        .then(response => {
          response
            .json()
            .then(foodCategoryData => resolve(foodCategoryData))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  }
};
