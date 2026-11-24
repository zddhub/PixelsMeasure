const webpack = require('webpack');
const { SiteDiscoveryPlugin, homepageDiscovery, languages, defaultLocale } = require('./site-discovery');

module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/PixelsMeasure/" : "/",
  chainWebpack(config) {
    const html = config.plugin('html');
    const HtmlPlugin = html.get('plugin');
    html.tap(([options]) => {
      const templateParameters = options.templateParameters;
      const localized = locale => ({
        ...options,
        templateParameters: (...args) => {
          const parameters = templateParameters(...args);
          parameters.discovery = homepageDiscovery(locale);
          return parameters;
        }
      });
      for (const { tag, path } of languages) {
        if (tag === defaultLocale) continue;
        config.plugin(`html-${tag}`).use(HtmlPlugin, [{
          ...localized(tag),
          filename: path + 'index.html'
        }]);
      }
      return [localized(defaultLocale)];
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
