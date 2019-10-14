import moment from "moment-timezone";
import Router from "next/router";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetch from "isomorphic-unfetch";

import { host, EMAIL } from "../constants";

import { ToastContainer, toast } from "react-toastify";

import Spinner from "../components/spinner";
import ExploreComponent from "../components/explore";
import Head from "../components/head";
import Header from "../components/header";
import Headout from "../components/headout";
import Footer from "../components/footer";

import { getCityLocality } from "../actions/city-locality-action";
import { postExploreApi } from "../actions/explore-action";
import { postLogin } from "../actions/login-action";
import { postRegister } from "../actions/register-action";
import { postForget } from "../actions/forget-action";

import { updateCustomerData } from "../actions/customer-data-action";
import { applicationStatusAction } from "../actions/application-status-action";

import "react-toastify/dist/ReactToastify.css";

class Explore extends React.Component {
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
      gate: true,

      exploreName: "",
      exploreEmail: "",
      exploreMobile: "",
      exploreMobileCode: "+91",
      exploreEscapeType: "Incity Escape",
      exploreTourType: "Private",
      exploreTourCoordination: "Yes",
      exploreTourDuration: "",
      exploreTourDate: moment(),
      exploreTourDateApi: moment(),
      exploreAdult: 1,
      exploreChildren: 0,
      explorePet: 0,
      exploreAccomodation: "Basic Amenities",
      exploreCabService: 0,
      exploreDestination: "",
      exploreSightSeeing: 1,

      exploreEmailError: {
        flag: false,
        msg: ""
      },

