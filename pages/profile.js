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

  componentWillUnmount() {}

  componentDidMount() {
    if (parseInt(this.props.customerData.customerData.customer_id, 10) === 0) {
      toast.error("Please login !", {
        onClose: () => this.routeChange()
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
        console.log(nextProps.profileUpdate);
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
          onClose: () => this.routeChange()
        });
      } else {
        toast.error(`${nextProps.profileUpdate.profile.msg} !`);
      }
    }
  }

  routeChange = () => {
    Router.push("/");
  };

  onDateChange = date => {
    console.log(date);
    this.setState({ date: date, birthday: date });
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
    console.log(this.state.birthday);
    const birthday = moment(this.state.birthday).format("YYYY-MM-DD");
    this.props.putProfile(
      this.props.customerData.customerData.customer_id,
      this.state.firstName,
      this.state.lastName,
      sex,
      birthday
    );
  };

  returnYears = () => {
    let years = [];
    for (let i = moment().year() - 100; i <= moment().year(); i++) {
      years.push(<option value={i}>{i}</option>);
    }
    return years;
  };

  renderMonthElement = ({ month, onMonthSelect, onYearSelect }) => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <select
          value={month.month()}
          onChange={e => onMonthSelect(month, e.target.value)}
        >
          {moment.months().map((label, value) => (
            <option value={value} key={label}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          value={month.year()}
          onChange={e => onYearSelect(month, e.target.value)}
        >
          {this.returnYears()}
        </select>
      </div>
    </div>
  );

  render() {
    return (
      <React.Fragment>
        <ToastContainer autoClose={1000} />
        <Head
          title="Ballyhoo Today"
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
          renderMonthElement={this.renderMonthElement}
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
