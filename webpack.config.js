var webpack = require('webpack'),
    path = require('path'),
    glob = require('glob');

function getExternal(root, cjs, amd) {
    if (!cjs) cjs = root;
    return {
        amd: amd || cjs,
        commonjs: cjs,
        commonjs2: cjs,
        root: root
    };
}

function createConfig(config) {

    return {

        debug: true,
        devtool: '#source-map',

        externals: config.externals,
        entry: config.entry,

        output: {
            filename: './build/[name]',
            libraryTarget: 'umd', //TODO RCSDK.noConflict()
            library: ['RingCentral', 'Client'],
            sourcePrefix: ''
        },

        resolve: {
            extensions: ['', '.ts', '.js', '.json']
        },

        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader?sourceMap&target=ES5' //TODO Use typescript-loader and tsconfig.json
                }
            ]
        },

        node: {
            buffer: false
        },

        plugins: [],

        watchDelay: 200

    };

}

module.exports = [
    createConfig({
        entry: {
            'ringcentral-client.js': ['./src/Client.ts'],
            'tests/specs.js': glob
                .sync('src/**/*-spec.ts')
                .sort(function(a, b) { return b.localeCompare(a); })
                .concat('src/test/mocha.ts') // this one will be exported
                .map(function(f) {
                    return './' + f;
                })
        },
        externals: {
            '../Client': getExternal(['RingCentral', 'Client'], '../ringcentral-client'),
            'ringcentral': getExternal(['RingCentral', 'SDK'], 'ringcentral'),
            'soap': getExternal('soap'),
            'chai': getExternal('chai'),
            'sinon': getExternal('sinon'),
            'sinon-chai': getExternal('sinonChai', 'sinon-chai'),
            'mocha': getExternal('mocha')
        }
    })
];

//console.log('Webpack Config');
//console.log(JSON.stringify(module.exports, null, 2));
