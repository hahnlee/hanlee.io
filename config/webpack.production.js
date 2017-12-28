const path = require('path');

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { commonConfig } = require('./webpack.common');

const renderConfig = merge({}, commonConfig, {
  entry: path.resolve(__dirname, '..', 'src', 'export.js'),
  target: 'node',
  devtool: 'source-map',
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
  ],
  node: {
    fs: 'empty',
  },
});

module.exports = renderConfig;