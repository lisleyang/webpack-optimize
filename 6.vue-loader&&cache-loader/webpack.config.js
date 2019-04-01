const path = require('path')
const HtmlWebpackPlugin    = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
            use: {
              loader : "babel-loader"
            }
          },
          // {
          //   test: /\.vue$/,
          //   use : [{
          //     loader: 'cache-loader',
          //     options: {
          //       cacheDirectory: './node_modules/.cache/vue-loader',
          //       cacheIdentifier: '52f9a442'
          //     }
          //   },
          //   /* config.module.rule('vue').use('vue-loader') */
          //   {
          //     loader: 'vue-loader',
          //     options: {
          //       compilerOptions: {
          //         preserveWhitespace: false
          //       },
          //       cacheDirectory: './node_modules/.cache/vue-loader',
          //       cacheIdentifier: '52f9a442'
          //     }
          //   }]
          // }
          {
            test : /\.vue$/,
            use : {
              loader : 'vue-loader'
            }
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
    new VueLoaderPlugin()
  ]

}