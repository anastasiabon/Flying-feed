var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    // devtoolLineToLine: true,
    // sourceMapFilename: "./index_bundle.js.map",
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
    ],
    loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-2']
                }
            }
        ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve('./app'),
      path.resolve('./app/components'),
      path.resolve('./node_modules')
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
  ]
};