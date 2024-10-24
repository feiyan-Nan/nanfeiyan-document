
// node 中有三种模块  
// 1） 内置模块、核心模块 （不用安装 ， 不用通过相对路径引入，node提供的）
// 2) 文件模块， 自己写的 通过相对路径来引用的  
// 3) 第三方模块 需要安装使用和内置模块一样 （不需要加路径）
const fs =require('fs');

// readFile  readFileSync (fs 中有两套方法 1套是同步的 1套是异步的)

// 读取文件时如果文件不存在都会报错， 读取的特点
// let content = fs.readFileSync('./note1.md','utf8');// 同步阻塞， 适合读取小文件 模块化我们可以采用readFileSync来读取文件

let exisits = fs.existsSync('./note.md'); // 此方法只用同步方法，异步方法不符合规范，所以不采用
console.log(exisits);



// 对文件的操作 一般不采用相对路径 ， 相对路径不明确
const path = require('path');

// __dirname 代表的是当前文件所在的目录 是一个绝对路径，而且不可变
console.log(path.join(__dirname,'a','b','c','d','.','/','..')); // 会根据系统的分割符 将对应的路径拼接在一起
console.log(path.resolve(__dirname,'a','b','/')); // 根据执行的路径 解析出一个绝对路径, 默认是可以变的 （根据执行的路径来发生变化）

// path.resolve 和 path.join 可以互相转化，但是resovlve不能遇到/ 会回到根路径 , 如果只是拼接则采用join


console.log(path.extname('a.min.js')); // 获取后缀名 
console.log(path.dirname('a/b')); // 获取父路径  == __dirname



// vm node中的虚拟机模块  = new Funciton()

// node的模块化实现 是读取文件， 让读取到的内容 让他执行   

// eval 会以来外层的作用域 (不能用作模块化的实现，模块化要求就是 互相不影响)
let abc = 100;
// eval('console.log(abc)')

// 可以包装成一个函数来找执行 

// let fn = new Function('console.log(abc)'); // 创建一个顶级的函数， 不依赖于上下文的实现 
// fn();



const vm = require('vm'); // node中的模块
// let fn = vm.compileFunction('console.log(abc)'); // 类似于new Function
// vm.runInThisContext('console.log(abc)'); // 用作沙箱 


// 内部会自动添加 .js .json 后缀来查找文件 


// console.log(arguments); // 内部会对执行的文件 包装一个函数来实现模块化

// 1) 会对./a 这个文件 做路径处理  把相对路径处理成绝对路径 并且添加后缀找到文件
// 2) 会读取文件， 会将内容包装成一个函数, 最终返回module.exports 此时r的结果就是module.exports



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

