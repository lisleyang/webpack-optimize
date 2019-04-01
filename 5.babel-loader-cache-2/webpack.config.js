const path = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
//794
module.exports = {
  mode: 'production',
  entry: {
    'app':'./src/main.js'
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js'
  },
  //1852 2574
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              // use: [{
              //   loader: 'cache-loader',
              //   options: {
              //     cacheDirectory: './node_modules/.cache/babel-loader',
              //     cacheIdentifier: '85939e9a'
              //   }
              // },{
              //   loader : "babel-loader"
              // }]
              use : 'babel-loader'
              
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
    })
  ]

}