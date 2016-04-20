var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('style.css');

module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname + '/build',
        filename: "app.js",
    },
    plugins: [
        extractCSS
    ],
    node: {
        fs: "empty"
    },
    module: {
        loaders: [
            // Extract css files
            {test: /\.(css|scss)$/i, loader: extractCSS.extract(['css','sass'])},
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                  presets: ['react', 'es2015']
                }
            }
        ],
    }
};
