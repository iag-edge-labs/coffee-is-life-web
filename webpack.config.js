const webpack = require('webpack');
const cdn = 'http://localhost:8080/';

module.exports = {
  entry: {
    app: './src/index'
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: './',
    filename: 'lib/app.js',
    publicPath: cdn,
  },
  devServer: {
    stats: 'errors-only',
    contentBase: './',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      include: __dirname,
      loader: 'babel',
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /(\.jpe?g|\.png|\.gif|\.svg)$/i,
      exclude: /(node_modules|bower_components)/,
      loader: 'url',
      query: { limit: 1000, name: 'img/[name]-[hash].[ext]' },
    }],
  },
  node: {
    fs: 'empty'
  }
};
