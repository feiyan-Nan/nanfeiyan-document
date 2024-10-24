// 上一个的输出是下一个的输入 


const fs = require("fs"); // 文件系统模块 filesystem
const path = require("path"); // 路径模块 进行路径操作
const { promisify } = require("util");



// function readFile(filepath){
//     let promise = new Promise((resolve,reject)=>{
//         fs.readFile(filepath,'utf8',function(err,data){
//             if(err) return reject(err);
//             resolve(data)
//         })
//     })
//     return promise
// }

/*
function promisify(fn){ // fn = fs.readFile
    return function(...args){ // readFile  剩余运算符
        let promise = new Promise((resolve,reject)=>{ // 可以将node中的异步api转换成promise的形式 （error-first）
            fn(...args,function(err,data){ // 展开运算符
                if(err) return reject(err);
                  resolve(data)
            })
        });
        return promise
    }
}
*/

let readFile = promisify(fs.readFile); // 高阶函数的概念

// 1) then链的特点，当then中成功和失败的回调函数返回的是一个promise。 内部会解析这个promise。并且将结果传递到外层的下一个then中
// 2）下一次then走成功还是失败，取决于当前promise的状态
// 3) 如果成功和失败返回不是一个promise， 那么这个结果会直接传递到下一个then的成功
// 4) 如果成功和失败的回调中跑出异常了 则会执行下一个then的失败
readFile(path.resolve(__dirname,'a.txt'),'utf8').then((data)=>{
    return readFile(data,'utf8'); // 返回的promise是成功则走到下一个成功,如果是失败则走到下一个人的失败
}).then((data)=>{
    console.log(data,'success')
},(err)=>{
    console.log(err,'fail')
    return true
}).then((data)=>{
    console.log(data,'success')
    throw new Error('出错')
}).then(()=>{},(err)=>{
    console.log(err)
})

// 让一个promise（then）变成失败有两种方式 一种是抛出异常, 返回一个失败的promise

/*
fs.readFile(path.resolve(__dirname,'a.txt'),'utf8',function(err,data){ // b.txt
    if(err) return console.log(err)
    fs.readFile(data,'utf8',function(err,data){
        if(err) return console.log(err)
        console.log(data)
    })
})
*/