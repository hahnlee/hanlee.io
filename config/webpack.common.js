const path = require('path');

const commonConfig = {
  entry: path.resolve(__dirname, '..', 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: [
            ['env', {
              targets: {
                node: 'current',
              },
            },],
            'react',
          ]
        },
      },
      {
        test: /\.(png|svg|pdf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]?[hash]',
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname, '..', 'src'),
      path.resolve(__dirname, '..', 'node_modules'),
    ],
  },
};

module.exports = {
  commonConfig: commonConfig,
};