var path = require('path');
var testHelperPath = path.resolve('test/testHelper.js');

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

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['jasmine'],
        files: [
            testHelperPath
        ],
        preprocessors: {
            [testHelperPath]: [ 'webpack', 'sourcemap']
        },
        reporters: [ 'mocha' ],
        webpack: {
            externals: {
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
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
            }
        },
        webpackMiddleware: {
            noInfo: true
        }
    })
};