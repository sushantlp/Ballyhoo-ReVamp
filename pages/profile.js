import Router from "next/router";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import moment from "moment-timezone";
import fetch from "isomorphic-unfetch";

import { host } from "../constants";

import { ToastContainer, toast } from "react-toastify";

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

import "react-toastify/dist/ReactToastify.css";

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
      gender: "Male",
      loyality: 0,
      isLoading: false
    };
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidMount() {
    if (parseInt(this.props.customerData.customerData.customer_id, 10) === 0) {
      toast.error("Please login !", {
        onClose: () => this.enquiryRouteChange()
      });
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
      if (nextProps.profileData.status === "SUCCESS") {
        let date = moment();
        if (nextProps.profileData.profile.dob !== null)
          date = moment(nextProps.profileData.profile.dob);
        this.setState({
          date: date,
          firstName:
            nextProps.profileData.profile.fname === null
              ? ""
              : nextProps.profileData.profile.fname,
          lastName:
            nextProps.profileData.profile.lname === null
              ? ""
              : nextProps.profileData.profile.lname,
          email:
            nextProps.profileData.profile.email === null
              ? ""
              : nextProps.profileData.profile.email,
          mobile:
            nextProps.profileData.profile.mobile === null
              ? ""
              : nextProps.profileData.profile.mobile,
          gender:
            parseInt(nextProps.profileData.profile.sex, 10) === 1
              ? "Male"
              : "Female",
          loyality: nextProps.profileData.profile.loyalty_points
        });

        const customerData = {
          customer_id: this.props.customerData.customerData.customer_id,
          first_name: nextProps.profileData.profile.fname,
          last_name: nextProps.profileData.profile.lname,
          email: nextProps.profileData.profile.email,
          mobile: nextProps.profileData.profile.mobile,
          gender: nextProps.profileData.profile ? "Male" : "Female",
          birthday: this.props.customerData.customerData.birthday,
          mobile_active: this.props.customerData.customerData.mobile_active,
          email_active: this.props.customerData.customerData.email_active,
          loyality: nextProps.profileData.loyalty_points
        };

        this.props.updateCustomerData(customerData);
      } else {
        toast.error(`${nextProps.profileData.profile.msg} !`);
      }
    } else if (this.props.profileUpdate !== nextProps.profileUpdate) {
      this.setState({
        isLoading: false
      });

      if (nextProps.profileUpdate.status === "SUCCESS") {
        const customerData = {
          customer_id: this.props.customerData.customerData.customer_id,
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          email: this.props.customerData.customerData.email,
          mobile: this.props.customerData.customerData.mobile,
          gender: this.state.gender === "Male" ? 1 : 2,
          birthday: this.state.birthday,
          mobile_active: this.props.customerData.customerData.mobile_active,
          email_active: this.props.customerData.customerData.email_active,
          loyality: this.props.customerData.customerData.loyality
        };
        this.props.updateCustomerData(customerData);

        toast.success("Profile update successful", {
          onClose: () => this.enquiryRouteChange()
        });
      } else {
        toast.error(`${nextProps.profileUpdate.profile.msg} !`);
      }
    }
  }

  enquiryRouteChange = () => {
    Router.push("/");
  };

  onDateChange = date => {
    this.setState({ date: date, birthday: moment(date) });
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

  onClickProfileButton = () => {
    this.setState({
      isLoading: true
    });
    const sex = this.state.gender === "Male" ? 1 : 2;
    const birthday = moment(this.state.birthday).format("YYYY-MM-DD");
    this.props.putProfile(
      this.props.customerData.customerData.customer_id,
      this.state.firstName,
      this.state.lastName,
      sex,
      birthday
    );
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
          isLoading={this.state.isLoading}
          date={this.state.date}
          loyality={this.state.loyality}
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
          onClickProfileButton={this.onClickProfileButton}
        />
        <Headout />
        <Footer cityLocality={this.props.cityLocality} />

        <ToastContainer autoClose={3000} />
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
