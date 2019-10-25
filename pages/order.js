import Router from "next/router";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetch from "isomorphic-unfetch";
import { host } from "../constants";

import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

import OrderComponent from "../components/order";
import Head from "../components/head";
import Header from "../components/header";
import Headout from "../components/headout";
import Footer from "../components/footer";

import { getCityLocality } from "../actions/city-locality-action";
import { postLogin } from "../actions/login-action";
import { postRegister } from "../actions/register-action";
import { postForget } from "../actions/forget-action";

import { getOrderData, getMoreOrderData } from "../actions/order-action";
import { getProfile } from "../actions/profile-action";
import { updateCustomerData } from "../actions/customer-data-action";
import { applicationStatusAction } from "../actions/application-status-action";

import "react-toastify/dist/ReactToastify.css";

class Order extends React.Component {
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
      start_date: moment(),
      end_date: moment().add(1, "day"),
      focused: null,
      orderOpen: false,
      isLoading: false,
      customerId: 0,
      items: [],
      currency: "&#8377;",
      searchButtonLoading: false
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

    sessionStorage.removeItem("RESERVATION");
    sessionStorage.removeItem("SPA_APPOINTMENT");
    sessionStorage.removeItem("SPA_OFFER");
    sessionStorage.removeItem("ACTIVITY_OFFER");
    sessionStorage.removeItem("EVENT_OFFER");
    sessionStorage.removeItem("ESCAPE_OFFER");
    sessionStorage.removeItem("FNB_OFFER");
    sessionStorage.removeItem("WHICH");
    sessionStorage.removeItem("PAYMENT");

    let customer = sessionStorage.getItem("CUSTOMER_DATA");
    customer = JSON.parse(customer);

    if (customer === null) {
      this.errorToast("Please Login !!!", 1, true);
    } else {
      this.setState({
        customerId: customer.customer_id
      });

      const startDate = moment(this.state.start_date).format("YYYY-MM-DD");
      const endDate = moment(this.state.end_date).format("YYYY-MM-DD");
      this.props.getOrderData(customer.customer_id, startDate, endDate, 1);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.orderData !== nextProps.orderData) {
      if (nextProps.orderData.status === "FAIL") {
        this.errorToast(nextProps.orderData.msg, 1, true);
      } else if (
        nextProps.orderData.status === "SUCCESS" &&
        nextProps.orderData.orderData.length === 0
      ) {
        this.successToast("Empty order list !!!");
      }

      this.updateLoading(false);
      this.updateSearchButtonLoading(false);
    }
  }

  onDateChange = date => {
    this.setState({
      start_date: date.startDate,
      end_date: date.endDate
    });
  };

  onFocusedChange = focused => {
    this.setState({
      focused
    });
  };

  updateOrderModel = (bool, item, currency) => {
    this.setState({
      orderOpen: bool,
      items: item,
      currency
    });
  };

  routeChange = url => {
    Router.push(url);
  };

  successToast = msg => {
    toast.success(msg);
  };

  errorToast = (msg, id, autoClose) => {
    toast.error(msg, {
      autoClose: autoClose,
      toastId: id,
      onClose: () => this.routeChange("/")
    });
  };

  updateLoading = bool => {
    this.setState({
      isLoading: bool
    });
  };

  updateSearchButtonLoading = bool => {
    this.setState({
      searchButtonLoading: bool
    });
  };

  newOrder = () => {
    this.updateSearchButtonLoading(true);
    const startDate = moment(this.state.start_date).format("YYYY-MM-DD");
    const endDate = moment(this.state.end_date).format("YYYY-MM-DD");
    this.props.getOrderData(this.state.customerId, startDate, endDate, 1);
  };

  loadMoreOrder = nextPage => {
    this.updateLoading(true);

    const startDate = moment(this.state.start_date).format("YYYY-MM-DD");
    const endDate = moment(this.state.end_date).format("YYYY-MM-DD");

    this.props.getMoreOrderData(
      this.state.customerId,
      startDate,
      endDate,
      nextPage
    );
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
        <OrderComponent
          orderState={this.state}
          onDateChange={this.onDateChange}
          onFocusedChange={this.onFocusedChange}
          updateOrderModel={this.updateOrderModel}
          orderData={this.props.orderData}
          loadMoreOrder={this.loadMoreOrder}
          newOrder={this.newOrder}
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
    profileData: state.profileData,
    orderData: state.orderData
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
    getProfile: bindActionCreators(getProfile, dispatch),
    getOrderData: bindActionCreators(getOrderData, dispatch),
    getMoreOrderData: bindActionCreators(getMoreOrderData, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
