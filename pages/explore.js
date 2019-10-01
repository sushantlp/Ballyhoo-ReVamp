import React from "react";
// import "bulma/css/bulma.min.css";
// import "semantic-ui-css/semantic.min.css";
import ExploreComponent from "../components/explore";
import Head from "../components/head";
import Header from "../components/header";
import Headout from "../components/headout";
import Footer from "../components/footer";

class Explore extends React.Component {
  // static async getInitialProps({ req, res, query }) {
  //   let stories;
  //   let page;

  //   try {
  //     page = Number(query.page) || 1;
  //     const response = await fetch(
  //       `https://node-hnapi.herokuapp.com/news?page=${page}`
  //     );
  //     stories = await response.json();
  //   } catch (err) {
  //     console.log(err);
  //     stories = [];
  //   }

  //   return { page, stories };
  // }

  constructor(props) {
    super(props);
    this.state = {
      gate: true
    };
  }

  changeGate = bool => {
    this.setState({ gate: bool });
  };

  render() {
    return (
      <React.Fragment>
        <Head title="Home" />
        <Header />
        <ExploreComponent gate={this.state.gate} changeGate={this.changeGate} />
        <Headout />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Explore;
