
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'app'),

  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './index.jsx',
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: './dist',
    publicPath: '/',

    historyApiFallback: true,
    // respond to 404s with index.html
  },

  devtool: 'eval',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          resolve(__dirname, 'node_modules'),
          resolve(__dirname, 'semantic'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|gif|png|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            options: {
              context: '/',
              name: '../[path]/../[name].[ext]',
            },
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR upda

    new CleanWebpackPlugin(['dist']),
    // clean out dist pre-build

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    })
  ],

  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),

    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },
};
