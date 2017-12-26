const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin('css/[name].css');

const babelConf = require('./babel.config');

const multi = require('./util/entries');
module.exports = {
    entry: multi.entries,
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
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
        ...multi.webpackPlugins,
        extractLess
    ],
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: '3000'
    }
}