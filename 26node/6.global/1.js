// global就是后端的全局对象 类似于前端的window

// settimeout  setInterval  setImmediate node中提供的
// Buffer 帮我们实现的阿禁止

// process 进程对象 node运行在进程中   platform   cwd/chdir  env   argv  nextTick

// cwd current working directory

const path = require("path");

process.chdir("../../"); // 此方法用的不多
console.log(process.cwd(), path.resolve()); // 这个路径和path.resolve中一致，这个路径是可以修改的

// 脚手架 可能有一些配置文件   mac /users/用户名   window  c/users/xxx

console.log(process.platform); // window win32  mac darwin

// webpack中 需要用到 开发中区分环境也需要

// windows 下使用set来设置环境变量
// mac 需要使用export来设置环境变量    临时设置
// 电脑中的环境变量 在windows  系统 -》 高级选项 -》 环境变量

console.log(process.env); // 根据 env 来区分 你是什么环境 ,

console.log(process.argv); // 用于接收用户运行时传递的参数
//  默认第一个参数是node的可执行文件
//  当前可执行的文件
// 其余的就是我们 运行传递的参数 , 除了前两个就是用户传递的参数
// 使用node 一般会使用大量的第三方模块  process.env  -》 cross-env   process.argv -> yargs/ commander/.....

// nextTick 微任务 setImmediate node中的宏任务 （和浏览器的执行顺序现在基本一致了 （10版本之前有区别）为了统一，代码执行现在一致的）
// node中底层是基于多线程来实现 -》 也需要对这些任务进行轮训处理 （事件触发线程 eventloop）

/*
Promise.resolve().then(()=>{
    console.log('promise')
})

process.nextTick(()=>{ // 此方法用的比较少
    console.log('nextTick')
})
*/
// 微任务在每个阶段切换的时候执行? 10版本以前是的 ， 10版本之后变成了每个宏任务执行后都会清空 (运行的流程和浏览器一样)

// setTimeoput 和 setImmediate 在主栈中执行时顺序 是不一定的

require("fs").readFile("./note.md", function () { // poll -> check -> timer
  setTimeout(() => { // timers
    console.log("setTimeout");
  });

  setImmediate(() => { // check
    console.log("setImmediate");
  });
});
