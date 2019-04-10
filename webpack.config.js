var path = require("path");
// import path from "path";
const PATHS = {
    src: path.join(__dirname, 'src'),
    modules: path.join(__dirname, 'node_modules')
};

module.exports = {
    entry: path.resolve(PATHS.src, 'main.jsx'),
    output: {
        path: path.resolve(PATHS.src, 'dist'),
        filename: 'bundler-main-webpack.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [PATHS.src, PATHS.modules],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                include: [PATHS.src, PATHS.modules],
                use:  ['style-loader', 'css-loader']
            }
        ]
    }
};
