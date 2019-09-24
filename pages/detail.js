import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { host } from "../constants";

import Head from "../components/head";
import Header from "../components/header";
import SubHeader from "../components/sub-header";
import DetailSlider from "../components/detail-slider";
import ParentDetail from "../components/parent-detail";
import Headout from "../components/headout";
import Footer from "../components/footer";
import styled from "styled-components";

import { getCityLocality } from "../actions/city-locality-action";
import { getSlidderImage } from "../actions/slidder-image-action";
import { getCategoryData } from "../actions/category-data-action";
import { getFoodCategoryData } from "../actions/food-category-data-action";
import { getFeaturingData } from "../actions/featuring-action";

class Detail extends React.Component {
  static async getInitialProps(ctx) {
    const { store, isServer, req, query } = ctx;
    let categoryJson = [];
    let foodCategoryJson = [];
    let featureJson = [];
    let detailUrlParam = {};
    let slice = [];
    try {
      if (isServer) {
        if (
          req.hasOwnProperty("params") &&
          req.params.hasOwnProperty("secret") &&
          req.params !== undefined &&
          req.params.secret !== undefined
        ) {
          // Index Zero=id, One=resultType, Two=partnerId, Three=apiType,
          slice = req.params.secret.split("-");

          detailUrlParam = {
            id: slice[0],
            result_type: slice[1],
            partner_id: slice[2],
            api_type: slice[3]
          };

          const key = parseInt(slice[3], 10) !== 3 ? 0 : slice[3];

          if (parseInt(slice[1], 10) === 1) {
            // Food Category Api
            foodCategoryJson = await fetch(
              `${host}api/v9/web/partners/${slice[2]}?key=${key}`
            );
            foodCategoryJson = await foodCategoryJson.json();

            store.dispatch(getFoodCategoryData(foodCategoryJson));
          } else {
            // Category Api
            categoryJson = await fetch(`${host}api/v9/web/offers/${slice[0]}`);
            categoryJson = await categoryJson.json();

            store.dispatch(getCategoryData(categoryJson));
          }
        }
      } else {
        if (query.hasOwnProperty("secret") && query.secret !== undefined) {
          // Index Zero=id, One=resultType, Two=partnerId, Three=apiType
          slice = query.secret.split("-");

          detailUrlParam = {
            id: slice[0],
            result_type: slice[1],
            partner_id: slice[2],
            api_type: slice[3]
          };
        }
      }

      const key = parseInt(slice[3], 10) !== 3 ? 0 : slice[3];

      // Also Feature
      featureJson = await fetch(
        `${host}api/v9/web/all/featurings?category=${slice[1]}&q=${
          slice[0]
        }&key=${key}`
      );
      featureJson = await featureJson.json();
      store.dispatch(getFeaturingData(featureJson));

      // Slidder Image API
      let slidderJson = await fetch(
        `${host}api/v9/web/carousel/images?type=${2}&category=${
          detailUrlParam.result_type
        }`
      );
      slidderJson = await slidderJson.json();
      store.dispatch(getSlidderImage(slidderJson));

      // City Locality API
      let cityLocalityJson = await fetch(`${host}api/v9/web/city-list`);
      cityLocalityJson = await cityLocalityJson.json();
      store.dispatch(getCityLocality(cityLocalityJson));
    } catch (err) {
      console.log("Detail_Error");
      console.log(err);
    }

    return { detailUrlParam };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    return (
      <React.Fragment>
        <Head title="Home" />
        <Header />
        <DetailSlider
          slidderImage={this.props.slidderImage}
          categoryData={this.props.categoryData}
          foodCategoryData={this.props.foodCategoryData}
          detailUrlParam={this.props.detailUrlParam}
        />
        <ParentDetail
          categoryData={this.props.categoryData}
          foodCategoryData={this.props.foodCategoryData}
          detailUrlParam={this.props.detailUrlParam}
          featuring={this.props.featuring}
        />
        <Headout />
        <Footer cityLocality={this.props.cityLocality} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityLocality: state.cityLocality,
    categoryData: state.categoryData,
    slidderImage: state.slidderImage,
    foodCategoryData: state.foodCategoryData,
    featuring: state.featuring
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    getCategoryData: bindActionCreators(getCategoryData, dispatch),
    getSlidderImage: bindActionCreators(getSlidderImage, dispatch),
    getFoodCategoryData: bindActionCreators(getFoodCategoryData, dispatch),
    getFeaturingData: bindActionCreators(getFeaturingData, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
