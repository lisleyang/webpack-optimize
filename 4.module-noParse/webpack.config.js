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
  resolve : {
    // //resolve.modules告诉webpack去哪些目录下寻找第三方模块，默认值为['node_modules']，会依次查找./node_modules、../node_modules、../../node_modules。
    // modules : [path.resolve(__dirname, 'node_modules')],
    // mainFields:['main'],
    // alias : {
    //   'jquery' : path.resolve(__dirname,'./node_modules/jquery/dist/jquery.min.js'),
    //   'lodash' : path.resolve(__dirname,'./node_modules/lodash/index.js'),
    //   'vue' : path.resolve(__dirname,'./node_modules/vue/dist/vue.esm.js')
    // }
    // alias: {
    //   //moment: path.resolve(__dirname,"./node_modules/moment/moment.js")
    //   'jquery' : path.resolve(__dirname,'./node_modules/jquery/dist/jquery.min.js'),
    // }
  },
  module: {
      //noParse : [/jquery|lodash/],
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