import React from "react";
import Link from "next/link";

import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";

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

  componentDidMount() {}

  render() {
    // const { stories, page } = this.props;

    // if (stories.length === 0) {
    //   return <Error statusCode={503} />;
    // }

    return (
      <div>
        <Head title="Home" />
        <Header />
        <SubHeader />
        <ParentList />
        <Headout />
        <Footer />
      </div>
    );
  }
}

export default List;
