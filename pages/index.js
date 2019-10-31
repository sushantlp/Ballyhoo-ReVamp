import ReactDOM from "react-dom";
import Router from "next/router";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import fetch from "isomorphic-unfetch";

import { host, hostWithoutSlash, database, version } from "../constants";

import { Store, get, set } from "idb-keyval";

import Spinner from "../components/spinner";
import Head from "../components/head";
import Header from "../components/header";

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
import CityModel from "../components/city-model";

import { getsearchData } from "../actions/search-data-action";
import { getCityLocality } from "../actions/city-locality-action";
import { getCategoryDataApi } from "../actions/category-data-action";
import { getHomeScreen, getHomeScreenApi } from "../actions/home-screen-action";
import { postLogin } from "../actions/login-action";
import { postRegister } from "../actions/register-action";
import { postForget } from "../actions/forget-action";
import { updateCustomerData } from "../actions/customer-data-action";
import { getSeo, getSeoApi } from "../actions/seo-data-action";
import { applicationStatusAction } from "../actions/application-status-action";
import { getProfile } from "../actions/profile-action";

class Index extends React.Component {
  static async getInitialProps(ctx) {
    let currentUrl = [];
    try {
      const { store, isServer, req, query, asPath } = ctx;
      let cityId = 1;
      if (isServer) {
        currentUrl = req.url;
        if (
          req.hasOwnProperty("params") &&
          req.params.hasOwnProperty("city_id") &&
          req.params !== undefined
        )
          cityId = req.params.city_id;
      } else {
        currentUrl = asPath;
        if (query.hasOwnProperty("city_id") && query.city_id !== undefined)
          cityId = query.city_id;
      }

      // City Locality API
      let cityLocalityJson = await fetch(`${host}api/v9/web/city-list`);
      cityLocalityJson = await cityLocalityJson.json();
      store.dispatch(getCityLocality(cityLocalityJson));

      // Search Json
      let searchJson = await fetch(`${host}api/v9/web/search-keys`);
      searchJson = await searchJson.json();
      store.dispatch(getsearchData(searchJson));

      // const [
      //   cityLocalityJson,
      //   homeScreenJson,
      //   searchJson,
      //   seoJson
      // ] = await Promise.all([
      //   fetch(`${host}api/v9/web/city-list`).then(r => r.json()),
      //   fetch(`${host}api/v9/web/home?city_id=${cityId}`).then(r => r.json()),
      //   fetch(`${host}api/v9/web/search-keys`).then(r => r.json()),
      //   fetch(`${host}api/v9/web/seo?city=${cityId}`).then(r => r.json())
      // ]);

      // store.dispatch(getsearchData(searchJson));
      // store.dispatch(getHomeScreen(homeScreenJson));
      // store.dispatch(getCityLocality(cityLocalityJson));
      // store.dispatch(getSeo(seoJson));
    } catch (err) {
      console.log("ERROR");
      console.log(err);
    }

    return { currentUrl };
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      cityModel: false,
      hideSeek: true
    };
  }

  async componentDidMount() {
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

    const customStore = new Store("ballyhoo", "ballyhoo_store");
    get("city", customStore).then(city =>
      city === undefined
        ? this.setState({
            cityModel: true
          })
        : this.onApiCall(city)
    );

    sessionStorage.setItem(
      "CITY",
      JSON.stringify(this.props.cityLocality.cityLocality)
    );
    sessionStorage.removeItem("RESERVATION");
    sessionStorage.removeItem("SPA_APPOINTMENT");
    sessionStorage.removeItem("SPA_OFFER");
    sessionStorage.removeItem("ACTIVITY_OFFER");
    sessionStorage.removeItem("EVENT_OFFER");
    sessionStorage.removeItem("ESCAPE_OFFER");
    sessionStorage.removeItem("FNB_OFFER");
    sessionStorage.removeItem("WHICH");
    sessionStorage.removeItem("PAYMENT");
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

        const secret = `${nextProps.categoryData.categoryData.details.offer_id}b${nextProps.categoryData.categoryData.result_type}b${partnerId}`;

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
    } else if (
      this.props.homeScreen !== nextProps.homeScreen &&
      nextProps.homeScreen.status === "SUCCESS"
    ) {
      this.changeLoadingState(false);
    }
  }

  onClickHideSeek = bool => {
    this.setState({
      hideSeek: bool
    });
  };

  cityChangeApiCall = city => {
    const customStore = new Store("ballyhoo", "ballyhoo_store");
    set("city", city, customStore);
    this.props.getHomeScreenApi(city.city_id);
  };

  categoryApiCall = offerId => {
    this.changeLoadingState(true);
    this.props.getCategoryDataApi(offerId);
  };

  changeLoadingState = bool => {
    ReactDOM.findDOMNode(this).scrollIntoView();
    this.setState({
      isLoading: bool
    });
  };

  onCitySelected = async city => {
    const customStore = new Store("ballyhoo", "ballyhoo_store");
    set("city", city, customStore);

    this.setState({
      cityModel: false
    });

    this.onApiCall(city);
  };

  onApiCall = city => {
    this.changeLoadingState(true);
    this.props.getHomeScreenApi(city.city_id);
    this.props.getSeoApi(city.city_id, null, null);

    Router.push(
      {
        pathname: Router.router.route,
        query: { city: city.city_name, city_id: city.city_id }
      },
      `/${city.city_name}/${city.city_id}`,
      { shallow: true }
    );
  };

  render() {
    let keyword;

    if (this.props.seo.seo.length > 0) {
      for (let i = 0; i < this.props.seo.seo.keywords.length; i++) {
        keyword =
          keyword === undefined
            ? this.props.seo.seo.keywords[i]
            : `${keyword}, ${this.props.seo.seo.keywords[i]}`;
      }
    } else keyword = "";

    if (this.state.isLoading)
      return (
        <React.Fragment>
          <Header
            postLogin={this.props.postLogin}
            postRegister={this.props.postRegister}
            postForget={this.props.postForget}
            updateCustomerData={this.props.updateCustomerData}
            customerData={this.props.customerData}
            login={this.props.login}
            register={this.props.register}
            forget={this.props.forget}
            applicationStatus={this.props.applicationStatus}
            applicationStatusAction={this.props.applicationStatusAction}
            getProfile={this.props.getProfile}
            profileData={this.props.profileData}
          />
          <Spinner />
          <Headout />
          <Footer cityLocality={this.props.cityLocality} />
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <Head
          title="Ballyhoo Today - Discover Eat Trend Escape. Explore and Book your Events, activities, Nightlife, curated holiday packages and much more"
          ogImage="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1200/v1539670597/ballyhoo/BALLYHOO_WEBSITE/1440x600finalpge.jpg"
          url={`${hostWithoutSlash}${this.props.currentUrl}`}
          description={this.props.seo.seo.description}
          keyword={keyword}
        />
        <Header
          postLogin={this.props.postLogin}
          postRegister={this.props.postRegister}
          postForget={this.props.postForget}
          updateCustomerData={this.props.updateCustomerData}
          customerData={this.props.customerData}
          login={this.props.login}
          register={this.props.register}
          forget={this.props.forget}
          applicationStatus={this.props.applicationStatus}
          applicationStatusAction={this.props.applicationStatusAction}
          getProfile={this.props.getProfile}
          profileData={this.props.profileData}
        />
        <Slidder
          cityLocality={this.props.cityLocality}
          homeScreen={this.props.homeScreen}
          cityChangeApiCall={this.cityChangeApiCall}
          searchData={this.props.searchData}
          changeLoadingState={this.changeLoadingState}
          seo={this.props.seo}
          keyword={keyword}
        />
        <SlidderBanner homeScreen={this.props.homeScreen} keyword={keyword} />
        <Discover
          homeScreen={this.props.homeScreen}
          changeLoadingState={this.changeLoadingState}
          keyword={keyword}
        />
        <Featured
          homeScreen={this.props.homeScreen}
          changeLoadingState={this.changeLoadingState}
          keyword={keyword}
        />
        <Popular
          homeScreen={this.props.homeScreen}
          changeLoadingState={this.changeLoadingState}
        />
        <Trending
          homeScreen={this.props.homeScreen}
          categoryApiCall={this.categoryApiCall}
          changeLoadingState={this.changeLoadingState}
          keyword={keyword}
        />
        <Collection
          homeScreen={this.props.homeScreen}
          changeLoadingState={this.changeLoadingState}
          keyword={keyword}
        />
        <Banner homeScreen={this.props.homeScreen} keyword={keyword} />
        <Headout keyword={keyword} />

        <Footer cityLocality={this.props.cityLocality} keyword={keyword} />

        {this.state.cityModel ? (
          <CityModel
            cityModel={this.state.cityModel}
            hideSeek={this.state.hideSeek}
            onClickHideSeek={this.onClickHideSeek}
            cityLocality={this.props.cityLocality}
            onCitySelected={this.onCitySelected}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cityLocality: state.cityLocality,
    homeScreen: state.homeScreen,
    categoryData: state.categoryData,
    searchData: state.searchData,
    login: state.login,
    register: state.register,
    forget: state.forget,
    customerData: state.customerData,
    seo: state.seo,
    applicationStatus: state.applicationStatus,
    profileData: state.profileData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    getHomeScreen: bindActionCreators(getHomeScreen, dispatch),
    getHomeScreenApi: bindActionCreators(getHomeScreenApi, dispatch),
    getCategoryDataApi: bindActionCreators(getCategoryDataApi, dispatch),
    getsearchData: bindActionCreators(getsearchData, dispatch),
    postLogin: bindActionCreators(postLogin, dispatch),
    postRegister: bindActionCreators(postRegister, dispatch),
    postForget: bindActionCreators(postForget, dispatch),
    updateCustomerData: bindActionCreators(updateCustomerData, dispatch),
    getSeo: bindActionCreators(getSeo, dispatch),
    getSeoApi: bindActionCreators(getSeoApi, dispatch),
    applicationStatusAction: bindActionCreators(
      applicationStatusAction,
      dispatch
    ),
    getProfile: bindActionCreators(getProfile, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
