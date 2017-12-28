const webpack = require('webpack');
const merge = require('webpack-merge');

const { commonConfig } = require('./webpack.common');

const renderConfig = merge({}, commonConfig, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
          }
        ],
      },
    ],
  },
});

module.exports = renderConfig;