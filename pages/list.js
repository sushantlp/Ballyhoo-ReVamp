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
import ParentList from "../components/parent-list";
import Headout from "../components/headout";
import Footer from "../components/footer";

import { getListData, getListDataApi } from "../actions/list-action";
import { getCityLocality } from "../actions/city-locality-action";
import { getCategoryDataApi } from "../actions/category-data-action";
import { getFoodCategoryDataApi } from "../actions/food-category-data-action";

class List extends React.Component {
  static async getInitialProps(ctx) {
    let listJson = [];
    let cityLocalityJson = [];
    let routeParam = [];
    let listUrlParam = {};

    try {
      const { store, isServer, req, query } = ctx;

      if (isServer) routeParam = req.params;
      else routeParam = query;

      let cityId = 1;
      let type = 1;
      let key = 1;
      let page = 1;

      if (routeParam.secret !== undefined) {
        // Index Zero=cityId, One=apiType, Two=Key, Three=responseType, Four=page
        const slice = routeParam.secret.split("-");

        if (slice.length === 5) {
          cityId = slice[0];
          type = slice[1];
          key = slice[2];
          page = slice[4];

          listUrlParam = {
            city_id: slice[0],
            api_type: slice[1],
            key: slice[2],
            response_type: slice[3]
          };
        }
      }

      // List API
      listJson = await fetch(
        `${host}api/v9/web/listing?city_id=${cityId}&type=${type}&q=${key}&page=${page}`
      );
      listJson = await listJson.json();

      // City Locality API
      cityLocalityJson = await fetch(`${host}api/v9/web/city-list`);
      cityLocalityJson = await cityLocalityJson.json();

      store.dispatch(getListData(listJson));
      store.dispatch(getCityLocality(cityLocalityJson));
    } catch (err) {
      console.log("List_Error");
      console.log(err);
    }

    return { routeParam, listUrlParam };
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
        const secret = `${nextProps.categoryData.categoryData.details.offer_id}-${nextProps.categoryData.categoryData.result_type}-${partnerId}-${this.props.listUrlParam.api_type}`;

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
    } else {
      if (
        this.props.foodCategoryData !== nextProps.foodCategoryData &&
        nextProps.foodCategoryData.status === "SUCCESS"
      ) {
        console.log(nextProps.foodCategoryData);

        if (
          nextProps.foodCategoryData.foodCategoryData.details.hasOwnProperty(
            "partner_id"
          )
        ) {
          const { city } = Router.router.query;

          const partnerId =
            nextProps.foodCategoryData.foodCategoryData.details.partner_id;
          const partner = nextProps.foodCategoryData.foodCategoryData.details.bname
            .replace(/ /g, "-")
            .toLowerCase();
          const title = nextProps.foodCategoryData.foodCategoryData.details.offering
            .replace(/ /g, "-")
            .toLowerCase();

          const secret = `${nextProps.categoryData.categoryData.details.offer_id}-${nextProps.categoryData.categoryData.result_type}-${partnerId}-${this.props.listUrlParam.api_type}`;

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
  }

  onLoadMoreList = (cityId, type, key, nextPage) => {
    this.props.getListDataApi(cityId, type, key, nextPage);
  };

  categoryApiCall = offerId => {
    this.props.getCategoryDataApi(offerId);
  };

  foodCategoryApiCall = (partnerId, key) => {
    this.props.getFoodCategoryDataApi(partnerId, key);
  };

  render() {
    return (
      <div>
        <Head title="Home" />
        <Header />
        <ParentList
          cityLocality={this.props.cityLocality}
          listData={this.props.listData}
          routeParam={this.props.routeParam}
          onLoadMoreList={this.onLoadMoreList}
          categoryApiCall={this.categoryApiCall}
          foodCategoryApiCall={this.foodCategoryApiCall}
          listUrlParam={this.props.listUrlParam}
        />
        <Headout />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityLocality: state.cityLocality,
    listData: state.listData,
    foodCategoryData: state.foodCategoryData,
    categoryData: state.categoryData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    getListData: bindActionCreators(getListData, dispatch),
    getListDataApi: bindActionCreators(getListDataApi, dispatch),
    getCategoryDataApi: bindActionCreators(getCategoryDataApi, dispatch),
    getFoodCategoryDataApi: bindActionCreators(getFoodCategoryDataApi, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
