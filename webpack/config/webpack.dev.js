const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.dev.[contenthash].js',
        clean: true
    },
    devtool: false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.dev.[contenthash].css'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        liveReload: true
    }
});