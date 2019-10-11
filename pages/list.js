import ReactDOM from "react-dom";
import Router from "next/router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetch from "isomorphic-unfetch";

import { host, hostWithoutSlash } from "../constants";

import Spinner from "../components/spinner";
import Head from "../components/head";
import Header from "../components/header";

import ParentList from "../components/parent-list";
import Headout from "../components/headout";
import Footer from "../components/footer";

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
import { postLogin } from "../actions/login-action";
import { postRegister } from "../actions/register-action";
import { postForget } from "../actions/forget-action";

import { getSeo } from "../actions/seo-data-action";

class List extends React.Component {
  static async getInitialProps(ctx) {
    let routeParam = [];
    let currentUrl = "";
    let currentImage = "";
    let listUrlParam = {
      city_id: 0,
      api_type: 0,
      key: 0,
      response_type: 0,
      flag: 0
    };

    try {
      const { store, isServer, req, query, asPath } = ctx;

      store.dispatch(updateUrlParam(listUrlParam));
      let dynamicUrl;
      if (isServer) {
        routeParam = req.params;
        currentUrl = req.url;
      } else {
        routeParam = query;
        currentUrl = asPath;
      }
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

      if (parseInt(listUrlParam.response_type, 10) === 1)
        currentImage =
          "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_630,w_1200/v1474443270/ballyhoo/BREAKFAST/21.jpg";
      else if (parseInt(listUrlParam.response_type, 10) === 2)
        currentImage =
          "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_630,w_1200/v1525270867/OTHER_CATEGORY/EVENT/8.jpg";
      else if (parseInt(listUrlParam.response_type, 10) === 3)
        currentImage =
          "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_630,w_1200/v1525271107/OTHER_CATEGORY/ACTIVITY/5.jpg";
      else if (parseInt(listUrlParam.response_type, 10) === 4)
        currentImage =
          "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_630,w_1200/v1525271481/OTHER_CATEGORY/GETAWAY/7.jpg";
      else if (parseInt(listUrlParam.response_type, 10) === 5)
        currentImage =
          "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_630,w_1200/v1525271817/OTHER_CATEGORY/SALOON/7.jpg";

      if (listUrlParam.flag === 1) {
        dynamicUrl = `${host}api/v9/web/search?city_id=${listUrlParam.city_id}&type=${listUrlParam.api_type}&key=${listUrlParam.key}&page=${page}`;
      } else {
        dynamicUrl = `${host}api/v9/web/listing?city_id=${listUrlParam.city_id}&type=${listUrlParam.api_type}&q=${listUrlParam.key}&page=${page}`;
      }

      if (isServer) {
        const [
          cityLocalityJson,
          searchJson,
          listJson,
          slidderJson,
          recommendation,
          seoJson
        ] = await Promise.all([
          fetch(`${host}api/v9/web/city-list`).then(r => r.json()),
          fetch(`${host}api/v9/web/search-keys`).then(r => r.json()),
          fetch(dynamicUrl).then(r => r.json()),
          fetch(
            `${host}api/v9/web/carousel/images?type=${1}&category=${
              listUrlParam.response_type
            }`
          ).then(r => r.json()),
          fetch(
            `${host}api/v9/web/recommended/collections?city=${listUrlParam.city_id}&type=${listUrlParam.api_type}&key=${listUrlParam.key}`
          ).then(r => r.json()),
          fetch(
            `${host}api/v9/web/seo?city=${listUrlParam.city_id}&category=${listUrlParam.response_type}`
          ).then(r => r.json())
        ]);

        store.dispatch(getCityLocality(cityLocalityJson));
        store.dispatch(getsearchData(searchJson));

        listUrlParam.flag === 1
          ? store.dispatch(getSearchListData(listJson))
          : store.dispatch(getListData(listJson));

        store.dispatch(getSlidderImage(slidderJson));
        store.dispatch(getrecommendation(recommendation));
        store.dispatch(getSeo(seoJson));
      } else {
        const [
          listJson,
          slidderJson,
          recommendation,
          seoJson
        ] = await Promise.all([
          fetch(dynamicUrl).then(r => r.json()),
          fetch(
            `${host}api/v9/web/carousel/images?type=${1}&category=${
              listUrlParam.response_type
            }`
          ).then(r => r.json()),
          fetch(
            `${host}api/v9/web/recommended/collections?city=${listUrlParam.city_id}&type=${listUrlParam.api_type}&key=${listUrlParam.key}`
          ).then(r => r.json()),
          fetch(
            `${host}api/v9/web/seo?city=${listUrlParam.city_id}&category=${listUrlParam.response_type}`
          ).then(r => r.json())
        ]);

        listUrlParam.flag === 1
          ? store.dispatch(getSearchListData(listJson))
          : store.dispatch(getListData(listJson));

        store.dispatch(getSlidderImage(slidderJson));
        store.dispatch(getrecommendation(recommendation));
        store.dispatch(getSeo(seoJson));
      }

      store.dispatch(updateUrlParam(listUrlParam));
    } catch (err) {
      console.log("List_Error");
      console.log(err);
    }

    return { routeParam, currentUrl, currentImage };
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.categoryData !== nextProps.categoryData &&
      nextProps.categoryData.status === "SUCCESS"
    ) {
      if (
        nextProps.categoryData.categoryData.details.hasOwnProperty("offer_id")
      ) {
        console.log(this.props.urlParam.urlParam.city_id);
        const { city } = Router.router.query;

        const partnerId =
          nextProps.categoryData.categoryData.details.partner_details.p_id;

        let partner = nextProps.categoryData.categoryData.details.partner_details.p_name.replace(
          /[^a-zA-Z ]/g,
          ""
        );
        partner = partner.replace(/ /g, "-").toLowerCase();
        partner = partner.replace(/-+/gi, "-");

        let title = nextProps.categoryData.categoryData.details.offer_title.replace(
          /[^a-zA-Z ]/g,
          ""
        );
        title = title.replace(/ /g, "-").toLowerCase();
        title = title.replace(/-+/gi, "-");

        const secret = `${nextProps.categoryData.categoryData.details.offer_id}b${nextProps.categoryData.categoryData.result_type}b${partnerId}b${this.props.urlParam.urlParam.api_type}b${this.props.urlParam.urlParam.key}b${this.props.urlParam.urlParam.city_id}`;

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
        let partner = nextProps.foodCategoryData.foodCategoryData.details.bname.replace(
          /[^a-zA-Z ]/g,
          ""
        );
        partner = partner.replace(/ /g, "-").toLowerCase();

        let title = nextProps.foodCategoryData.foodCategoryData.details.offering.replace(
          /[^a-zA-Z ]/g,
          ""
        );
        title = title.replace(/ /g, "-").toLowerCase();

        const secret = `${this.props.urlParam.urlParam.city_id}b${nextProps.foodCategoryData.foodCategoryData.result_type}b${partnerId}b${this.props.urlParam.urlParam.api_type}b${this.props.urlParam.urlParam.key}`;

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
    this.props.getSearchListDataApi(cityId, apiType, key, nextPage);
  };

  changeLoadingState = () => {
    ReactDOM.findDOMNode(this).scrollIntoView();
    this.setState({
      isLoading: !this.state.isLoading
    });
  };

  render() {
    let keyword;

    for (let i = 0; i < this.props.seo.seo.keywords.length; i++) {
      keyword =
        keyword === undefined
          ? this.props.seo.seo.keywords[i]
          : `${keyword}, ${this.props.seo.seo.keywords[i]}`;
    }

    if (this.state.isLoading)
      return (
        <React.Fragment>
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
      <div>
        <Head
          title="Ballyhoo Today"
          ogImage={this.props.currentImage}
          url={`${hostWithoutSlash}${this.props.currentUrl}`}
          description={this.props.seo.seo.description}
          keyword={keyword}
        />
        <Header
          postLogin={this.props.postLogin}
          postRegister={this.props.postRegister}
          postForget={this.props.postForget}
        />
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
          keyword={keyword}
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
    urlParam: state.urlParam,
    login: state.login,
    register: state.register,
    forget: state.forget,
    seo: state.seo
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
    updateUrlParam: bindActionCreators(updateUrlParam, dispatch),
    postLogin: bindActionCreators(postLogin, dispatch),
    postRegister: bindActionCreators(postRegister, dispatch),
    postForget: bindActionCreators(postForget, dispatch),
    getSeo: bindActionCreators(getSeo, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
