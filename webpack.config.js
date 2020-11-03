// file read by webpack
let path = require('path');

module.exports = {
entry: './src/index.js',
mode: 'development',
devServer: {
    open: true
},
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    }
}

