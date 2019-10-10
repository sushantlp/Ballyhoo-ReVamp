import Router from "next/router";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import moment from "moment-timezone";
import fetch from "isomorphic-unfetch";

import { host, EMAIL } from "../constants";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import ProfileComponent from "../components/profile";
import Head from "../components/head";
import Header from "../components/header";
import Headout from "../components/headout";
import Footer from "../components/footer";

import { getCityLocality } from "../actions/city-locality-action";
import { postLogin } from "../actions/login-action";
import { postRegister } from "../actions/register-action";
import { postForget } from "../actions/forget-action";
import { getProfile, putProfile } from "../actions/profile-action";
import { updateCustomerData } from "../actions/customer-data-action";

import "react-notifications/lib/notifications.css";

class Profile extends React.Component {
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
      console.log("Enquiry_Error");
      console.log(err);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      birthday: moment(),
      date: moment(),
      focused: false,
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      gender: "Male"
    };
  }

  componentDidMount() {
    if (parseInt(this.props.customerData.customerData.customer_id, 10) === 0) {
      // NotificationManager.error(
      //   "Login",
      //   "Please login",
      //   3000,
      //   this.enquiryRouteChange()
      // );
    } else {
      this.props.getProfile(this.props.customerData.customerData.customer_id);
    }

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
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.profileData !== nextProps.profileData) {
      let date = moment();
      if (nextProps.profileData.profileData.dob == null)
        date = moment(nextProps.profileData.profileData.dob);
      this.setState({
        date: date,
        firstName: nextProps.profileData.profileData.fname,
        lastName: nextProps.profileData.profileData.lname,
        email: nextProps.profileData.profileData.email,
        mobile: nextProps.profileData.profileData.mobile,
        gender: nextProps.profileData.profileData ? "Male" : "Female"
      });
    } else if (this.props.profileUpdate !== nextProps.profileUpdate) {
    }
  }

  enquiryRouteChange = () => {
    Router.push("/");
  };

  onDateChange = date => {
    this.setState({ date: date, birthday: moment(date).format("YYYY-MM-DD") });
  };

  onFocusChange = bool => {
    this.setState({ focused: bool.focused });
  };

  onChangeFirstName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  onChangeLastName = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  onChangeGender = gender => {
    this.setState({
      gender: gender
    });
  };

  render() {
    return (
      <React.Fragment>
        <Head title="Home" />
        <Header
          postLogin={this.props.postLogin}
          postRegister={this.props.postRegister}
          postForget={this.props.postForget}
        />
        <ProfileComponent
          date={this.state.date}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          mobile={this.state.mobile}
          gender={this.state.gender}
          focused={this.state.focused}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
          onChangeFirstName={this.onChangeFirstName}
          onChangeLastName={this.onChangeLastName}
          onChangeGender={this.onChangeGender}
        />
        <Headout />
        <Footer cityLocality={this.props.cityLocality} />
        <NotificationContainer />
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
    profileData: state.profileData,
    profileUpdate: state.profileUpdate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    postLogin: bindActionCreators(postLogin, dispatch),
    postRegister: bindActionCreators(postRegister, dispatch),
    postForget: bindActionCreators(postForget, dispatch),
    updateCustomerData: bindActionCreators(updateCustomerData, dispatch),
    getProfile: bindActionCreators(getProfile, dispatch),
    putProfile: bindActionCreators(putProfile, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
