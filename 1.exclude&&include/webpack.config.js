const path = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    'app':'./src/js/main.js'
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js'
  },
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: "babel-loader"
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(),'index.html'),
      filename: 'index.html',
      inject: 'body',
      chunks: ['app']
    })
  ]

}