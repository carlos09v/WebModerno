const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const uglifyCss = require('css-minimizer-webpack-plugin')
const uglifyJS = require('terser-webpack-plugin')
const uglifyHtml = require('html-minimizer-webpack-plugin')

module.exports = {
    // Vai ser gerado arquivo BUILD de modo Desenvolvimento
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        static: {
            directory: __dirname + '/public',
            watch: true
        },
        port: 9000
    },
    optimization: {
        minimizer: [
            new uglifyCss({}),
            new uglifyJS({
                parallel: true,
                terserOptions: {
                    ecma: 6
                }
            }),
            new uglifyHtml()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './assets/css/style.css'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/index.html', to: './index.html'},
                { from: './src/assets/imgs', to: './assets/imgs'}
            ]
        })
    ],
    module: {
        // Loaders
        rules: [
            {
                test: /\.s?[ac]ss$/, // regex
                use: [
                    // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                    MiniCssExtractPlugin.loader, // Extrair em arquivo o CSS
                    'css-loader', // interpreta @import, url()...
                    'sass-loader' // interpreta @import, url()...
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/i,
                type: 'asset/resource'
            }
        ]
    }
}