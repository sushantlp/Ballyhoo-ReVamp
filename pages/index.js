import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Discover from "../components/discover";
import Featured from "../components/featured";
import Trending from "../components/trending";
import FoodBrewery from "../components/food_brewery";
import HowItWork from "../components/how_it_work";
import Banner from "../components/banner";
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
        <Nav />
        <Banner />
        <Discover />
        <Featured />
        {/* <Trending /> */}
        <FoodBrewery />
        <HowItWork />
        <Footer />
      </div>
    );
  }
}

export default Index;
