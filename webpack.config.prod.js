const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const babelLoader = {
  path: 'babel-loader',
  query: {
    cacheDirectory: false,
    babelrc: false,
    presets: ['react', ['es2015', { modules: false }], 'stage-0'],
    plugins: [
      'transform-runtime',
    ],
  },
};

const cssLoader = [
  {
    path: 'css-loader',
    query: {
      modules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]',
      importLoaders: 1,
    },
  },
];

const vendor = [
  'react', 'react-dom', 'react-router', 'react-motion', 'react-motion-ui-pack',
  'classnames',
  'chalk',
];

module.exports = {
  target: 'web',
  cache: false,
  devtool: false,
  context: path.resolve(__dirname, 'build'),
  performance: { hints: 'warning' },
  entry: {
    main: path.resolve(__dirname, 'client/index.jsx'),
    vendor,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'client')],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
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
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'happypack/loader?id=css',
          publicPath: '/build',
        }),
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'client'),
        loader: 'postcss-loader',
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(eot|ttf|wav|mp3)$/, loader: 'file-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new CleanPlugin(['build']),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new WebpackMd5Hash(),
    new HtmlWebpackPlugin({ hash: true, template: path.resolve('client/index.html') }),
    new InlineManifestWebpackPlugin({ name: 'webpackManifest' }),
    new HappyPack({ id: 'babel', loaders: [babelLoader], cache: true }),
    new HappyPack({ id: 'css', loaders: cssLoader, cache: true }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      filename: '[name].[chunkhash].js',
      minChunks: Infinity,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ChunkManifestPlugin({
      filename: 'manifest-chunk.json',
      manifestVariable: 'webpackManifest',
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { screw_ie8: true, warnings: false },
      output: { comments: false },
      sourceMap: false,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerPort: 8888,
      openAnalyzer: true,
      generateStatsFile: true,
      statsFilename: 'webpack.stats.json',
      logLevel: 'info',
    }),
  ],
};
