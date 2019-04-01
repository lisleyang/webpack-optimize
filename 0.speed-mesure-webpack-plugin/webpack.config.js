const path = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const webpack  = require('webpack')

const src            = path.resolve(process.cwd(), 'src'); // 源码目录
const dist            = path.resolve(process.cwd(), 'dist'); // 源码目录
const evn = process.env.NODE_ENV == "production" ? "production" : "development";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({

  mode: 'production',

  entry: {
    'app':path.resolve(src, 'js', 'main.js')
  },

  module: {
      rules: [
          {
              test: /\.jsx?$/,
              //exclude: /node_modules/,
              use: "babel-loader"
          },
          {
              test: /\.less$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../'
                  }
                },
                "css-loader",
                "less-loader"
              ]
          }
      ]
  },

  output: {
    path: dist,
    filename: '[name].js'
  },

  resolve: {
    alias: {
        // 常用组件路径map
        jquery: path.resolve(src, "components", "jquery")
    },
    extensions: ['.js']
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
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

})