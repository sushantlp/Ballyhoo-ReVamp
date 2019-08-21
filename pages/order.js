import React from "react";
import moment from "moment-timezone";

import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";

import OrderComponent from "../components/order";
import Head from "../components/head";
import Header from "../components/header";
import Headout from "../components/headout";
import Footer from "../components/footer";

class Order extends React.Component {
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
      fromDate: moment(),
      toDate: moment(),
      focused: ["startDate", "endDate"]
    };
  }

  onDateChange = (fromDate, toDate) => {
    this.setState({ fromDate, toDate });
  };

  onFocusChange = bool => {
    console.log(bool);
    this.setState({ focused: bool });
  };

  render() {
    return (
      <React.Fragment>
        <Head title="Home" />
        <Header />
        <OrderComponent
          fromDate={this.state.fromDate}
          toDate={this.state.toDate}
          focused={this.state.focused}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
        />
        <Headout />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Order;
