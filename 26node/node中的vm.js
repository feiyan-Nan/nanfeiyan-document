/*
讲解文章: https://blog.csdn.net/u012961419/article/details/121281538
new Function("console.log(a)")(); 只能访问到全局变量
eval 可以访问到局部变量


vm.runInThisContext(code) 会在当前全局变量的上下文，为运行的代码创建一个与当前作用域隔离的沙箱环境，环境中只能访问全局变量，无法访问当前作用域中的变量。
*/

// global.a = 100; // 挂在到全局对象global上
// var b = 200; // this !== global
// eval("console.log(b)")
// new Function("console.log(a)")()


// imitate-require.js
const fs = require('fs')
const path = require('path')
const vm = require('vm')

function Module(id) {
  this.id = id
  this.exports = {}

  console.log('校验重复加载是否缓存优先')
}

// 获取模块的绝对定位
Module._resolveFilename = function (filename) {
  // 利用 path 将 filename转化为绝对路径
  const absolutePath = path.resolve(__dirname, filename)

  // 判断路径对应的内容是否存在
  if (fs.existsSync(absolutePath)) {
    return absolutePath
  } else {
    // 如果不存在
    // 文件定位（尝试补足不同的后缀重新判断）
    const suffix = Object.keys(Module._extensions)

    for (let i = 0; i < suffix.length; i++) {
      const newPath = absolutePath + suffix[i]
      if (fs.existsSync(newPath)) {
        return newPath
      }
    }
  }
  throw new Error(`${filename} is not exists`)
}

// 不同类型文件的编译执行方法
Module._extensions = {
  '.js'(module) {
    // 读取
    let content = fs.readFileSync(module.id, 'utf-8')

    // 包装
    content = Module.wrapper[0] + content + Module.wrapper[1]

    // VM
    const compileFn = vm.runInThisContext(content)

    // 准备参数的值
    const exports = module.exports
    const dirname = path.dirname(module.id)
    const filename = module.id

    // 调用
    compileFn.call(exports, exports, myRequire, module, filename, dirname)
  },
  '.json'(module) {
    // 读取
    const content = JSON.parse(fs.readFileSync(module.id, 'utf-8'))

    module.exports = content
  }
}

// 用于包装模块内容的函数收尾字符串
Module.wrapper = ['(function (exports, require, module, __filename, __dirname) {', '})']

// 模块缓存
Module._cache = {}

// 执行加载（编译执行）
Module.prototype.load = function () {
  // 获取文件类型
  const extname = path.extname(this.id)

  Module._extensions[extname](this)
}

function myRequire(filename) {
  // 1. 路径分析
  const modulePath = Module._resolveFilename(filename)

  // 2. 缓存优先
  const cacheModule = Module._cache[modulePath]
  if (cacheModule) {
    return cacheModule.exports
  }

  // 3. 创建空对象加载目标模块
  const module = new Module(modulePath)

  // 4. 缓存已加载过的模块
  Module._cache[modulePath] = module

  // 5. 执行加载（编译执行）
  module.load()

  // 6. 返回数据
  return module.exports
}

const obj = myRequire('./123')

console.log(obj)

// 校验重复加载是否缓存优先
// myRequire('./m')


