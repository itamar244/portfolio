const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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

    resolveLoader: {
      modules: [
        'node_modules',
        resolve('./loaders'),
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx'],
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
          options: {
            partialDirs: resolve('./src/components/'),
          },
        },
        {
          test: /\.template\.jsx$/,
          loader: 'jsx-to-string-loader',
        },
        {
          test: /\.jsx$/,
          loader: 'jsx-loader',
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
        template: './src/views/index.template.jsx',
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
    config.plugins.push(new OptimizeCssAssetsPlugin());
  } else {
    CSS_LOADERS.unshift('style-loader');
  }

  if (env === 'development') {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return config;
};
