const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',

  entry: './src/index.jsx',

  output: {
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  devServer: {
    port: 4000
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
