import React from "react";
import Router from "next/router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetch from "isomorphic-unfetch";

import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { host } from "../constants";

import Head from "../components/head";
import Header from "../components/header";
import SubHeader from "../components/sub-header";
import Slidder from "../components/slidder";
import Discover from "../components/discover";
import Featured from "../components/featured";
import Popular from "../components/popular";
import Collection from "../components/collection";
import Trending from "../components/trending";
import SlidderBanner from "../components/slidder-banner";
import Banner from "../components/banner";
import Headout from "../components/headout";
import Footer from "../components/footer";
import styled from "styled-components";

import { getCityLocality } from "../actions/city-locality-action";
import { getCategoryDataApi } from "../actions/category-data-action";
import { getHomeScreen, getHomeScreenApi } from "../actions/home-screen-action";

class Index extends React.Component {
  static async getInitialProps(ctx) {
    let cityLocalityJson = [];
    let homeScreenJson = [];
    try {
      const { store, isServer, req, query } = ctx;

      let cityId = 1;

      if (isServer) {
        if (
          req.hasOwnProperty("params") &&
          req.params.hasOwnProperty("city_id") &&
          req.params !== undefined
        )
          cityId = req.params.city_id;
      } else {
        if (query.hasOwnProperty("city_id") && query.city_id !== undefined)
          cityId = query.city_id;
      }

      // City Locality API
      cityLocalityJson = await fetch(`${host}api/v9/web/city-list`);
      cityLocalityJson = await cityLocalityJson.json();

      // Home Screen API
      homeScreenJson = await fetch(`${host}api/v9/web/home?city_id=${cityId}`);
      homeScreenJson = await homeScreenJson.json();

      store.dispatch(getHomeScreen(homeScreenJson));
      store.dispatch(getCityLocality(cityLocalityJson));
    } catch (err) {
      console.log("ERROR");
      console.log(err);
    }

    return {};
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.categoryData !== nextProps.categoryData &&
      nextProps.categoryData.status === "SUCCESS"
    ) {
      if (
        nextProps.categoryData.categoryData.details.hasOwnProperty("offer_id")
      ) {
        const { city } = Router.router.query;

        const partnerId =
          nextProps.categoryData.categoryData.details.partner_details.p_id;
        const partner = nextProps.categoryData.categoryData.details.partner_details.p_name
          .replace(/ /g, "-")
          .toLowerCase();
        const title = nextProps.categoryData.categoryData.details.offer_title
          .replace(/ /g, "-")
          .toLowerCase();
        const secret = `${nextProps.categoryData.categoryData.details.offer_id}-${nextProps.categoryData.categoryData.result_type}-${partnerId}`;

        Router.push(
          {
            pathname: "/detail",
            query: {
              city: city,
              partner: partner,
              title: title,
              secret: secret
            }
          },
          `/${city}/${partner}/${title}/${secret}`,
          { shallow: true }
        );
      }
    }
  }

  cityChangeApiCall = cityId => {
    this.props.getHomeScreenApi(cityId);
  };

  categoryApiCall = offerId => {
    this.props.getCategoryDataApi(offerId);
  };

  render() {
    const Hero = styled.div`
      width: 100%;
      color: #333;
    `;

    const Welcome = styled.h1`
      color: red;
    `;
    console.log(this.props);
    return (
      <div>
        <Head title="Home" />
        <Header />
        <Slidder
          cityLocality={this.props.cityLocality}
          homeScreen={this.props.homeScreen}
          cityChangeApiCall={this.cityChangeApiCall}
        />
        <SlidderBanner homeScreen={this.props.homeScreen} />
        <Discover homeScreen={this.props.homeScreen} />
        <Featured homeScreen={this.props.homeScreen} />
        <Popular homeScreen={this.props.homeScreen} />
        <Trending
          homeScreen={this.props.homeScreen}
          categoryApiCall={this.categoryApiCall}
        />
        <Collection homeScreen={this.props.homeScreen} />
        <Banner homeScreen={this.props.homeScreen} />
        <Headout />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityLocality: state.cityLocality,
    homeScreen: state.homeScreen,
    categoryData: state.categoryData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    getHomeScreen: bindActionCreators(getHomeScreen, dispatch),
    getHomeScreenApi: bindActionCreators(getHomeScreenApi, dispatch),
    getCategoryDataApi: bindActionCreators(getCategoryDataApi, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
