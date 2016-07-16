'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/dist'),
  entry: ['babel-polyfill', './main'],
  output: {
    path: path.join(__dirname, '/app'),
    publicPath: '/app/',
    filename: 'app.js'
  },
  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,
  watch: NODE_ENV == 'development',
  watchOption: {
    aggregateTimeout: 100
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'stage-1'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },      
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: [/node_modules/, /app/]
      }
    ]
  },
  devServer: {
    devtool: 'cheap-inline-module-source-map',
    hot: true
  }
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:       false,
        drop_console:   true,
        unsafe:         true
      }
    })
  );
}
