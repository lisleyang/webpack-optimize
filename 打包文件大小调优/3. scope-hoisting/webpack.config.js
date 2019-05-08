const path = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');

module.exports = {
  mode: 'development',
  entry: {
    'app':'./src/main.js'
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
              use: {
                loader : "babel-loader"
              }
              
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(),'index.html'),
      filename: 'index.html',
      inject: 'body',
      chunks: ['app']
    }),
    //new ModuleConcatenationPlugin(),
  ]

}