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
        headers: {
          "Content-Type": "application/json"
        },
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
        headers: {
          "Content-Type": "application/json"
        },
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
        headers: {
          "Content-Type": "application/json"
        },
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
        headers: {
          "Content-Type": "application/json"
        },
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
        headers: {
          "Content-Type": "application/json"
        },
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
        headers: {
          "Content-Type": "application/json"
        },
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
        headers: {
          "Content-Type": "application/json"
        },
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
        headers: {
          "Content-Type": "application/json"
        },
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
        headers: {
          "Content-Type": "application/json"
        },
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
        headers: {
          "Content-Type": "application/json"
        },
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
  },

  fnbOfferApi: (
    offerId,
    customerId,
    paymentType,
    paymentId,
    paymentAmount,
    paymentDiscount,
    bookingDate,
    bookingTime,
    bookingQuantity
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/book/fnb/offers`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          offer_id: offerId,
          customer_id: customerId,
          payment_type: paymentType,
          payment_id: paymentId,
          payment_amount: paymentAmount,
          payment_discount: paymentDiscount,
          booking_date: bookingDate,
          booking_time: bookingTime,
          booking_quantity: bookingQuantity
        })
      })
        .then(response => {
          response
            .json()
            .then(fnbOffer => resolve(fnbOffer))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  eventOfferApi: (
    offerId,
    customerId,
    paymentType,
    paymentId,
    paymentAmount,
    bookingItem
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/book/advent/offers`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          offer_id: offerId,
          customer_id: customerId,
          payment_type: paymentType,
          payment_id: paymentId,
          payment_amount: paymentAmount,
          booking_items: bookingItem
        })
      })
        .then(response => {
          response
            .json()
            .then(eventOffer => resolve(eventOffer))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  activityOfferApi: (
    offerId,
    customerId,
    paymentType,
    paymentId,
    paymentAmount,
    bookingDate,
    bookingTime,
    bookingItem
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/book/activity/offers`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          offer_id: offerId,
          customer_id: customerId,
          payment_type: paymentType,
          payment_id: paymentId,
          payment_amount: paymentAmount,
          booking_date: bookingDate,
          booking_time: bookingTime,
          booking_items: bookingItem
        })
      })
        .then(response => {
          response
            .json()
            .then(activityOffer => resolve(activityOffer))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  escapeOfferApi: (
    offerId,
    customerId,
    paymentType,
    paymentId,
    paymentAmount,
    bookingDate,
    bookingTime,
    bookingItem
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/book/escape/offers`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          offer_id: offerId,
          customer_id: customerId,
          payment_type: paymentType,
          payment_id: paymentId,
          payment_amount: paymentAmount,
          booking_date: bookingDate,
          booking_time: bookingTime,
          booking_items: bookingItem
        })
      })
        .then(response => {
          response
            .json()
            .then(escapeOffer => resolve(escapeOffer))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  saloonOfferApi: (
    offerId,
    customerId,
    paymentType,
    paymentId,
    paymentAmount,
    bookingDate,
    bookingTime,
    bookingItem
  ) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/book/sns/offers`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          offer_id: offerId,
          customer_id: customerId,
          payment_type: paymentType,
          payment_id: paymentId,
          payment_amount: paymentAmount,
          booking_date: bookingDate,
          booking_time: bookingTime,
          booking_items: bookingItem
        })
      })
        .then(response => {
          response
            .json()
            .then(saloonOffer => resolve(saloonOffer))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  seoApi: (cityId, categoryId, partnerId) => {
    return new Promise((resolve, reject) => {
      fetch(
        `${host}api/v9/web/seo?city=${cityId}&category=${categoryId}&partner=${partnerId}`
      )
        .then(response => {
          response
            .json()
            .then(seo => resolve(seo))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  getOtpApi: (customerId, type) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/customers/${customerId}/activate/otp?${type}`)
        .then(response => {
          response
            .json()
            .then(getOtp => resolve(getOtp))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },

  postOtpApi: (customerId, otp, type) => {
    return new Promise((resolve, reject) => {
      fetch(`${host}api/v9/web/customers/${customerId}/activate/otp/verify`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          otp: otp,
          type: type
        })
      })
        .then(response => {
          response
            .json()
            .then(postOtp => resolve(postOtp))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  }
};
