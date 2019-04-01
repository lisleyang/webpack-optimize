const path = require('path')
var webpack = require('webpack')

module.exports = {
    entry : './src/index.js',
    output: {
        path : path.join(__dirname,'dist'),
        filename  : "[name].[hash].js"
    },
    // plugins : [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //           warnings: false
    //         },
    //         sourceMap: true
    //       }),
    // ]
}