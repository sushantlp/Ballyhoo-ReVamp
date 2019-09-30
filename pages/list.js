import React from "react";
import ReactDOM from "react-dom";
import Router from "next/router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetch from "isomorphic-unfetch";

import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { host } from "../constants";

import Spinner from "../components/spinner";
import Head from "../components/head";
import Header from "../components/header";

import ParentList from "../components/parent-list";
import Headout from "../components/headout";
import Footer from "../components/footer";
// import Space from "../components/loading-space";

import {
  getListData,
  getListDataApi,
  getSearchListData,
  getSearchListDataApi
} from "../actions/list-action";
import { getSlidderImage } from "../actions/slidder-image-action";
import {
  getrecommendation,
  getRecommendationApi
} from "../actions/recommendation-data-action";
import { getCityLocality } from "../actions/city-locality-action";
import { getCategoryDataApi } from "../actions/category-data-action";
import { getFoodCategoryDataApi } from "../actions/food-category-data-action";
import { getsearchData } from "../actions/search-data-action";
import { updateUrlParam } from "../actions/url-param-action";

class List extends React.Component {
  static async getInitialProps(ctx) {
    let listJson = [];
    let slidderJson = [];
    let searchJson = [];
    let cityLocalityJson = [];
    let recommendation = [];
    let routeParam = [];

    let listUrlParam = {
      city_id: 0,
      api_type: 0,
      key: 0,
      response_type: 0,
      flag: 0
    };

    try {
      const { store, isServer, req, query } = ctx;
      store.dispatch(updateUrlParam(listUrlParam));

      if (isServer) routeParam = req.params;
      else routeParam = query;
      let page = 1;

      if (routeParam.secret !== undefined) {
        // Index Zero=cityId, One=apiType, Two=Key, Three=responseType, Four=page
        const slice = routeParam.secret.split("b");

        if (slice.length === 6) {
          page = slice[4];

          listUrlParam = {
            city_id: slice[0],
            api_type: slice[1],
            key: slice[2],
            response_type: slice[3],
            flag: parseInt(slice[5], 10)
          };
        }
      }

      if (listUrlParam.flag === 1) {
        // Search List API
        listJson = await fetch(
          `${host}api/v9/web/search?city_id=${listUrlParam.city_id}&type=${listUrlParam.api_type}&key=${listUrlParam.key}&page=${page}`
        );
      } else {
        // List API
        listJson = await fetch(
          `${host}api/v9/web/listing?city_id=${listUrlParam.city_id}&type=${listUrlParam.api_type}&q=${listUrlParam.key}&page=${page}`
        );
      }

      listJson = await listJson.json();

      listUrlParam.flag === 1
        ? store.dispatch(getSearchListData(listJson))
        : store.dispatch(getListData(listJson));

      // Slidder Image API
      slidderJson = await fetch(
        `${host}api/v9/web/carousel/images?type=${1}&category=${
          listUrlParam.response_type
        }`
      );
      slidderJson = await slidderJson.json();

      // City Locality API
      cityLocalityJson = await fetch(`${host}api/v9/web/city-list`);
      cityLocalityJson = await cityLocalityJson.json();

      // Recommendation API
      recommendation = await fetch(
        `${host}api/v9/web/recommended/collections?city=${listUrlParam.city_id}&type=${listUrlParam.api_type}&key=${listUrlParam.key}`
      );
      recommendation = await recommendation.json();

      // Search Data
      searchJson = await fetch(`${host}api/v9/web/search-keys`);
      searchJson = await searchJson.json();

      store.dispatch(getsearchData(searchJson));
      store.dispatch(getSlidderImage(slidderJson));
      store.dispatch(getCityLocality(cityLocalityJson));
      store.dispatch(getrecommendation(recommendation));
      store.dispatch(updateUrlParam(listUrlParam));
    } catch (err) {
      console.log("List_Error");
      console.log(err);
    }

    return { routeParam };
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    // window.scrollTo(0, 0);
    ReactDOM.findDOMNode(this).scrollIntoView();
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
        const secret = `${nextProps.categoryData.categoryData.details.offer_id}b${nextProps.categoryData.categoryData.result_type}b${partnerId}b${this.props.urlParam.urlParam.api_type}b${this.props.urlParam.urlParam.key}`;

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
    if (
      this.props.foodCategoryData !== nextProps.foodCategoryData &&
      nextProps.foodCategoryData.status === "SUCCESS"
    ) {
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

        const secret = `${0}-${
          nextProps.foodCategoryData.foodCategoryData.result_type
        }b${partnerId}b${this.props.urlParam.urlParam.api_type}b${
          this.props.urlParam.urlParam.key
        }`;

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

  onLoadMoreList = (cityId, type, key, nextPage) => {
    this.props.urlParam.urlParam.flag === 1
      ? this.props.getSearchListDataApi(cityId, type, key, nextPage)
      : this.props.getListDataApi(cityId, type, key, nextPage);
  };

  categoryApiCall = offerId => {
    this.changeLoadingState();
    this.props.getCategoryDataApi(offerId);
  };

  foodCategoryApiCall = (partnerId, key) => {
    this.changeLoadingState();
    key = parseInt(this.props.urlParam.urlParam.api_type, 10) !== 3 ? 0 : key;
    this.props.getFoodCategoryDataApi(partnerId, key);
  };

  onSearchKeyChange = async (
    cityId,
    apiType,
    key,
    responseType,
    flag,
    nextPage
  ) => {
    // const listUrlParam = {
    //   city_id: cityId,
    //   api_type: apiType,
    //   key: key,
    //   response_type: responseType,
    //   flag: flag
    // };
    // this.setState({
    //   city_id: cityId,
    //   api_type: apiType,
    //   key: key,
    //   response_type: responseType,
    //   flag: flag
    // });

    this.props.getSearchListDataApi(cityId, apiType, key, nextPage);
    // this.props.updateUrlParam(listUrlParam);
  };

  changeLoadingState = () => {
    ReactDOM.findDOMNode(this).scrollIntoView();
    this.setState({
      isLoading: !this.state.isLoading
    });
  };

  render() {
    if (this.state.isLoading)
      return (
        <React.Fragment>
          <Head title="Home" />
          <Header />
          <Spinner />
          {/* <Space /> */}
          <Headout />
          <Footer cityLocality={this.props.cityLocality} />
        </React.Fragment>
      );

    return (
      <div>
        <Head title="Home" />
        <Header />
        <ParentList
          cityLocality={this.props.cityLocality}
          listData={this.props.listData}
          slidderImage={this.props.slidderImage}
          routeParam={this.props.routeParam}
          onLoadMoreList={this.onLoadMoreList}
          categoryApiCall={this.categoryApiCall}
          foodCategoryApiCall={this.foodCategoryApiCall}
          urlParam={this.props.urlParam.urlParam}
          recommendation={this.props.recommendation}
          searchData={this.props.searchData}
          onSearchKeyChange={this.onSearchKeyChange}
        />
        <Headout />
        <Footer cityLocality={this.props.cityLocality} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityLocality: state.cityLocality,
    listData: state.listData,
    slidderImage: state.slidderImage,
    foodCategoryData: state.foodCategoryData,
    categoryData: state.categoryData,
    recommendation: state.recommendation,
    searchData: state.searchData,
    urlParam: state.urlParam
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchListData: bindActionCreators(getSearchListData, dispatch),
    getSearchListDataApi: bindActionCreators(getSearchListDataApi, dispatch),
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    getListData: bindActionCreators(getListData, dispatch),
    getSlidderImage: bindActionCreators(getSlidderImage, dispatch),
    getListDataApi: bindActionCreators(getListDataApi, dispatch),
    getCategoryDataApi: bindActionCreators(getCategoryDataApi, dispatch),
    getFoodCategoryDataApi: bindActionCreators(
      getFoodCategoryDataApi,
      dispatch
    ),
    getrecommendation: bindActionCreators(getrecommendation, dispatch),
    getRecommendationApi: bindActionCreators(getRecommendationApi, dispatch),
    getsearchData: bindActionCreators(getsearchData, dispatch),
    updateUrlParam: bindActionCreators(updateUrlParam, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
