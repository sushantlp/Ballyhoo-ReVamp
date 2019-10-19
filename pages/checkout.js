import Router from "next/router";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetch from "isomorphic-unfetch";

import { host } from "../constants";

import { ToastContainer, toast } from "react-toastify";

import CheckoutComponent from "../components/checkout";
import Head from "../components/head";
import Header from "../components/header";
import Headout from "../components/headout";
import Footer from "../components/footer";

import { getCityLocality } from "../actions/city-locality-action";
import { postLogin } from "../actions/login-action";
import { postRegister } from "../actions/register-action";
import { postForget } from "../actions/forget-action";

import { getProfile } from "../actions/profile-action";
import { updateCustomerData } from "../actions/customer-data-action";
import { applicationStatusAction } from "../actions/application-status-action";

import { paymentOption } from "../actions/payment-option-action";

import { postFnbReservation } from "../actions/fnb-reservation-action";
import { postFnbOffer } from "../actions/fnb-offer-action";

import "react-toastify/dist/ReactToastify.css";

class Checkout extends React.Component {
  static async getInitialProps(ctx) {
    try {
      const { store, isServer } = ctx;

      if (isServer) {
        // City Locality API
        let cityLocalityJson = await fetch(`${host}api/v9/web/city-list`);
        cityLocalityJson = await cityLocalityJson.json();
        store.dispatch(getCityLocality(cityLocalityJson));
      }
    } catch (err) {
      console.log("Faq_Error");
      console.log(err);
    }

    return {};
  }

