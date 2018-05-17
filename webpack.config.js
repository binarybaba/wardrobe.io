var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = function(env){
    console.log(env);
    var config = {
        context: __dirname,
        entry: "./src/App.js",
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
        },
        devServer: {
            publicPath: '/public/',
            filename: "bundle.js",
            port:9000
        },
        stats: {
            colors: true,
            reasons: true,
            chunks: true,
        },
        resolve: {
            extensions: ['.js', '.json'],
        },
        module: {
            rules: [{
                enforce: 'pre',
                loader: 'eslint-loader',
                test: /\.js$/,
            }, {
                loader: 'html-loader',
                test: /\.html$/,
            },{
                loader: 'babel-loader',
                test: /\.js$/,
            },{
                loader:'css-loader',
                test:/\.css/
            },{
                loader:'url-loader',
                test:/\.png$/,
                exclude: /node_modules/,
            }],
        },
        "plugins": [
            new webpack.ProvidePlugin({
                "window.jQuery": "jquery"
            }),
        ]
    };
    if(env === "production") {
        config.plugins.push(new UglifyJSPlugin({
            sourceMap: true
        }))
    } else {
        config.devtool = "cheap-eval-source-map"
    }
    return config;
};