const webpack = require("webpack");

module.exports = [{
    entry: "./dist/src/Client.js",
    output: {
        path: "./dist",
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
            { test: /\.css$/, loader: "style!css" },
            { test: /\.json$/, loader: "json" }
        ]
    }
}, {
    entry: "./dist/test/tests.js",
    output: {
        path: "./dist",
        filename: "tests.js"
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: "source-map-loader"
        }],
        loaders: [
            { test: /\.json$/, loader: "json" }
        ]
    },
    devtool: 'source-map',
    node: {
        fs: "empty"
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({})]
}];