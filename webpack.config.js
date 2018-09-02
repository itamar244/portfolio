const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = 'none') => ({
  mode: env,
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './views/index.hbs',
    }),
  ],
});
