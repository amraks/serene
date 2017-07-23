const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'serene_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'templates/index.html', to: 'index.html' }
    ])
  ]
}
