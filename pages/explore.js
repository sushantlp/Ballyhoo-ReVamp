import moment from "moment-timezone";
import Router from "next/router";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetch from "isomorphic-unfetch";

import { host, EMAIL } from "../constants";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

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
      exploreTourDateApi: moment().format("YYYY-MM-DD"),
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
    if (
      this.props.postExplore !== nextProps.postExplore &&
      nextProps.postExplore.status === "SUCCESS"
    ) {
      this.updateIsLoading();
      NotificationManager.success(
        "Successful",
        nextProps.postExplore.postExplore.msg,
        300,
        this.enquiryRouteChange()
      );
    } else if (
      this.props.postExplore !== nextProps.postExplore &&
      nextProps.postExplore.status === "FAIL"
    ) {
      this.updateIsLoading();
      NotificationManager.error("Error", nextProps.postExplore.postExplore.msg);
    }
  }

  enquiryRouteChange = () => {
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
      exploreTourDateApi: moment(date).format("YYYY-MM-DD")
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
    console.log(e.target.value);
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

    this.props.postExploreApi(
      this.state.exploreName,
      mobile,
      this.state.exploreEmail,
      this.state.exploreEscapeType,
      this.state.exploreTourType,
      coordinator,
      this.state.exploreTourDuration,
      this.state.exploreTourDateApi,
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
          />
          <Spinner />

          <Headout />
          <Footer cityLocality={this.props.cityLocality} />
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <Header
          postLogin={this.props.postLogin}
          postRegister={this.props.postRegister}
          postForget={this.props.postForget}
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
        <NotificationContainer />
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
    forget: state.forget
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    postExploreApi: bindActionCreators(postExploreApi, dispatch),
    postLogin: bindActionCreators(postLogin, dispatch),
    postRegister: bindActionCreators(postRegister, dispatch),
    postForget: bindActionCreators(postForget, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
