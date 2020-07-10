// 自定义的loader加载器, loader最后的返回值就是可执行的js字符串
/*
module.exports = (source, a, b) => {
  // 加载到的模块内容 => '# About\n\nthis is a markdown file.'
  console.log(source, a, b)
  // 返回值就是最终被打包的内容
  return "var a = 2; console.log(a)"
}
*/



const marked = require('marked')

module.exports = source => {
  const html = marked(source)
  return html
}
