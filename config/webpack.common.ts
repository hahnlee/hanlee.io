import * as path from 'path';

import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

export const commonConfig: webpack.Configuration = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  output: {
    filename: 'bundle.js?v=[chunkhash]',
    path: path.resolve(__dirname, '..', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          useBabel: true,
          useCache: true,
        },
      },
      {
        test: /\.(png|svg|pdf|webmanifest)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]?v=[hash]',
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          interpolate: 'require',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'static', 'index.html'),
      hash: true,
    }),
  ],
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
    ],
    modules: [
      path.resolve(__dirname, '..', 'src'),
      path.resolve(__dirname, '..', 'node_modules'),
    ],
  },
};
