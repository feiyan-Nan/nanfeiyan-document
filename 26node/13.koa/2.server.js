const Koa = require('./koa');
const app = new Koa();

// koa中会将所有的 函数串联成一个promise （每一个函数都是一个promiose） 最外层的promise执行完毕就结束了

// 1) 这里每个use中的方法都是promise, 这些promise会被组合成一个promise， 如果外层的promise没有等待里层的，则直接就结束了
// 2) 所有的异步逻辑都要写成promise
// 3) 所有next方法前面 必须+ return 或者 await
function sleep(timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timer)
    })
}
app.use(async function (ctx, next) {
    // console.log(1)
    // ctx.body = 'ok1';
    await next(); // 这里没有等待下一个函数执行完毕 只是调用了一下而已
    // console.log(2)
});
app.use(async function (ctx, next) {
    console.log(3)
    ctx.body = 'ok2'
    await sleep(1000)
    return next()
});
app.use(async function (ctx, next) {
    console.log(5)
    ctx.body = 'ok3'
    await next()
    console.log(6)
});
app.on('error', function (err) {
    console.log(err, '-----')
})

app.listen(3000, function () {
    console.log(`server start 3000`)
}); // http.createServer().listen()


// 1） 特点1: 实现对req和res的封装
// 2） 特点2: 洋葱模型