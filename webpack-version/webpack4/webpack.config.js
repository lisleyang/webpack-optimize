const path = require('path')

module.exports = {
    entry : './src/index.js',
    mode : 'none',
    output: {
        path : path.join(__dirname,'dist'),
        filename  : "[name].[hash].js"
    }
}