      exploreNextButton: false
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
    if (this.props.postExplore !== nextProps.postExplore) {
      if (nextProps.postExplore.status === "SUCCESS") {
        console.log("INSIDE");
        this.updateIsLoading();
        toast.success("Successful", {
          onClose: () => this.routeChange()
        });
      } else {
        this.updateIsLoading();
        toast.error(`${nextProps.postExplore.msg} !`);
      }
    }
  }

  routeChange = () => {
    Router.push("/");
  };

  onChangeGate = bool => {
    if (bool) this.setState({ gate: bool });
    else {
      if (!EMAIL.test(this.state.exploreEmail))
        this.updateExploreEmailError(true, "Wrong email");
      else this.setState({ gate: bool });
    }
  };

  onChangeFocused = () => {
    this.setState({
      focused: !this.state.focused
    });
  };

  onChangeDate = date => {
    this.setState({
      exploreTourDate: date,
      exploreTourDateApi: date
    });
  };

  onChangeName = e => {
    if (e.target.value === "")
      this.setState({
        exploreNextButton: false
      });

    this.setState({
      exploreName: e.target.value
    });

    if (
      e.target.value !== "" &&
      this.state.exploreEmail !== "" &&
      this.state.exploreMobile !== ""
    )
      this.setState({
        exploreNextButton: true
      });
  };

  onChangeEmail = e => {
    if (e.target.value === "")
      this.setState({
        exploreNextButton: false
      });

    this.setState({
      exploreEmail: e.target.value
    });

    if (this.state.exploreEmailError.flag)
      this.updateExploreEmailError(false, "");

    if (
      e.target.value !== "" &&
      this.state.exploreName !== "" &&
      this.state.exploreMobile !== ""
    )
      this.setState({
        exploreNextButton: true
      });
  };

  onChangeMobile = e => {
    if (e.target.value === "")
      this.setState({
        exploreNextButton: false
      });

    this.setState({
      exploreMobile: e.target.value
    });

    if (
      e.target.value !== "" &&
      this.state.exploreName !== "" &&
      this.state.exploreEmail !== ""
    )
      this.setState({
        exploreNextButton: true
      });
  };

  onChangeMobileCode = e => {
    this.setState({
      exploreMobileCode: e.target.value
    });
  };

  updateExploreEmailError = (flag, msg) => {
    const obj = {
      flag,
      msg
    };
    this.setState({
      exploreEmailError: obj
    });
  };

  onChangeEscapeType = e => {
    this.setState({
      exploreEscapeType: e.target.value
    });
  };

  onChangeTourType = e => {
    this.setState({
      exploreTourType: e.target.value
    });
  };

  onChangeTourCoordination = e => {
    this.setState({
      exploreTourCoordination: e.target.value === "Yes" ? 1 : 0
    });
  };

  onChangeAdult = e => {
    this.setState({
      exploreAdult: e.target.value
    });
  };

  onChangeChildren = e => {
    this.setState({
      exploreChildren: e.target.value
    });
  };

  onChangePet = e => {
    this.setState({
      explorePet: e.target.value
    });
  };

  onChangeTourDuration = e => {
    this.setState({
      exploreTourDuration: e.target.value
    });
  };

  onChangeAccomodation = e => {
    this.setState({
      exploreAccomodation: e.target.value
    });
  };

  onChangeCabService = e => {
    this.setState({
      exploreCabService: e.target.value === "Yes-Cab" ? 1 : 0
    });
  };

  onChangeDestination = e => {
    this.setState({
      exploreDestination: e.target.value
    });
  };

  onChangeSightSeeing = e => {
    this.setState({
      exploreSightSeeing: e.target.value === "Yes" ? 1 : 0
    });
  };

  updateIsLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  };

  onClickExploreButton = () => {
    this.updateIsLoading();

    const mobileCode = this.state.exploreMobileCode.slice(1);
    const mobile = `${mobileCode}${this.state.exploreMobile}`;
    const coordinator = this.state.exploreTourCoordination === "Yes" ? 1 : 0;
    const date = moment(this.state.exploreTourDateApi).format("YYYY-MM-DD");

    this.props.postExploreApi(
      this.state.exploreName,
      mobile,
      this.state.exploreEmail,
      this.state.exploreEscapeType,
      this.state.exploreTourType,
      coordinator,
      this.state.exploreTourDuration,
      date,
      this.state.exploreAdult,
      this.state.exploreChildren,
      this.state.explorePet,
      this.state.exploreAccomodation,
      this.state.exploreCabService,
      this.state.exploreDestination,
      this.state.exploreSightSeeing
    );
  };

  render() {
    if (this.state.isLoading)
      return (
        <React.Fragment>
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
          />
          <Spinner />

          <Headout />
          <Footer cityLocality={this.props.cityLocality} />
        </React.Fragment>
      );

    return (
      <React.Fragment>
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
          updateCustomerData={this.props.updateCustomerData}
          customerData={this.props.customerData}
          applicationStatus={this.props.applicationStatus}
          applicationStatusAction={this.props.applicationStatusAction}
        />
        <ExploreComponent
          exploreState={this.state}
          onChangeGate={this.onChangeGate}
          onChangeFocused={this.onChangeFocused}
          onChangeName={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          onChangeMobile={this.onChangeMobile}
          onChangeMobileCode={this.onChangeMobileCode}
          onChangeEscapeType={this.onChangeEscapeType}
          onChangeTourType={this.onChangeTourType}
          onChangeTourCoordination={this.onChangeTourCoordination}
          onChangeAdult={this.onChangeAdult}
          onChangeChildren={this.onChangeChildren}
          onChangePet={this.onChangePet}
          onChangeTourDuration={this.onChangeTourDuration}
          onChangeAccomodation={this.onChangeAccomodation}
          onChangeCabService={this.onChangeCabService}
          onChangeDestination={this.onChangeDestination}
          onChangeSightSeeing={this.onChangeSightSeeing}
          onClickExploreButton={this.onClickExploreButton}
          onChangeDate={this.onChangeDate}
        />
        <Headout />
        <ToastContainer autoClose={3000} />
        <Footer cityLocality={this.props.cityLocality} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityLocality: state.cityLocality,
    postExplore: state.postExplore,
    login: state.login,
    register: state.register,
    forget: state.forget,
    customerData: state.customerData,
    applicationStatus: state.applicationStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    postExploreApi: bindActionCreators(postExploreApi, dispatch),
    postLogin: bindActionCreators(postLogin, dispatch),
    postRegister: bindActionCreators(postRegister, dispatch),
    postForget: bindActionCreators(postForget, dispatch),
    updateCustomerData: bindActionCreators(updateCustomerData, dispatch),
    applicationStatusAction: bindActionCreators(
      applicationStatusAction,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
