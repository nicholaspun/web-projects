var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map', // Line numbers for debugging
  entry: [ // Where webpack looks for our files
    // first two: for webpack-dev-server and hot reloading
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src' // By default looks for index.js
  ],
  output: { // for production - not used by webpack
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets=react',
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
