const path = require('path');

module.exports = {
    devtool: 'eval',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.css$/, loader: 'style!css' },
        ],
    },
    resolve: {
        alias: {
            'admin-on-rest': path.join(__dirname, '..', 'src'),
        },
    },
};
// module.exports = function(webpackConfig) {
//   webpackConfig.babel.plugins.push('transform-runtime');

//   // Parse all less files as css module.
//   webpackConfig.module.loaders.forEach(function(loader, index) {
//     if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
//       loader.test = /\.dont\.exist\.file/;
//     }
//     if (loader.test.toString() === '/\\.module\\.less$/') {
//       loader.test = /\.less$/;
//     }
//   });

//   return webpackConfig;
// };