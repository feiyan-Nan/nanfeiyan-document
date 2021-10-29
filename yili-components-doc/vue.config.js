process.env.VUE_APP_REBUILDTIME = new Date() // 版本时间戳
const debug = process.env.NODE_ENV !== 'production'
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  outputDir: process.env.OUTPUT_DIR,
  runtimeCompiler: true,
  configureWebpack: config => {
    if (debug) {
      config.devtool = 'source-map'
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '伊利前端组件库'
        return args
      })
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@source', resolve('./_source'))
      // .set('vue$', 'vue/dist/vue.esm-bundler.js')
  },

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // css相关配置
  css: {
    // 开启 CSS source maps?
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/scss/variables.scss";
        `
      }
    }
  }
}
