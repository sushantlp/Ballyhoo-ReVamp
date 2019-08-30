import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Link from "next/link";

import fetch from "isomorphic-unfetch";

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
import SlidderBanner from "../components/slidder-banner";
import Banner from "../components/banner";
import Headout from "../components/headout";
import Popular from "../components/popular";
import Footer from "../components/footer";
import styled from "styled-components";

import { getCityLocality } from "../actions/city-locality-action"

class Index extends React.Component {
  static async getInitialProps(ctx) {
    try {
      const { store, isServer, query } = ctx
      const response = await fetch(
        `https://ballyhoo.today/api/v4/web/city/locality`
      );
     
      const json = await response.json(); 
      //  ctx.store.dispatch({ type: 'CITY_LOCALITY', cityLocality: json});
      store.dispatch(getCityLocality(json,"hello"));
    } catch (err) {
      console.log("ERROR")
      console.log(err);
    }

    return {};
  }

  // constructor(props) {
  //   super(props);
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
        <Slidder  cityLocality={this.props.cityLocality}/>
        <SlidderBanner/>
        {/* <Banner image="https://img.traveltriangle.com/public-product/mkt/honeymoon+small.jpg?tr=w-1000,h-120px" /> */}
        <Discover />
        <Featured />
        <Popular />
        <Trending />
        <FoodBrewery />
        {/* <HowItWork /> */}
        <Banner image="https://img.traveltriangle.com/public-product/mkt/generic+Large.jpg?tr=w-1000,h-300px" />
        <Headout />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityLocality: state.cityLocality
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)



