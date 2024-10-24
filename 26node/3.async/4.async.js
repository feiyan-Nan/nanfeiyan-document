const fs = require("fs/promises");
const path =require('path')
async function readFile() {
    try{
        let data1 = await fs.readFile(path.resolve(__dirname,"a.txt"), "utf8");
        let data2 = await fs.readFile(path.resolve(__dirname,data1), "utf8");
        return data2; // 30
    }catch(e){
        console.log(e)
    }
  }

// async + await = 编译成了( generator + co)  语法糖


// async函数返回的就是一个promise  co(readFile())


readFile().then(data=>{
    console.log(data)
})


// 回调 -》 promise -》 generator + co -> async + await

// 浏览器的事件环 （同步、异步） 如何执行的？ 