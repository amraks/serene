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
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
	loader: 'url-loader',
	options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'templates/index.html', to: 'index.html' },
      { from: 'node_modules/normalize.css/normalize.css', to: 'css/normalize.css' }
    ])
  ]
}
