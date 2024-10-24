
// 1) Module._load  加载这个模块
// 2) Module._resolveFilename( 处理路径为绝对路径， 并且添加文件后缀
// 3) 拿到文件 看一下文件是否加载过 Module._cache 是否缓存过，如果缓存过则直接结束
// 4) 如果没有缓存过 则会new Module(id,exports = {})  exports 是对应模块的导出结果，默认为空
// 5) 将创建的模块缓存
// 6) 根据文件加载模块 （给module.exports 赋值）
// 7) 找到对应的文件后缀 做加载操作 Module._extensions[.js](this, filename); 策略模式
// 8) 读取文件内容 fs.readFileSync(filename, 'utf8');
// 9) 将字符串执行  module._compile 编译字符串
// 10) 包裹函数 'exports','require','module','__filename', '__dirname',
// module.exports = exports 
// this = exports
// 11) Reflect.apply(this,[exports,require,module,filename,path.dirname])   module.exports = 'abc'
// 最终返回的是 module.exports 

const  fs = require("fs");
const path = require("path")
const vm = require('vm')

function Module(id){
    this.id = id;
    this.exports = {}
}

Module._extensions = {}
Module._extensions['.js'] = function(module){
   const content = fs.readFileSync(module.id,'utf-8');
   let fn = vm.compileFunction(content,[
    'exports','require','module','__filename', '__dirname',
   ])
   let exports = module.exports;
   let thisValue = exports
   let filename = module.id;
   let dirname = path.dirname(filename)
   // 函数执行的时候  会自动的给module.exoports 赋值
   Reflect.apply(fn,thisValue,[exports,req,module,filename,dirname]); // 如果用户没有写module.exports
}
Module._extensions['.json'] = function(module){
    const content = fs.readFileSync(module.id,'utf-8');
    // jsonj 就是直接将结果富裕到module.exports 上即可
    module.exports =  JSON.parse(content)
}

// 加载模块
Module.prototype.load = function(){
    let ext =  path.extname(this.id); // js
    // 根据后缀加载文件
    Module._extensions[ext](this)
}
Module._resolveFilename = function(id){
    const filepath =  path.resolve(id);
    if(fs.existsSync(filepath)) return filepath;

    // 没有这个文件 尝试添加后缀 
    let exts = Reflect.ownKeys(Module._extensions);
    for(let i = 0; i < exts.length;i++){
        let newFilePath = filepath + exts[i];
        if(fs.existsSync(newFilePath)) return newFilePath;
    }
    throw new Error('Connot found module')
}
Module._cache = {}
function req(id){
    // 解析文件的绝对路径 添加后缀
    let filename = Module._resolveFilename(id);
    let cacheModule;
    if(cacheModule = Module._cache[filename]){
        return cacheModule.exports; // 这里有缓存的功能，如果
        // 引用的变量内的值变化了会更新，
    }

    let module = new Module(filename);
    Module._cache[filename] = module

    module.load(); // 这里就是加载文件 给module.exports 赋值
    return module.exports // {}
}

setInterval(()=>{
    const r = req('./a.js')
    console.log(r)
},1000)


// 掌握核心的加载模块的方式  webpack最终打包的结果也是这个样子的
// 自己调试一下 代码
