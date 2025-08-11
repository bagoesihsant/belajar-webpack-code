const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

const path = require('path');
const glob = require('glob');

const PATHS = {
  src: path.join(__dirname, "src"),
};

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
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
});