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

import { postFnbReservation } from "../actions/fnb-reservation-action";

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
      which : {},
      customer : {},
      fnb_reservation: {},
      fnb_offer : {},
      spa_appointment: {},
      spa_offer: {},
      activity_offer: {},
      event_offer: {},
      escape_offer: {}
    }
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

    let customer = sessionStorage.getItem("CUSTOMER_DATA");
    customer = JSON.parse(customer);

    this.setState({
      customer : customer
    })

    let which = sessionStorage.getItem("WHICH");
    which = JSON.parse(which);
    
    this.setState({
      which : which
    })

   

    spa_appointment: {},
    spa_offer: {},
    activity_offer: {},
    event_offer: {},
    escape_offer: {}
    
    if (parseInt(which.fnb_reservation,10) === 1) {
      let obj = sessionStorage.getItem("RESERVATION");
      obj = JSON.parse(obj);
      this.setState({
        fnb_reservation : obj
      })
    } else if (parseInt(which.fnb_offer,10) === 1) {
      let obj = sessionStorage.getItem("FNB_OFFER");
      obj = JSON.parse(obj);
      this.setState({
        fnb_offer : obj
      })
    }

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.fnbReservation !== nextProps.fnbReservation) {
      if (nextProps.fnbReservation.status === "SUCCESS") {
      } else {
        this.props.errorToast(nextProps.fnbReservation.msg, 1, true);
      }
    }
  }

  successToast = msg => {
    return toast.success(msg);
  };

  errorToast = (msg, id, autoClose) => {
    toast.error(msg, {
      autoClose: autoClose,
      toastId: id
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
        <CheckoutComponent postFnbReservation={this.props.postFnbReservation} />
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
    profileData: state.profileData
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
    getProfile: bindActionCreators(getProfile, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
