import React from "react";

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
  }

  render() {
    return (
      <React.Fragment>
        <Head title="Home" />
        <Header />
        <OrderComponent />
        <Headout />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Order;
