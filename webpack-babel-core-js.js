const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './babel-core-js/code.js',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Babel + core-js',
            filename: 'polyfill.html'
        })
    ],
    output: {
        filename: 'babel-core-js.js',
        path:  path.resolve(__dirname, './docs'),
    }
};