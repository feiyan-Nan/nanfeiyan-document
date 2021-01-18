const { merge } = require('webpack-merge');
const { join } = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: join(__dirname, 'dist'), //启动服务的根目录
    host: 'localhost',
    port: 8080,
    compress: true, // 服务器返回给浏览器的时候是否启动gzip压缩
    open: true,
  },
  module: {},
  plugins: [],
});
