const webpack = require('webpack');
const { SiteDiscoveryPlugin, discovery } = require('./site-discovery');

module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/PixelsMeasure/" : "/",
  chainWebpack(config) {
    config.plugin('html').tap(([options]) => {
      const templateParameters = options.templateParameters;
      options.templateParameters = (...args) => {
        const parameters = templateParameters(...args);
        parameters.discovery = discovery;
        return parameters;
      };
      return [options];
    });
  },
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new SiteDiscoveryPlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'PixelsMeasure',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
