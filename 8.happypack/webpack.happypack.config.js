const path = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const HappyPack = require('happypack');

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
              use: 'happypack/loader?id=babel'
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 文件路徑
      template: path.resolve(process.cwd(),'index.html'),
      // src後面的路徑，前面不要加/ 
      filename: 'index.html',
      inject: 'body',
      // 需要加載的js，對應entries屬性名
      chunks: ['app']
    }),
    new HappyPack({
      id: 'babel',
      loaders: [ 'babel-loader' ],
    })
  ]

}