// 什么是高阶函数 ： 1） 一个函数返回一个函数那么这个函数就是高阶函数   2) 一个函数的参数是一个函数也是高阶函数


// 1） 我们可以通过包装一个函数，对现有的逻辑进行扩展


function core(a,b,c){
    console.log('核心代码',a,b,c)
}
Function.prototype.before = function(cb){ //  2) 一个函数的参数是一个函数也是高阶函数
    // 箭头函数的特点是： 1） 没有this 2) 没有arguments  3）没有prototype
    // this = core
    return (...args)=>{ // 1） 一个函数返回一个函数那么这个函数就是高阶函数
        cb()
        this(...args);
    }
}

let newCore = core.before(function(){
    console.log('before')
})

newCore(1,2,3); // 对原来的方法进行了扩展