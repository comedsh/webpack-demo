const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        another: './src/another-module.js'
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            name: "common"
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //        name: 'common' // 指定公共 bundle 的名称。
        // })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};