// import {createStore} from "redux";
import Router from "next/router";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux";

import "bulma/css/bulma.min.css";
import "semantic-ui-css/semantic.min.css";

if (process.env.NODE_ENV !== "production") {
  Router.events.on("routeChangeComplete", () => {
    const path = "/_next/static/css/styles.chunk.css";
    const chunksSelector = `link[href*="${path}"]`;
    const chunksNodes = document.querySelectorAll(chunksSelector);
    const timestamp = new Date().valueOf();
    chunksNodes[0].href = `${path}?${timestamp}`;
  });
}

export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      // return {
      //   pageProps: {
      //     ...(Component.getInitialProps
      //       ? await Component.getInitialProps(ctx)
      //       : {})
      //   }
      // };

      let pageProps = {};

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        // <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        // </Container>
      );
    }
  }
);
