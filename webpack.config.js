const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

const VENDOR = [
  'react',
  'react-dom',
  'react-redux',
  'redux',
  'react-localize-redux',
  'browser-locale',
  'react-sound'
];

const config = {
  entry: isProduction
    ? {
        bundle: './src/index.js',
        vendor: VENDOR
      }
    : {
        bundle: [
          'react-hot-loader/patch',
          './src/index.js',
          'webpack/hot/only-dev-server'
        ],
        vendor: VENDOR,
        devServerClient: `webpack-dev-server/client?http://localhost:${port}`
      },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    publicPath: isProduction ? '/left-and-right/dist/' : '/'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      filename: isProduction ? '../index.html' : 'index.html',
      template: 'src/index.html',
      minify: {
        removeScriptTypeAttributes: true,
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
};

if (!isProduction) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
