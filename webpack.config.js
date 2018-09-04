const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = (env = 'none') => {
  const CSS_LOADERS = ['css-loader', 'less-loader'];

  const config = {
    mode: env,
    entry: './src/index.js',

    devtool: env === 'development' ? 'source-map' : 'none',

    devServer: {
      hot: env === 'development',
    },

    module: {
      rules: [
        {
          test: /\.(css|less)$/,
          loader: CSS_LOADERS,
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
      new CopyWebpackPlugin([
        { from: './public', to: './' }
      ]),
    ],
  };

  if (env === 'production') {
    CSS_LOADERS.unshift(MiniCssExtractPlugin.loader);
    config.plugins.push(new MiniCssExtractPlugin({
      filename: 'styles.css',
    }));
  } else {
    CSS_LOADERS.unshift('style-loader');
  }

  if (env === 'development') {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return config;
};
