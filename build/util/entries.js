/**
 * @
 * @author jiaochunxiao
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
        '**/*.js',
        globConfig
    )
    .map(file => {
        let filename = removeExtension(file);
        entries[filename] = path.resolve(__dirname, `../../src/entry/${filename}`);
        webpackPlugins.push(
            new HtmlWebpackPlugin({
                filename: filename + '.html',
                chunks: [filename],
                template: 'index.html'
            })
        )
    });

module.exports = {
    entries: entries,
    webpackPlugins: webpackPlugins
}