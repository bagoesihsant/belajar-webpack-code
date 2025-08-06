const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.dev.[contenthash].js',
        clean: true
    },
    devtool: false,
});