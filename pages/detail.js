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

import { getCategoryData } from "../actions/category-data-action";
import { getFoodCategoryData } from "../actions/food-category-data-action";

class Detail extends React.Component {
  static async getInitialProps(ctx) {
    const { store, isServer, req, query } = ctx;
    let categoryJson = [];
    let foodCategoryJson = [];
    if (isServer) {
      if (
        req.hasOwnProperty("params") &&
        req.params.hasOwnProperty("secret") &&
        req.params !== undefined &&
        req.params.secret !== undefined
      ) {
        // Index Zero=id, One=resultType, Two=partnerId
        const slice = req.params.secret.split("-");

        if (parseInt(slice[1], 10) === 1) {
          // Food Category Api
          foodCategoryJson = await fetch(
            `${host}api/v9/web/partners/${slice[2]}?key=${slice[0]}`
          );
          foodCategoryJson = await foodCategoryJson.json();
        } else {
          // Category Api
          categoryJson = await fetch(`${host}api/v9/web/offers/${slice[0]}`);
          categoryJson = await categoryJson.json();
        }
      }
    } else {
      if (query.hasOwnProperty("secret") && query.secret !== undefined) {
        // Index Zero=id, One=resultType, Two=partnerId
        const slice = query.secret.split("-");

        if (parseInt(slice[1], 10) === 1) {
          // Food Category Api
          foodCategoryJson = await fetch(
            `${host}api/v9/web/partners/${slice[2]}?key=${slice[0]}`
          );
          foodCategoryJson = await foodCategoryJson.json();
        } else {
          // Category Api
          categoryJson = await fetch(`${host}api/v9/web/offers/${slice[0]}`);
          categoryJson = await categoryJson.json();
        }
      }
    }

    store.dispatch(getFoodCategoryData(foodCategoryJson));
    store.dispatch(getCategoryData(categoryJson));
  }

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
    return (
      <React.Fragment>
        <Head title="Home" />
        <Header />
        <DetailSlider />
        <ParentDetail
          categoryData={this.props.categoryData}
          foodCategoryData={this.props.foodCategoryData}
        />
        <Headout />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryData: state.categoryData,
    foodCategoryData: state.foodCategoryData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoryData: bindActionCreators(getCategoryData, dispatch),
    getFoodCategoryData: bindActionCreators(getFoodCategoryData, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
