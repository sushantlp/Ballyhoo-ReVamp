import React from "react";
import Link from "next/link";

import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from "../components/head";
import Header from "../components/header";
import SubHeader from "../components/sub-header";
import ParentList from "../components/parent-list";
import Headout from "../components/headout";
import Footer from "../components/footer";

class List extends React.Component {
  // static async getInitialProps({ req, res, query }) {
  //   let stories;
  //   let page;

  //   try {
  //     page = Number(query.page) || 1;
  //     const response = await fetch(
  //       `https://node-hnapi.herokuapp.com/news?page=${page}`
  //     );
  //     stories = await response.json();
  //   } catch (err) {
  //     console.log(err);
  //     stories = [];
  //   }

  //   return { page, stories };
  // }

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrolling: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);

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

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  handleScroll(event) {
    if (document.body.scrollTop > 53) {
      this.setState({
        scrolling: true
      });
    } else {
      this.setState({
        scrolling: false
      });
    }
  }

  render() {
    // const { stories, page } = this.props;

    // if (stories.length === 0) {
    //   return <Error statusCode={503} />;
    // }

    return (
      <div>
        <Head title="Home" />
        <Header />
        <SubHeader scrolling={this.state.scrolling} />
        <ParentList scrolling={this.state.scrolling} />
        <Headout />
        <Footer />
      </div>
    );
  }
}

export default List;
