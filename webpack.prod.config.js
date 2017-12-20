const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
            '@utility': path.resolve(__dirname, 'src/utility'),
            '@common': path.resolve(__dirname, 'src/app/common'),
            '@mui': 'material-ui',
            '@mIcons': 'material-ui-icons'
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
                   presets: ['env', 'react', 'stage-2']
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'                    
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new UglifyJsPlugin(),
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
    ]  
};

