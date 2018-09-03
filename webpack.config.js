const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = 'none') => ({
  mode: env,
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        loader: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        type: 'json',
        test: /\.yaml$/,
        loader: 'yaml-loader',
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/views/index.hbs',
    }),
  ],
});
