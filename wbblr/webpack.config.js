'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/dist'),
  entry: './main',
  output: {
    path: path.join(__dirname, '/app'),
    publicPath: '/app',
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
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /app/],
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /app/],
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },
      // {
      //   test: /\.js$/,
      //   exclude: [/node_modules/, /app/],
      //   loader: 'babel',
      //   query: { presets: ['es2015'] }
      // },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader:'url-loader?limit=1024&name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
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