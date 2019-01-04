process.env.NODE_ENV = 'production'
process.env.BABEL_ENV = 'production'
const path = require('path')
const webpack = require('webpack')
const NodemonPlugin = require('nodemon-webpack-plugin')
const cssModuleRegex = /\.module\.css$/;
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
module.exports = {
    entry: ["@babel/polyfill", __dirname + "/index.js"],
    target: "node",
    node: {
        __filename: false,
        __dirname: false
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: "server.js"
    },
    plugins: [
        new NodemonPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
    ],
    module: {
        
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-syntax-dynamic-import",
                            "react-loadable/babel"
                        ],
                    },
                }
            },
            {
                test: cssModuleRegex,
                use: [
                    {
                      loader: "css-loader/locals",
                      options: {
                        modules: true,
                        getLocalIdent: getCSSModuleLocalIdent,
                      }
                    },
                ]
            },
            { test: /\.css$/, exclude: /\.module.css$/, loader: 'ignore-loader' },
            {
                test: [/\.bmp$/, /\.gif$/, /\.svg$/, /\.jpe?g$/, /\.png$/],
                loader: 'file-loader',
                options: {
                    name: '/static/media/[name].[hash:8].[ext]',
                    emitFile: false //não copiar os arquivos, apenas colocar o caminho dos mesmos
                },
            }
        ],
    }
}