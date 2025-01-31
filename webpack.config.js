const { watch } = require('fs');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: 'index.tsx',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, '/')
        },
        port: 8081,
        open: true
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader',
                    'css-loader',
                    'sass-loader']    
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {   test: /\.html$/i,
                loader: 'html-loader',
            }
      ]
    },
    resolve: {  //where should we find modules
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['.*','.js', '.jsx', '.ts', '.tsx'],
    },
    // watch:true,  //repack after changes
}



//TODO:  for production add plugin UglifyJsPlugin for minification