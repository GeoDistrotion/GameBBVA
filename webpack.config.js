const path = require('path')
const MiniCssExtrctactPlugin = require('mini-css-extract-plugin');

const SOURCE_DIR = path.join(__dirname, 'src/');
const DIST_DIR = path.join(__dirname, 'app/');

module.exports = {
    mode: 'development',
    entry: [
        `${SOURCE_DIR}/index.js`
    ],
    output: {
        path: DIST_DIR,
        publicPath: '/',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: { minimize: true }
                }
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new MiniCssExtrctactPlugin()
    ],
    devServer: {
        contentBase: DIST_DIR,
        port: 3000,
        publicPath: "http://localhost:3000/",
    },
}