const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].prod.[contenthash].js',
        assetModuleFilename: 'img/[name][hash][ext]',
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.prod.[contenthash].css'
        }),
    ],
});