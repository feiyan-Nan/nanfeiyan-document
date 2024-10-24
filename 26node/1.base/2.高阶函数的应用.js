// 函数参数的预置 将函数的参数 进行一个保留 (闭包)
// 闭包就是函数定义的作用域和执行的作用域不是同一个 此时就会产生闭包 (靠谱)

// 函数的柯里化   偏函数  都是基于高阶函数来实现的 



// 判断类型 有常见的4种方式
// typeof 可以判断基本类型，  typeof null === 'object'
// instanceof 可以判断某个类型是否属于谁的实例
// Object.prototype.toString 需要再对象的原型中在找到方法
// constructor [].constrotor Array  {}.constructor  Object

/*
function isType(typing,val){

    return (Object.prototype.toString.call(val)) === `[object ${typing}]`
}

// 可不可以将参数预置到函数内部

console.log(isType('Object',{}))
console.log(isType('String','abc'))
console.log(isType('Number',123))
*/


function isType(typing){
    // Number
    return function isNumber(val){
        return (Object.prototype.toString.call(val)) === `[object ${typing}]`
    }
}

let utils = {};

['Number','Boolean','String'].forEach(type => {
    utils[`is${type}`] = isType(type)
});

console.log(utils.isNumber('abc'))


// isType方法的范围比较大  -》 小范围isNumber （函数柯里化，将范围具体化 可以实现批量传递参数  通用的函数科里化的实现）
// 函数反科里化  Object.prototype.toString.call(val)  => toString()


// 高阶函数的作用 1） 可以扩展功能  2） 可以对函数的参数进行预制参数