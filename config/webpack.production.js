const path = require('path');

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { commonConfig } = require('./webpack.common');

const renderConfig = merge({}, commonConfig, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer(),
                ],
              },
            },
            {
              loader: 'sass-loader',
            }
          ],
        })
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'static', 'index.html'),
      hash: true,
    }),
  ],
  node: {
    fs: 'empty',
  },
  mode: 'production',
});

module.exports = renderConfig;