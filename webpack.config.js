const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

const root = path.resolve(__dirname);
const pathConfig = {
    src: 'src',
    dist: 'dist'
};
const fileConfig = {
    main: 'bundle.js',
    vendor: 'vendor.js',
    chunk: '[id].lazy.js',
    indexHtml: 'index.html'
};

module.exports = {
    context: path.join(root, pathConfig.src),
    entry: {
        app: './index.js',
        vendor: [
            'material-ui'
        ]
    },
    resolve: {
        alias: {
            '@utility': path.resolve(__dirname, 'src/utility')
        },
        extensions: ['.js', '.jsx', '.json', '.css', '.less', '.sass']
    },
    resolveLoader: {
        alias: {
          '@lazy': 'bundle-loader?lazy'
        }
    },
    output: {
        path: path.join(root, pathConfig.dist),
        publicPath: '/',
        filename: fileConfig.main,
        chunkFilename: fileConfig.chunk
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                   presets: ['env', 'react']
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'                    
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
        new CleanWebpackPlugin([
            pathConfig.dist
        ], {
            root: root,
            verbose: true,
            dry: false
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([{
            from: 'assets',
            to: 'assets'
        }]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: fileConfig.vendor
        }),
        new HtmlWebpackPlugin({
            template: path.join(root, pathConfig.src, fileConfig.indexHtml),
            filename: fileConfig.indexHtml,
            hash: false
        })
    ],
    devServer: {
        port: '8000',
        host: 'localhost',
        watchOptions: {
            ignored: /node_modules/
        }        
    }    
};

