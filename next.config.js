// const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const withOffline = require('next-offline')
const withCSS = require("@zeit/next-css");

// module.exports = withCSS({
//   cssModules: true
// });

// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: "empty"
//     };

//     config.plugins.push(
//       new SWPrecacheWebpackPlugin({
//         minify: true,
//         staticFileGlobsIgnorePatterns: [/\.next\//],
//         runtimeCaching: [
//           {
//             handler: "networkFirst",
//             urlPattern: /^https?.*/
//           }
//         ]
//       })
//     );

//     return config;
//   }
// };

const nextConfig = withCSS({
  cssLoaderOptions: {
    url: false
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };
    // config.plugins.push(
    //   new SWPrecacheWebpackPlugin({
    //     minify: true,
    //     staticFileGlobsIgnorePatterns: [/\.next\//],
    //     runtimeCaching: [
    //       {
    //         handler: "networkFirst",
    //         urlPattern: /^https?.*/
    //       }
    //     ]
    //   })
    // );

    return config;
  }
});

module.exports = withOffline(nextConfig)