import moment from "moment-timezone";
import Router from "next/router";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetch from "isomorphic-unfetch";

import { host, EMAIL } from "../constants";

import { ToastContainer, toast } from "react-toastify";

import Spinner from "../components/spinner";
import EnquiryComponent from "../components/enquiry";
import Head from "../components/head";
import Header from "../components/header";
import Headout from "../components/headout";
import Footer from "../components/footer";

import { getCityLocality } from "../actions/city-locality-action";
import { postEnquiryApi } from "../actions/enquiry-action";

import { postLogin } from "../actions/login-action";
import { postRegister } from "../actions/register-action";
import { postForget } from "../actions/forget-action";

import "react-toastify/dist/ReactToastify.css";

class Enquiry extends React.Component {
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
      isLoading: false,
      focused: false,
      enquiryName: "",
      enquiryEmail: "",
      enquiryMobile: "",
      enquiryMobileCode: "+91",
      enquiryOccasion: "Birthday",
      enquiryPartyDate: moment(),
      enquiryApiPartyDate: moment(),
      enquiryPartyTime: "Lunch",
      enquiryFoodPreference: "Veg",
      enquiryFoodPreferenceAlcohol: 0,
      enquiryGuest: 1,
      enquiryCost: "500-1000",
      enquiryRequest: "",
      enquiryButton: false,

