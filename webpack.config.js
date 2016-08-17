const webpack = require("webpack");

module.exports = {
    entry: "./src/browser-exports.js",
    output: {
        path: "./build",
        filename: "RingCentralClient.js",
        library: "RingCentralClient",
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