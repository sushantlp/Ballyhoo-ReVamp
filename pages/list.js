import React from "react";
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

class List extends React.Component {
  static async getInitialProps(ctx) {
    let listJson = [];
    let cityLocalityJson = [];
    let routeParam = [];

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
      console.log("listERROR");
      console.log(err);
    }

    return { listJson, cityLocalityJson, routeParam };
  }

  onLoadMoreList = (cityId, type, key, nextPage) => {
    this.props.getListDataApi(cityId, type, key, nextPage);
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
    listData: state.listData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityLocality: bindActionCreators(getCityLocality, dispatch),
    getListData: bindActionCreators(getListData, dispatch),
    getListDataApi: bindActionCreators(getListDataApi, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
