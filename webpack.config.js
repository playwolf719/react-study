
var path = require('path');

var dir_js = path.resolve(__dirname, 'MyJs');
var dir_build = path.resolve(__dirname, 'build');

// var dir_html = path.resolve(__dirname, 'html');
var dir_css = path.resolve(__dirname, 'css');

var es3ifyPlugin = require('es3ify-webpack-plugin');


module.exports = {
    entry: path.resolve(dir_js, 'Entry.js'),
    output: {
        path: dir_build,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        // ie 8
        new es3ifyPlugin(),
    ],
    externals:{
    }
};