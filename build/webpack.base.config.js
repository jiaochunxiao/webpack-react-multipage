const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin('css/[name].css');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const babelConf = require('./babel.config');

const multi = require('./util/entries');
module.exports = {
    entry: multi.entries,
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: babelConf.presets.concat(['react']),
                        plugins: babelConf.plugins
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: babelConf.presets.concat(['react']),
                        plugins: babelConf.plugins
                    }
                }
            },
            {
                test: /\.less/,
                use: extractLess.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        "postcss-loader",
                        "less-loader"
                    ]
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css']
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CommonsChunkPlugin({
            name: ['vendor'],
            filename: 'js/[name].js',
            inChunks: Infinity
        }),
        ...multi.webpackPlugins,
        extractLess
    ]
}