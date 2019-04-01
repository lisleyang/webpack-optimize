const path = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const webpack  = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = smp.wrap({

  mode: 'production',

  entry: {
    'app':path.resolve(__dirname, 'src','js', 'main.js'),
    'vendor' : path.resolve(__dirname,'src','js','vendor.js')
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js'
  },

  module: {
      rules: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
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
          },
          {
            test: /\.vue$/,
            use: [
              {
                loader: 'vue-loader'
              }
            ]
          }
      ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'index.html'),
      filename: 'index.html',
      inject: 'body',
      chunks: ['app']
    }),
    new VueLoaderPlugin(),

    new BundleAnalyzerPlugin()
  ]
})