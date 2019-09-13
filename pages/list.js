import React from "react";
import Link from "next/link";

import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from "../components/head";
import Header from "../components/header";
import SubHeader from "../components/sub-header";
import ParentList from "../components/parent-list";
import Headout from "../components/headout";
import Footer from "../components/footer";

class List extends React.Component {
  static async getInitialProps(ctx) {

 
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <Header />
        <ParentList />
        <Headout />
        <Footer />
      </div>
    );
  }
}

export default List;
