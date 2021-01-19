const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dayjs = require('dayjs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const resolveToStaticPath = (relativePath) => resolve(__dirname, relativePath);
module.exports = {
  entry: './src/index.js',
  output: {
    // 输出的文件夹只能是绝对路径
    path: join(__dirname, 'dist'),
    // name是entry名字默认为main，
    filename: '[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    // 用来自动向模块内部注入变量,这样做就不需要每个去引入
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[id].[chunkhash:8].css',
    }),
    new HtmlWebpackPlugin({
      title: '加载中...',
      filename: 'index.html', // 产出的html文件名
      template: 'src/index.html',
      inject: 'body',
      hash: true, // 给引入的资源加上hash（?axcoe），防止缓冲
      // version: `${pkg.version}`,
      publish: `${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
      // 排除 themes.js
      // excludeChunks: [...Object.keys(require('./config/themes.config')), 'mobile'],
      minify: false,
    }),
  ],
  resolve: {
    // import 的时候自动找 .ts .tsx .js .json 的后缀
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': resolveToStaticPath('./src'),
    },
  },
};
