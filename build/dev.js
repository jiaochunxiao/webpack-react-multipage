//var opn = require('opn')

const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

const devConfig = require('./webpack.dev.config');

const compiler = webpack(devConfig);

const {startServer} = require('../server/app');

startServer(() => {
    compiler.watch(
    {},
    (err, stats) => {
        console.log(stats.toString({
            hash: false,
            children: false,
            modules: false,
            chunkOptions: false,
            chunksSort: false,
            chunks: false,
            colors: true
        }))
    })
})