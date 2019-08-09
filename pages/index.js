import React from "react";
import Link from "next/link";

import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from "../components/head";
import Header from "../components/header";
import SubHeader from "../components/sub-header";
import Slidder from "../components/slidder";
import Discover from "../components/discover";
import Featured from "../components/featured";
import Trending from "../components/trending";
import FoodBrewery from "../components/food-brewery";
import HowItWork from "../components/how-it-work";
import Banner from "../components/banner";
import Headout from "../components/headout";
import Popular from "../components/popular";
import Footer from "../components/footer";
import styled from "styled-components";

class Index extends React.Component {
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

  componentDidMount() {
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
    // const { stories, page } = this.props;

    // if (stories.length === 0) {
    //   return <Error statusCode={503} />;
    // }

    const Hero = styled.div`
      width: 100%;
      color: #333;
    `;

    const Welcome = styled.h1`
      color: red;
    `;

    return (
      <div>
        <Head title="Home" />
        <Header />
        <SubHeader />
        <Slidder />
        <Banner image="https://img.traveltriangle.com/public-product/mkt/honeymoon+small.jpg?tr=w-1000,h-120px" />
        {/* <Discover />
         <Featured />
        <Popular />
        <Trending />
        <FoodBrewery /> */}
        {/*<HowItWork /> */}
        <Banner image="https://img.traveltriangle.com/public-product/mkt/generic+Large.jpg?tr=w-1000,h-300px" />
        <Headout />
        <Footer />
      </div>
    );
  }
}

export default Index;
