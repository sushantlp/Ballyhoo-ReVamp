import React from "react";
import ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { host } from "../constants";

import Spinner from "../components/spinner";
import Head from "../components/head";
import Header from "../components/header";

import DetailSlider from "../components/detail-slider";
import ParentDetail from "../components/parent-detail";
import Headout from "../components/headout";
import Footer from "../components/footer";

import { getCityLocality } from "../actions/city-locality-action";
import { getSlidderImage } from "../actions/slidder-image-action";
import { getCategoryData } from "../actions/category-data-action";
import { getFoodCategoryData } from "../actions/food-category-data-action";
import { getFeaturingData } from "../actions/featuring-action";
import { getZomatoData, getZomatoDataApi } from "../actions/zomato-action";
import { postLogin } from "../actions/login-action";
import { postRegister } from "../actions/register-action";
import { postForget } from "../actions/forget-action";

class Detail extends React.Component {
  static async getInitialProps(ctx) {
    const { store, isServer, req, query } = ctx;

    let zomatoJson = [];
    let detailUrlParam = {};
    let slice = [];
    let routeParam = [];

    try {
      if (isServer) {
        let dynamicUrl;
        routeParam = req.params;

        // Index Zero=id, One=resultType, Two=partnerId, Three=apiType,
        slice = req.params.secret.split("b");

        detailUrlParam = {
          id: slice[0],
          result_type: slice[1],
          partner_id: slice[2],
          api_type: slice[3],
          key: slice[4],
          city_id: parseInt(slice[1], 10) === 1 ? slice[0] : slice[5]
        };

        const key =
          parseInt(detailUrlParam.api_type, 10) !== 3 ? 0 : detailUrlParam.key;
        const q =
          parseInt(detailUrlParam.result_type, 10) === 1
            ? detailUrlParam.partner_id
            : detailUrlParam.id;

        if (parseInt(slice[1], 10) === 1) {
          dynamicUrl = `${host}api/v9/web/partners/${slice[2]}?key=${key}`;
        } else {
          dynamicUrl = `${host}api/v9/web/offers/${slice[0]}`;
        }

        const [
          categoryJson,
          cityLocalityJson,
          featureJson,
          slidderJson
        ] = await Promise.all([
          fetch(dynamicUrl).then(r => r.json()),
          fetch(`${host}api/v9/web/city-list`).then(r => r.json()),
          fetch(
            `${host}api/v9/web/all/featurings?category=${
              slice[1]
            }&q=${q}&key=${key}`
          ).then(r => r.json()),
          fetch(
            `${host}api/v9/web/carousel/images?type=${2}&category=${
              detailUrlParam.result_type
            }`
          ).then(r => r.json())
        ]);

        if (parseInt(slice[1], 10) === 1)
          store.dispatch(getFoodCategoryData(categoryJson));
        else store.dispatch(getCategoryData(categoryJson));

        store.dispatch(getCityLocality(cityLocalityJson));
        store.dispatch(getFeaturingData(featureJson));
        store.dispatch(getSlidderImage(slidderJson));
      } else {
        routeParam = query;

        // Index Zero=id, One=responseType, Two=partnerId, Three=apiType
        slice = query.secret.split("b");

        detailUrlParam = {
          id: slice[0],
          result_type: slice[1],
          partner_id: slice[2],
          api_type: slice[3],
          key: slice[4],
          city_id: parseInt(slice[1], 10) === 1 ? slice[0] : slice[5]
        };

        const key =
          parseInt(detailUrlParam.api_type, 10) !== 3 ? 0 : detailUrlParam.key;
        const q =
          parseInt(detailUrlParam.result_type, 10) === 1
            ? detailUrlParam.partner_id
            : detailUrlParam.id;

        const [featureJson, slidderJson] = await Promise.all([
          fetch(
            `${host}api/v9/web/all/featurings?category=${
              slice[1]
            }&q=${q}&key=${key}`
          ).then(r => r.json()),
          fetch(
            `${host}api/v9/web/carousel/images?type=${2}&category=${
              detailUrlParam.result_type
            }`
          ).then(r => r.json())
        ]);

        store.dispatch(getFeaturingData(featureJson));
        store.dispatch(getSlidderImage(slidderJson));
      }

      if (parseInt(detailUrlParam.result_type, 10) === 1) {
        // Zomato API
        zomatoJson = await fetch(
          `${host}api/v9/web/partners/${
            detailUrlParam.partner_id
          }/zomato-reviews?page=${1}`
        );
        zomatoJson = await zomatoJson.json();
        store.dispatch(getZomatoData(zomatoJson));
      }
    } catch (err) {
      console.log("Detail_Error");
      console.log(err);
    }

    return { detailUrlParam, routeParam };
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
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
          <Header
            postLogin={this.props.postLogin}
            postRegister={this.props.postRegister}
            postForget={this.props.postForget}
          />
          <Spinner />
          <Headout />
          <Footer cityLocality={this.props.cityLocality} />
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <Head title="Home" />
        <Header
          postLogin={this.props.postLogin}
          postRegister={this.props.postRegister}
          postForget={this.props.postForget}
        />
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
          routeParam={this.props.routeParam}
          cityLocality={this.props.cityLocality}
          changeLoadingState={this.changeLoadingState}
          zomatoData={this.props.zomatoData}
          getZomatoDataApi={this.props.getZomatoDataApi}
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
    featuring: state.featuring,
    zomatoData: state.zomatoData,
    login: state.login,
    register: state.register,
    forget: state.forget
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    getCategoryData: bindActionCreators(getCategoryData, dispatch),
    getSlidderImage: bindActionCreators(getSlidderImage, dispatch),
    getFoodCategoryData: bindActionCreators(getFoodCategoryData, dispatch),
    getFeaturingData: bindActionCreators(getFeaturingData, dispatch),
    getZomatoData: bindActionCreators(getZomatoData, dispatch),
    getZomatoDataApi: bindActionCreators(getZomatoDataApi, dispatch),
    postLogin: bindActionCreators(postLogin, dispatch),
    postRegister: bindActionCreators(postRegister, dispatch),
    postForget: bindActionCreators(postForget, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
