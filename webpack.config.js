const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/code.js',
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Original script',
            filename: 'original.html'
        })
    ],
    output: {
        filename: 'original.js',
        path: path.resolve(__dirname, './docs')
    }
};