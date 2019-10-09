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
  },

  zomatoDataApi: (partnerId, page) => {
    return new Promise((resolve, reject) => {
      fetch(
        `${host}api/v9/web/partners/${partnerId}/zomato-reviews?page=${page}`
      )
        .then(response => {
          response
            .json()
            .then(zomatoData => resolve(zomatoData))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },
  enquiryApi: (
    name,
    contact,
    email,
    occasionName,
    occasionDate,
    occasionTime,
    preference,
    alcohol,
    guest,
    avgCost,
    request
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/enquire/group/bookings`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          contact: contact,
          email: email,
          occasion_name: occasionName,
          occasion_date: occasionDate,
          occasion_time: occasionTime,
          food_preference: preference,
          alcohol: alcohol,
          no_of_guest: guest,
          avg_cost_per_head: avgCost,
          special_request: request
        })
      })
        .then(response => {
          response
            .json()
            .then(postEnquiry => resolve(postEnquiry))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  }
};
