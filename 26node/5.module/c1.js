
const b1 = require('./b1');

module.exports = '我是c1'
console.log(b1,'c1');



// commonjs 的特点就是内部会维护一个属性 loaded
// 内部会用一个变量来表示这个模块是否加载完成
// 如果没有加载完成 只会运行到已经加载的部分

// c1 -> b1 -> c1（这时候 b1 没有给module.exports 赋值）
// 所以c1 中获取不到 b1导出的结果