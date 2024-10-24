
const fs = require("fs"); // 文件系统模块 filesystem
const path = require("path"); // 路径模块 进行路径操作


const Promise = require('./promise')
let promise = new Promise((resolve,reject)=>{
    reject('ok')
})

let promise2 = promise.then().then().then()

promise2.then((data)=>{
    console.log('成功2',data)
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