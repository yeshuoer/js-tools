const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: {
        'js-tools': './src/index.js',
        'js-tools.min': './src/index.js',
    },
    output: {
        filename: '[name].js',
        library: 'JsTools',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ],
    }
}
