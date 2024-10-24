console.log(exports === module.exports);

// exports 就是module.exports 的别名
// exports = module.exports = {}

let obj = 1

setInterval(()=>{
    obj++;
},1000)



module.exports = obj;

global.c = 1;
// 这五个参数不是全局对象 但是可以直接访问，因为他们是函数的形参，也把这五个属性称之为全局对象

// 1.不能直接修改exports 的引用值，因为最终返回的是module.export
// 2.因为module.exports 和 exports 引用的是同一个人，所以修改空间内存放的变量，会修改module.exports结果
// 3.最终返回的是module.exports 所以 exports 和 modules.exports 不能混用
// 4.可以再global上挂属性 （在全局变量上添加了属性）
// 5.如果用户导出的一个引用值，引用的值变化了，则再次require可以拿到最新的
// 6.循环引用的问题 （写代码时，如果出现了 肯定需要拆分，合理化自己的逻辑）

