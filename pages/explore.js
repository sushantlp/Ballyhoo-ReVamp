import moment from "moment-timezone";
import Router from "next/router";
import ReactDOM from "react-dom";

import fetch from "isomorphic-unfetch";

import { host, EMAIL } from "../constants";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

import ExploreComponent from "../components/explore";
import Head from "../components/head";
import Header from "../components/header";
import Headout from "../components/headout";
import Footer from "../components/footer";

class Explore extends React.Component {
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
      exploreEscapeType: "",
      exploreTourType: "",
      exploreTourCoordination: "",
      exploreTourDuration: "",
      exploreTourDate: moment(),
      exploreTourDateApi: moment(),
      exploreAdult: 1,
      exploreChildren: 0,
      explorePet: 0,
      exploreAccomodation: "",
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

  onChangeGate = bool => {
    this.setState({ gate: bool });
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

  render() {
    return (
      <React.Fragment>
        <Head title="Home" />
        <Header />
        <ExploreComponent
          exploreState={this.state}
          onChangeGate={this.onChangeGate}
          onChangeFocused={this.onChangeFocused}
          onChangeName={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          onChangeMobile={this.onChangeMobile}
          onChangeMobileCode={this.onChangeMobileCode}
        />
        <Headout />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Explore;
