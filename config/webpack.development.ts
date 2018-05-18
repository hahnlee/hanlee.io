import * as path from 'path';

import * as autoprefixer from 'autoprefixer';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';

import { commonConfig } from './webpack.common';

export default merge({}, commonConfig, {
  devtool: 'source-map',
  output: {
    filename: 'bundle.js?v=[hash]',
    path: path.resolve(__dirname, '..', 'out'),
  },
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    commonConfig.entry as string,
  ],
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
            options: {
              plugins: [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, '..', 'out'),
    compress: true,
    port: 3000,
    hot: true,
    inline: true,
  },
  mode: 'development',
});
