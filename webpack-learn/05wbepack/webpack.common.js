const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dayjs = require('dayjs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    // 输出的文件夹只能是绝对路径
    path: path.join(__dirname, 'dist'),
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
      publishDate: `${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
      // 排除 themes.js
      // excludeChunks: [...Object.keys(require('./config/themes.config')), 'mobile'],
      minify: false,
    }),
  ],
};
