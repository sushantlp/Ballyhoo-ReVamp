import Document, { Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  // static getInitialProps({ renderPage }) {
  // Step 1: Create an instance of ServerStyleSheet
  //const sheet = new ServerStyleSheet();
  // Step 2: Retrieve styles from components in the page
  // const page = renderPage(App => props =>
  //   sheet.collectStyles(<App {...props} />)
  // );
  // Step 3: Extract the styles as <style> tags
  //const styleTags = sheet.getStyleElement();
  // Step 4: Pass styleTags as a prop
  //return { ...page, styleTags };
  //}

  render() {
    return (
      <html lang="en-US" style={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Head>
          <link rel="manifest" href="/static/manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="hacker-next" />
          <meta name="apple-mobile-web-app-title" content="hacker-next" />
          <meta name="theme-color" content="#f60" />
          <meta name="msapplication-navbutton-color" content="#f60" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/static/icons/icon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="512x512"
            href="/static/icons/icon-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/icons/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="192x192"
            href="/static/icons/icon-192x192.png"
          />

          {/* {this.props.styleTags} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
