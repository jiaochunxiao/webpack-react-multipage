/**
 * @file wepback dev config
 */

const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const devConfig = {
    entry: {
        vendor: [
            "react", 'react-dom', 'mobx', 'mobx-react', 'react-router'
        ]
    },
    output: {
        publicPath: '',
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    devtool: 'source-map',
    // devServer: {
    //     contentBase: './dist',
    //     port: 3000,
    //     watchContentBase: true,
    //     proxy: {},
    //     stats: {
    //         hash: false,
    //         children: false,
    //         modules: false,
    //         chunkOrigin: false,
    //         source: false,
    //         chunksSort: false
    //     }
    // }
}
 module.exports = merge(
     baseConfig,
     devConfig
 )