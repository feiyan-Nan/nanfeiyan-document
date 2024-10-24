const fs = require("fs"); // 文件系统模块 filesystem
const path = require("path"); // 路径模块 进行路径操作
const Promise = require("./promise");

function promisify(fn) {
  // fn = fs.readFile
  return function (...args) {
    // readFile  剩余运算符
    let promise = new Promise((resolve, reject) => {
      // 可以将node中的异步api转换成promise的形式 （error-first）
      fn(...args, function (err, data) {
        // 展开运算符
        if (err) return reject(err);
        resolve(data);
      });
    });
    return promise;
  };
}

let readFile = promisify(fs.readFile); // 高阶函数的概念

// 1）catch的实现
readFile(path.resolve(__dirname, "a.txt"), "utf8")
  .then((data) => {
    return readFile(data, "utf8");
  })
  .then()
  .catch((err) => {
    console.log(err);
  });

// 2) Promise.resolve, Promise.reject
// resolve一个promise 会等待这个promise执行完毕
// reject 一个promise 会直接失败 不在解析了
/*
Promise.resolve(new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(100)
    },1000)
})).then((data)=>{
    console.log('成功的promise',data)
}).catch(err=>{
    console.log('失败',err);
})
*/
// 3) Promise.all Promise.race

// all 就是全部成功才成功，有一个失败就失败了
/*
Promise.all([readFile(path.resolve(__dirname,'a.txt'),'utf8'),readFile(path.resolve(__dirname,'b.txt'),'utf8'),1]).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err)
})
*/

// race 有一个成功就成功 有一个失败就失败

/* Promise.race([readFile(path.resolve(__dirname,'a.txt'),'utf8'),readFile(path.resolve(__dirname,'b.txt'),'utf8')]).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err)
}) */

/*
Promise.deferred = function () {
  // deferred  all race catch ...
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
let dfd = Promise.deferred();
function getData() {
  setTimeout(() => {
    dfd.resolve("成功");
  }, 1000);
  return dfd.promise;
}
setTimeout(() => {
  dfd.reject("超时  111");
}, 1000);

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

function withAbort(userPromise) {
  let abort;
  let innerPromise = new Promise((resolve, reject) => {
    abort = reject;
  });
  let racePromise = Promise.race([userPromise, innerPromise]); // 增添控制走向失败的逻辑
  racePromise.abort = abort; // 将中断方法暴露到p上
  return racePromise;
}

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // 模拟请求
    resolve("成功");
  }, 2000);
});

p = withAbort(p);
setTimeout(() => {
//   p.abort("超时");
}, 1000);
p.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
// 希望超过1s后 就不采用这个结果了？

// 1) 把promise 核心代码可以手写出来   Promise.allSettled  promise.prototype.finally
// 额外的方法 promise 相关面试题 generator + co + async + await 前端事件环 
