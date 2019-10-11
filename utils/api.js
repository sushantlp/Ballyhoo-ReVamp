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
  },

  exploreApi: (
    name,
    contact,
    email,
    escapeType,
    tourType,
    tourCoordinator,
    tourDuration,
    tourDate,
    adult,
    children,
    pet,
    accomodation,
    cabService,
    destination,
    sightSeeing
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/enquire/escape/trip`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          contact: contact,
          email: email,
          escape_type: escapeType,
          tour_type: tourType,
          tour_coordinator: tourCoordinator,
          tour_duration: tourDuration,
          tour_date: tourDate,
          no_of_adults: adult,
          no_of_childrens: children,
          no_of_pets: pet,
          accomodation_type: accomodation,
          cab_service: cabService,
          preferred_destinations: destination,
          include_sight_seeing: sightSeeing
        })
      })
        .then(response => {
          response
            .json()
            .then(postExplore => resolve(postExplore))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  loginApi: (email, password) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/signin`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then(response => {
          response
            .json()
            .then(login => resolve(login))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  registerApi: (mobile, email, password, fname, lname, sex, dob) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/register`, {
        method: "POST",
        body: JSON.stringify({
          mobile,
          email,
          password,
          fname,
          lname,
          sex,
          dob
        })
      })
        .then(response => {
          response
            .json()
            .then(register => resolve(register))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  forgetApi: email => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/password/reset`, {
        method: "POST",
        body: JSON.stringify({
          email: email
        })
      })
        .then(response => {
          response
            .json()
            .then(forget => resolve(forget))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  getProfileApi: customerId => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/customers/${customerId}`)
        .then(response => {
          response
            .json()
            .then(profile => resolve(profile))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  putProfileApi: (customerId, firstName, lastName, sex, dob) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/customers/${customerId}`, {
        method: "PUT",
        body: JSON.stringify({
          fname: firstName,
          lname: lastName,
          sex: sex,
          dob: dob
        })
      })
        .then(response => {
          response
            .json()
            .then(profile => resolve(profile))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  tokenApi: (email, password) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/token`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then(response => {
          response
            .json()
            .then(token => resolve(token))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  paymentOptionApi: partnerId => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/partners/${partnerId}/payment-options`)
        .then(response => {
          response
            .json()
            .then(payment => resolve(payment))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  escapeEnquiryApi: (
    offerId,
    name,
    mobile,
    email,
    queryDate,
    guest,
    query,
    queryPackage
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/enquire/escape/offers/${offerId}`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          contact: mobile,
          email: email,
          query_date: queryDate,
          no_of_guest: guest,
          queries: query,
          query_package: queryPackage
        })
      })
        .then(response => {
          response
            .json()
            .then(escapeEnquiry => resolve(escapeEnquiry))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  fnbReservationApi: (
    partnerId,
    customerId,
    reservationDate,
    reservationTime,
    guest
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/partners/${partnerId}/fnb/rsvp`, {
        method: "POST",
        body: JSON.stringify({
          customer_id: customerId,
          reservation_date: reservationDate,
          reservation_time: reservationTime,
          no_of_guest: guest
        })
      })
        .then(response => {
          response
            .json()
            .then(fnbReservation => resolve(fnbReservation))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  saloonAppointmentApi: (
    partnerId,
    customerId,
    appointmentDate,
    appointmentTime,
    appointmentItem
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/partners/${partnerId}/sns/appointment`, {
        method: "POST",
        body: JSON.stringify({
          customer_id: customerId,
          appointment_date: appointmentDate,
          appointment_time: appointmentTime,
          appointment_items: appointmentItem
        })
      })
        .then(response => {
          response
            .json()
            .then(saloonAppointment => resolve(saloonAppointment))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  }
};
