
const fs = require("fs"); // 文件系统模块 filesystem
const path = require("path"); // 路径模块 进行路径操作


const Promise = require('./promise')
let promise = new Promise((resolve,reject)=>{
    resolve('ok')
})


// resolve的一个结果 会传递给下一次then的成功
// 链式调用 return this $().html().css().height()
// 为了解决then的状态可以切换，所以每次调用then后需要返回一个新的promise


let promise2 = promise.then((data)=>{
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve('ok')
                },1000)
            }))
        },1000)
    })
})
promise2.then((data)=>{ // data = 100
    console.log(data,'success')
},(err)=>{
    console.log(err,'fail')
})




/*
let x = {};
Object.defineProperty(x,'then',{
    get(){
      throw new Error()
    }
})
x.then
*/