/**
 * @file wepback dev config
 */

const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const devConfig = {
    output: {
        publicPath: '',
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './',
        port: 3000,
        watchContentBase: true,
        proxy: {}
    }
}
console.log(merge(baseConfig, devConfig));
 module.exports = merge(
     baseConfig,
     devConfig
 )