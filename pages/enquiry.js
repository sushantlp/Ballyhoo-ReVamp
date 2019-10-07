import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetch from "isomorphic-unfetch";

import { host } from "../constants";

import EnquiryComponent from "../components/enquiry";
import Head from "../components/head";
import Header from "../components/header";
import Headout from "../components/headout";
import Footer from "../components/footer";

import { getCityLocality } from "../actions/city-locality-action";

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
      enquiryName: "",
      enquiryEmail: "",
      enquiryMobile: "",
      enquiryMobileCode: "+91",
      enquiryOccasion: "Birthday",
      enquiryPartyDate: new Date(),
      enquiryPartyTime: "Lunch",
      enquiryFoodPreference: "Veg",
      enquiryFoodPreferenceAlcohol: "No",
      enquiryGuest: "",
      enquiryCost: "500 - 1000",
      enquiryRequest: "",
      enquiryButton: false,

      enquiryName: {
        flag: false,
        msg: ""
      },

      enquiryEmail: {
        flag: false,
        msg: ""
      },

      enquiryMobile: {
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

  render() {
    return (
      <React.Fragment>
        <Head title="Home" />
        <Header />
        <EnquiryComponent
          enquiryState={this.state}
          enquiryLooking={this.enquiryLooking}
        />
        <Headout />
        <Footer cityLocality={this.props.cityLocality} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityLocality: state.cityLocality
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Enquiry);
