const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const babelLoader = {
  path: 'babel-loader',
  query: {
    cacheDirectory: true,
    babelrc: false,
    plugins: [
      'react-hot-loader/babel',
      'transform-runtime',
    ],
    presets: ['react', ['es2015', { modules: false }], 'stage-0'],
  },
};

const cssLoader = [
  { loader: 'style-loader' },
  {
    loader: 'css-loader',
    query: {
      modules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]',
      importLoaders: 1,
    },
  },
  { loader: 'postcss-loader' },
];

module.exports = {
  target: 'web',
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, 'build'),
  performance: { hints: false },
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.resolve(__dirname, 'client/index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].chunk.js',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'client')],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './client'),
    publicPath: '/',
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: { chunks: false },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'client'),
        loader: 'happypack/loader?id=babel',
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'client'),
        loader: 'happypack/loader?id=css',
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(eot|ttf|wav|mp3)$/, loader: 'file-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HappyPack({ id: 'babel', loaders: [babelLoader], cache: true }),
    new HappyPack({ id: 'css', loaders: cssLoader, cache: true }),
    new HtmlWebpackPlugin({ hash: true, template: path.resolve('client/index.html') }),
    new BrowserSyncPlugin(
      { browser: 'Chrome', host: 'localhost', port: 3000, proxy: 'http://localhost:8080/' },
      { reload: false }),
  ],
};
