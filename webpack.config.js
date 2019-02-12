const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist/"),
        filename: "index-bundle.js"
    },
    module: {
        rules: [{ test: /\.jsx?/, loaders: ['babel-loader'], exclude: /(node_modules|bower_components|public)/ },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/images/[name]-[hash:8].[ext]'
                        },
                    },
                ]
            },
            {
                test: /\.(ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/fonts/[name]-[hash:8].[ext]'
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devtool: 'source-map'
};
