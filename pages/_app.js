// import {createStore} from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux";

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
