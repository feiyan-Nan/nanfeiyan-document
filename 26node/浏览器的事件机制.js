// 浏览器是一个多进程  (每个页卡都是一个独立的进程) 渲染进程  CPU进程  网络进程  插件也有独立的进程

// GUI渲染线程: UI线程 和 js线程  是互斥线程

// 事件环: 事件队列

// 进程之间互相不干扰, 线程之间共享内存, 进程有独立的地址空间, 线程之间没有独立的地址空间

// GUI 渲染线程
// JavaScript引擎线程
// 定时触发器线程
// 事件触发线程
// 异步http请求线程


// 浏览器端:
// 常见的 macro-task 比如：setTimeout、setInterval、script（整体代码）、 I/O 操作、UI 渲染等。
// 常见的 micro-task 比如: new Promise().then(回调)、MutationObserver(html5新特性) queueMicrotask 等。


// Node端:
// 常见的 macro-task 比如：setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作等。
// 常见的 micro-task 比如: process.nextTick、new Promise().then(回调)等。


// requestAnimationFrame  requestIdleCallback  (只是简单的回调函数)  既不属于宏任务, 也不属于微任务
// requestAnimationFrame  和屏幕刷新同步的, 屏幕刷新的时候执行, 切换tab会停止执行
//


// queueMicrotask

// 宏任务执行一个, 微任务队列就要清空


console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')



function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('asyncFunc1');
    }, 2000);
  })
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('asyncFunc1');
    }, 1000);
  })
}


function concurrentThen() {
  const p1 = asyncFunc1();
  const p2 = asyncFunc2();
  return p1.then(r1 => p2.then(r2 => [r1, r2]));
}
console.time('concurrentAll');
concurrentThen().then(() => {
  console.timeEnd('concurrentAll');
})


function concurrentAll() {
  return Promise.all([asyncFunc1(), asyncFunc2()]);
}
console.time('concurrentAll');
concurrentAll().then(() => {
  console.timeEnd('concurrentAll');
})


// concurrentAll() 和 concurrentThen() 执行时间是一个样的
