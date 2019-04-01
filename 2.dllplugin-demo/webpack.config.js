const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

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
              //exclude: /node_modules/,
              use: "babel-loader"
          }
      ]
  },
  plugins: [
    //dllPlugin关联配置
    // new webpack.DllReferencePlugin({
    //   context: process.cwd(), // 跟dll.config里面DllPlugin的context一致
    //   manifest: require(path.join(__dirname, "dll", "vendor-manifest.json"))
    // }),
    new HtmlWebpackPlugin({
      // 文件路徑
      template: path.resolve(process.cwd(),'index.html'),
      // src後面的路徑，前面不要加/ 
      filename: 'index.html',
      inject: 'body',
      // 需要加載的js，對應entries屬性名
      chunks: ['app']
    }),
    new AddAssetHtmlPlugin({ filepath: require.resolve('./dll/vendor.dll.js') })
  ]

}