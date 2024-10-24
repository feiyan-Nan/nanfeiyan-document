// 优点：链式调用，提供了一些常用的api  。promise的缺点 里面依旧是基于回调的（嵌套问题） 写起来还是像异步
// es6 中提供了 generator函数 （生成器），生成的是迭代器。 我们可以利用generator来简化异步编程问题 （async + await 前身 generator）

// generator 是一个语法 ， 可以让我们的异步代码 写的更像同步

// * + yield  类似 async + await
// genratror函数 可以将一个函数分成多段执行
function* fn() {
    yield 'hello'
    yield 'world'
    // ....
}
let iterator =  fn();
console.log(iterator.next()); // 碰到yield的就停止了，此时yiled的结果会作为value值，done:false
console.log(iterator.next()); // value:world done:false
console.log(iterator.next()); 

// 利用generator的机制 每次调用next后 都可以做一些处理 再去执行下一步 .then.then


// 类数组(有索引、有长度、可以迭代) -》 数组

// “元编程”就是可以改变js本身的功能
let likeArray = { // 数组中有Symbol(Symbol.iterator) 这个方法就是告诉浏览器如何迭代此对象
    0:1,
    1:2,
    2:3,
    3:4,
    length:4,
    [Symbol.iterator]:function *(){ // 迭代数组的时候 会自动调用next
        let i = 0;
        let len = this.length;
        while(len !== i){
            yield this[i++]
        }
    }
    // [Symbol.iterator](){ // 此方法要返回一个迭代器
    //     let i = 0;
    //     // this
    //     return {
    //          next:()=>{
    //             return {value:this[i],done:this.length === i++}
    //         }
    //     }
    // }

}
// 迭代数组中每一项，将每一项放到新数组中
let arr = [...likeArray] // ...这个操作会去调用迭代器
console.log(arr)

/*
let obj = { // Symbol的用法
    get [Symbol.toStringTag](){
        return 'zf'
    }
};
console.log(Object.prototype.toString.call(obj))
*/