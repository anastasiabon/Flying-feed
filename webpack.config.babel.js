import path from 'path'
import nodeExternals from 'webpack-node-externals'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const client = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    filename: './app/static/index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
}

const server = {
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals({
    modulesFromFile: true,
  })],
  entry: {
    js: './app/server.js',
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'server-es5.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      {
        test: path.join(__dirname, 'app'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
}

export default [client, server]



