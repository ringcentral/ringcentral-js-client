const webpack = require("webpack");

module.exports = [{
    entry: "./build/src/Client.js",
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
}, {
    entry: "./build/src/test/tests.js",
    output: {
        path: "./build",
        filename: "tests.js"
    },
    externals: {
        "../Client": "RingCentralClient",
        "node-fetch": "fetch"
    },
    node: {
        fs: "empty"
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({})]
}];