  constructor(props) {
    super(props);
    this.state = {
      which: [],
      customer: [],
      fnb_reservation: [],
      fnb_offer: [],
      spa_appointment: [],
      spa_offer: [],
      activity_offer: [],
      event_offer: [],
      escape_offer: [],
      isLoading: false,
      checkoutButtonBlock: false,
      payment: [],
      payment_option: ""
    };
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful", registration);
        })
        .catch(err => {
          console.warn("service worker registration failed", err.message);
        });
    }

    // let payment = sessionStorage.getItem("PAYMENT");
    // payment = JSON.parse(payment);

    // this.setState({
    //   payment: payment
    // });

    let which = sessionStorage.getItem("WHICH");
    which = JSON.parse(which);

    if (which === null) this.routeChange("/");

    this.setState({
      which: which
    });

    let customer = sessionStorage.getItem("CUSTOMER_DATA");
    customer = JSON.parse(customer);

    this.setState({
      customer: customer
    });

    if (parseInt(which.fnb_reservation, 10) === 1) {
      let obj = sessionStorage.getItem("RESERVATION");
      obj = JSON.parse(obj);
      this.setState({
        fnb_reservation: obj
      });
    } else if (parseInt(which.fnb_offer, 10) === 1) {
      let obj = sessionStorage.getItem("FNB_OFFER");
      obj = JSON.parse(obj);
      this.setState({
        fnb_offer: obj
      });

      this.props.paymentOption(obj.partner_id);
    } else if (parseInt(which.spa_appointment, 10) === 1) {
      let obj = sessionStorage.getItem("SPA_APPOINTMENT");
      obj = JSON.parse(obj);
      this.setState({
        spa_appointment: obj
      });
    } else if (parseInt(which.spa_offer, 10) === 1) {
      let obj = sessionStorage.getItem("SPA_OFFER");
      obj = JSON.parse(obj);
      this.setState({
        spa_offer: obj
      });
    } else if (parseInt(which.activity_offer, 10) === 1) {
      let obj = sessionStorage.getItem("ACTIVITY_OFFER");
      obj = JSON.parse(obj);
      this.setState({
        activity_offer: obj
      });
    } else if (parseInt(which.event_offer, 10) === 1) {
      let obj = sessionStorage.getItem("EVENT_OFFER");
      obj = JSON.parse(obj);
      this.setState({
        event_offer: obj
      });
    } else if (parseInt(which.escape_offer, 10) === 1) {
      let obj = sessionStorage.getItem("ESCAPE_OFFER");
      obj = JSON.parse(obj);
      this.setState({
        escape_offer: obj
      });
    } else {
      this.routeChange("/");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.fnbReservation !== nextProps.fnbReservation) {
      if (nextProps.fnbReservation.status === "SUCCESS") {
        // this.removeAllOfferSessionData();
        this.successToast(nextProps.fnbReservation.msg);
      } else {
        this.setState({
          isLoading: false
        });
        this.errorToast(nextProps.fnbReservation.msg, 1, true);
      }
    } else if (this.props.fnbOffer !== nextProps.fnbOffer) {
      if (nextProps.fnbOffer.status === "SUCCESS") {
        // this.removeAllOfferSessionData();
        this.successToast(nextProps.fnbOffer.msg);
      } else {
        this.setState({
          isLoading: false
        });
        this.errorToast(nextProps.fnbOffer.msg, 2, true);
      }
    } else if (this.props.payment !== nextProps.payment) {
      if (nextProps.payment.status === "FAIL") {
        this.setState({
          checkoutButtonBlock: true
        });
        this.errorToast(nextProps.payment.msg, 3, true);
      } else {
        console.log(nextProps.payment.payment);
        sessionStorage.setItem(
          "PAYMENT",
          JSON.stringify(nextProps.payment.payment)
        );

        this.setState({
          payment: nextProps.payment.payment
        });
      }
    }
  }

  // removeAllOfferSessionData = () => {
  //   sessionStorage.removeItem("WHICH");
  //   sessionStorage.removeItem("FNB_OFFER");
  //   sessionStorage.removeItem("FNB_OFFER");
  //   sessionStorage.removeItem("RESERVATION");
  //   sessionStorage.removeItem("SPA_APPOINTMENT");
  //   sessionStorage.removeItem("SPA_OFFER");
  //   sessionStorage.removeItem("ACTIVITY_OFFER");
  //   sessionStorage.removeItem("EVENT_OFFER");
  //   sessionStorage.removeItem("ESCAPE_OFFER");
  //   sessionStorage.removeItem("PAYMENT");
  // };

  routeChange = url => {
    Router.push(url);
  };

  successToast = msg => {
    return toast.success(msg, {
      onClose: () => this.routeChange("/")
    });
  };

  errorToast = (msg, id, autoClose) => {
    toast.error(msg, {
      autoClose: autoClose,
      toastId: id
    });
  };

  onClickCheckoutButton = () => {
    this.setState({
      isLoading: true
    });

    if (this.state.which.fnb_reservation === 1) {
      const dateSplit = this.state.fnb_reservation.time.split(" ");
      this.props.postFnbReservation(
        this.state.fnb_reservation.partner_id,
        this.state.fnb_reservation.customer_id,
        this.state.fnb_reservation.date,
        dateSplit[0],
        this.state.fnb_reservation.quantity
      );
    } else if (this.state.which.fnb_offer === 1) {
      const dateSplit = this.state.fnb_offer.time.split(" ");

      if (this.state.fnb_offer.event) {
        this.props.postFnbOffer(
          this.state.fnb_offer.offer_id,
          this.state.fnb_offer.customer_id,
          1,
          null,
          this.state.fnb_offer.payment_amount,
          this.state.fnb_offer.payment_discount,
          this.state.fnb_offer.date,
          dateSplit[0],
          this.state.fnb_offer.quantity
        );
      } else {
        if (this.state.payment_option === "") {
          this.setState({
            isLoading: false
          });

          this.errorToast(
            "Please select payment option",
            this.state.fnb_offer.offer_id,
            true
          );
        } else if (this.state.payment_option === "venue") {
          const dateSplit = this.state.fnb_offer.time.split(" ");

          this.props.postFnbOffer(
            this.state.fnb_offer.offer_id,
            this.state.fnb_offer.customer_id,
            1,
            null,
            this.state.fnb_offer.payment_amount,
            this.state.fnb_offer.payment_discount,
            this.state.fnb_offer.date,
            dateSplit[0],
            this.state.fnb_offer.quantity
          );
        } else if (this.state.payment_option === "online") {
          const amount = this.state.fnb_offer.payment_amount * 100;
          this.invokeRazorPay(
            this.state.fnb_offer.customer_email,
            this.state.fnb_offer.customer_mobile,
            amount,
            this.state.fnb_offer.name,
            this.onlineFnbOffer
          );
        }
      }
    }
  };

  onlineFnbOffer = (paymentId, bool) => {
    if (bool) {
      const dateSplit = this.state.fnb_offer.time.split(" ");

      this.props.postFnbOffer(
        this.state.fnb_offer.offer_id,
        this.state.fnb_offer.customer_id,
        2,
        paymentId,
        this.state.fnb_offer.payment_amount,
        this.state.fnb_offer.payment_discount,
        this.state.fnb_offer.date,
        dateSplit[0],
        this.state.fnb_offer.quantity
      );
    } else {
      this.setState({
        isLoading: false
      });
    }
  };

  invokeRazorPay = (email, mobile, amount, name, callBackApi) => {
    const options = {
      key: this.state.payment.online_payment.razorpay_key,
      amount: amount, // 2000 paise = INR 20
      name: name,
      description: "Booking",
      image:
        "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_50/v1539007601/ballyhoo/EMAIL/ballyhoo_black.png",
      handler: function(response) {
        callBackApi(response.razorpay_payment_id, true);
      },
      modal: {
        ondismiss: function() {
          callBackApi(undefined, false);
        }
      },
      prefill: {
        // name: userName,
        email: email,
        contact: mobile
      },
      notes: {
        address: ""
      },
      theme: {
        color: "#ff3860"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  onChangePayment = e => {
    console.log(e.target.value);
    this.setState({
      payment_option: e.target.value
    });
  };
  render() {
    return (
      <React.Fragment>
        <ToastContainer pauseOnHover />
        <Head
          title="Ballyhoo Today - Discover Eat Trend Escape. Explore and Book your Events, activities, Nightlife, curated holiday packages and much more"
          ogImage="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1200/v1539670597/ballyhoo/BALLYHOO_WEBSITE/1440x600finalpge.jpg"
          url="https://ballyhoo.today"
          description="Ballyhoo Today is a recommendation app to help you discover curated premium Urban Experiences in your city.\n We understand that you like to explore best of the best hence, we have sorted only the popular ones to choose from - \n Travel & Leisure, Events, Activities, Restaurants, Gastropub, Breweries, Nightlife Club Parties, Spa and much more."
          keyword="Things to do, Day out, Food and drinks near me, Happy Hours near me, Best buffet, Octoberfest, Book India packages, top 10 luxury destinations, Cocktail bar, Microbrewery, Trending Club night parties, Best Bollywood Parties, best beach resort, Rejuvenate, Spa near me, Spa packages, Tourist attraction, Best bar, Unlimited Food & Drinks offers, Upcoming events, Comedy show, Standup comedy, Live gigs, Ladies night parties, Karaoke night, Best DJ night parties, Weekend getaway, Team Outing, Group packages"
        />
        <Header
          postLogin={this.props.postLogin}
          postRegister={this.props.postRegister}
          postForget={this.props.postForget}
          login={this.props.login}
          register={this.props.register}
          forget={this.props.forget}
          updateCustomerData={this.props.updateCustomerData}
          customerData={this.props.customerData}
          applicationStatus={this.props.applicationStatus}
          applicationStatusAction={this.props.applicationStatusAction}
          getProfile={this.props.getProfile}
          profileData={this.props.profileData}
        />
        <CheckoutComponent
          postFnbReservation={this.props.postFnbReservation}
          parentState={this.state}
          onClickCheckoutButton={this.onClickCheckoutButton}
          payment={this.props.payment}
          onChangePayment={this.onChangePayment}
        />
        <Headout />
        <Footer cityLocality={this.props.cityLocality} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityLocality: state.cityLocality,
    login: state.login,
    register: state.register,
    forget: state.forget,
    customerData: state.customerData,
    applicationStatus: state.applicationStatus,
    fnbReservation: state.fnbReservation,
    fnbOffer: state.fnbOffer,
    profileData: state.profileData,
    payment: state.payment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    postLogin: bindActionCreators(postLogin, dispatch),
    postRegister: bindActionCreators(postRegister, dispatch),
    postForget: bindActionCreators(postForget, dispatch),
    updateCustomerData: bindActionCreators(updateCustomerData, dispatch),
    applicationStatusAction: bindActionCreators(
      applicationStatusAction,
      dispatch
    ),
    postFnbReservation: bindActionCreators(postFnbReservation, dispatch),
    getProfile: bindActionCreators(getProfile, dispatch),
    postFnbOffer: bindActionCreators(postFnbOffer, dispatch),
    paymentOption: bindActionCreators(paymentOption, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
