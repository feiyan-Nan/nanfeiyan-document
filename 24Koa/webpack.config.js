const path = require('path');
const nodeExcternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConfig = {
  mode: 'development',
  target: 'node',
  entry: {
    server: path.join(__dirname, 'src/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist/'),
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: [path.join(__dirname, '/node-modules')],
      },
    ],
  },
  externals: [nodeExcternals()],
  plugins: [new CleanWebpackPlugin()],
  node: {
    global: true,
    process: true,
    Buffer: true,
    setImmediate: true,
    __dirname: true,
    __filename: true,
    path: true,
  },
};
module.exports = webpackConfig;
