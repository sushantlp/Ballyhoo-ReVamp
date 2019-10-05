const withOffline = require("next-offline");
const withCSS = require("@zeit/next-css");

const nextConfig = withCSS({
  target: "serverless",

  cssLoaderOptions: {
    url: false
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
});

module.exports = withOffline(nextConfig);
