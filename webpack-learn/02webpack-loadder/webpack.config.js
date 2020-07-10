module.exports = {
  mode: "development",
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/, // 根据打包过程中所遇到文件路径匹配是否使用这个 loader
        use: ['style-loader',
          'css-loader']
      },
      {
        test: /\.md$/, // 根据打包过程中所遇到文件路径匹配是否使用这个 loader
        // use: './markdown-loader'
        use: ['html-loader',
          './markdown-loader']
      }
    ]
  }
}
