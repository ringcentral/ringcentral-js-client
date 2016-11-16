const webpack = require("webpack");

module.exports = [{
    entry: "./src/Client.js",
    output: {
        path: "./build",
        filename: "ringcentral-client.min.js",
        library: "RingCentral"
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
    entry: "./test/tests.js",
    output: {
        path: "./build",
        filename: "tests.js"
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: "source-map-loader"
        }]
    },
    devtool: 'source-map',
    node: {
        fs: "empty"
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({})]
}];