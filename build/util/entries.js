/**
 * @file webpack base config
 * @author jiaochunxiao(jiaochunxiao2008@163.com)
 */
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const removeExtension = require('./removeExtension');

const globConfig = {
    cwd: path.join(__dirname, '../../src/entry'),
    ignore: []
};

const entries = {};
const webpackPlugins = [];
glob
    .sync(
        '**/index.js',
        globConfig
    )
    .map(file => {
        let filename = removeExtension(file);
        entries[filename] = path.resolve(__dirname, `../../src/entry/${filename}`);
        webpackPlugins.push(
            new HtmlWebpackPlugin({
                filename: filename.split('/')[0] + '.html',
                chunks: ['vendor', filename],
                minChunks: Infinity,
                chunksSortMode: 'manual',
                // chunksSortMode: (c1, c2) => {
                //     let orders = ['vendor', 'app'];
                //     let o1 = orders.indexOf(c1.names[0]);
                //     let o2 = orders.indexOf(c2.names[0]);
                //     return o1 - o2;
                // },
                template: 'index.html'
            })
        )
    });

module.exports = {
    entries: entries,
    webpackPlugins: webpackPlugins
}