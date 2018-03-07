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
                chunks: [filename],
                title: 'test',
                minChunks: Infinity,
                chunksSortMode: 'manual',
                inject: true,
                template: 'index.html'
            })
        )
    });

module.exports = {
    entries: entries,
    webpackPlugins: webpackPlugins
}