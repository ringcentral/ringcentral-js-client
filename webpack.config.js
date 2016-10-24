const webpack = require("webpack");

module.exports = [{
    entry: "./src/Client.js",
    output: {
        path: "./build",
        filename: "ringcentral-client.min.js",
        library: "ringcentral"
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
    entry: "./src/test/tests.js",
    output: {
        path: "./build",
        filename: "tests.js"
    },
    node: {
        fs: "empty"
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({})]
}];