      enquiryEmailError: {
        flag: false,
        msg: ""
      }
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
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    ReactDOM.findDOMNode(this).scrollIntoView();
    if (this.props.postEnquiry !== nextProps.postEnquiry) {
      if (nextProps.postEnquiry.status === "SUCCESS") {
        this.updateIsLoading();

        toast.success(nextProps.postEnquiry.msg, {
          onClose: () => this.routeChange()
        });
      } else {
        this.updateIsLoading();
        toast.error(`${nextProps.postEnquiry.msg} !`);
      }
    }
  }

  routeChange = () => {
    Router.push("/");
  };

  onChangeFocused = () => {
    this.setState({
      focused: !this.state.focused
    });
  };

  onChangeName = e => {
    if (e.target.value === "")
      this.setState({
        enquiryButton: false
      });

    this.setState({
      enquiryName: e.target.value
    });

    if (
      e.target.value !== "" &&
      this.state.enquiryEmail !== "" &&
      this.state.enquiryMobile !== "" &&
      this.state.enquiryGuest !== ""
    )
      this.setState({
        enquiryButton: true
      });
  };

  onChangeEmail = e => {
    if (e.target.value === "")
      this.setState({
        enquiryButton: false
      });

    this.setState({
      enquiryEmail: e.target.value
    });

    if (this.state.enquiryEmailError.flag)
      this.updateEnquiryEmailError(false, "");

    if (
      e.target.value !== "" &&
      this.state.enquiryName !== "" &&
      this.state.enquiryMobile !== "" &&
      this.state.enquiryGuest !== ""
    )
      this.setState({
        enquiryButton: true
      });
  };

  onChangeMobile = e => {
    if (e.target.value === "")
      this.setState({
        enquiryButton: false
      });

    this.setState({
      enquiryMobile: e.target.value
    });

    if (
      e.target.value !== "" &&
      this.state.enquiryName !== "" &&
      this.state.enquiryEmail !== "" &&
      this.state.enquiryGuest !== ""
    )
      this.setState({
        enquiryButton: true
      });
  };

  onChangeMobileCode = e => {
    this.setState({
      enquiryMobileCode: e.target.value
    });
  };

  onChangeOccasion = e => {
    this.setState({
      enquiryOccasion: e.target.value
    });
  };

  onChangePartyDate = date => {
    this.setState({
      enquiryPartyDate: date,
      enquiryApiPartyDate: date
    });
  };

  onChangePartyTime = e => {
    this.setState({
      enquiryPartyTime: e.target.value
    });
  };

  onChangeFoodPreference = e => {
    this.setState({
      enquiryFoodPreference: e.target.value
    });
  };

  onChangeGuest = e => {
    if (e.target.value === "")
      this.setState({
        enquiryButton: false
      });

    this.setState({
      enquiryGuest: e.target.value
    });

    if (
      e.target.value !== "" &&
      this.state.enquiryName !== "" &&
      this.state.enquiryEmail !== "" &&
      this.state.enquiryMobile !== ""
    )
      this.setState({
        enquiryButton: true
      });
  };

  onChangeCost = e => {
    this.setState({
      enquiryCost: e.target.value
    });
  };

  onChangeRequest = e => {
    this.setState({
      enquiryRequest: e.target.value
    });
  };

  enquiryFoodPreferenceAlcohol = e => {
    const bool = document.getElementById("Alcohol").checked;
    this.setState({
      enquiryFoodPreferenceAlcohol: bool ? 1 : 0
    });
  };

  onChangeAgree = e => {
    const bool = document.getElementById("Agree").checked;

    if (!bool) {
      this.setState({
        enquiryButton: false
      });
    } else {
      if (!this.state.enquiryButton) {
        this.setState({
          enquiryButton: true
        });
      }
    }
  };

  updateEnquiryEmailError = (flag, msg) => {
    const obj = {
      flag,
      msg
    };
    this.setState({
      enquiryEmailError: obj
    });
  };

  updateIsLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  };

  onClickEnquiryButton = () => {
    if (!EMAIL.test(this.state.enquiryEmail))
      this.updateEnquiryEmailError(true, "Wrong email");

    this.updateIsLoading();

    const mobileCode = this.state.enquiryMobileCode.slice(1);
    const mobile = `${mobileCode}${this.state.enquiryMobile}`;
    const date = moment(this.state.enquiryApiPartyDate).format("YYYY-MM-DD");

    this.props.postEnquiryApi(
      this.state.enquiryName,
      mobile,
      this.state.enquiryEmail,
      this.state.enquiryOccasion,
      date,
      this.state.enquiryPartyTime,
      this.state.enquiryFoodPreference,
      this.state.enquiryFoodPreferenceAlcohol,
      this.state.enquiryGuest,
      this.state.enquiryCost,
      this.state.enquiryRequest
    );
  };

  render() {
    // if (this.state.isLoading)
    //   return (
    //     <React.Fragment>
    //       <Header
    //         postLogin={this.props.postLogin}
    //         postRegister={this.props.postRegister}
    //         postForget={this.props.postForget}
    //         login={this.props.login}
    //         register={this.props.register}
    //         forget={this.props.forget}
    //       />
    //       <Spinner />

    //       <Headout />
    //       <Footer cityLocality={this.props.cityLocality} />
    //     </React.Fragment>
    //   );

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
        />
        <EnquiryComponent
          enquiryState={this.state}
          onChangeName={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          onChangeMobile={this.onChangeMobile}
          onChangeMobileCode={this.onChangeMobileCode}
          onChangeOccasion={this.onChangeOccasion}
          onChangePartyDate={this.onChangePartyDate}
          onChangePartyTime={this.onChangePartyTime}
          onChangeFoodPreference={this.onChangeFoodPreference}
          enquiryFoodPreferenceAlcohol={this.enquiryFoodPreferenceAlcohol}
          onChangeGuest={this.onChangeGuest}
          onChangeCost={this.onChangeCost}
          onChangeRequest={this.onChangeRequest}
          onChangeAgree={this.onChangeAgree}
          onChangeFocused={this.onChangeFocused}
          onClickEnquiryButton={this.onClickEnquiryButton}
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
    postEnquiry: state.postEnquiry,
    login: state.login,
    register: state.register,
    forget: state.forget
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    postEnquiryApi: bindActionCreators(postEnquiryApi, dispatch),
    postLogin: bindActionCreators(postLogin, dispatch),
    postRegister: bindActionCreators(postRegister, dispatch),
    postForget: bindActionCreators(postForget, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Enquiry);
