const webpack = require("webpack");

module.exports = {
    entry: "./src/browser-exports.js",
    output: {
        path: "./build",
        filename: "RingcentralClient.js",
        library: "RingcentralClient",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};