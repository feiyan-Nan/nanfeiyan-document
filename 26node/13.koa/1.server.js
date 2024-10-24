const Koa = require('./koa');
const app = new Koa();

// 我们需要指定什么路径 和方法 要执行什么操作 路由
app.use(function (ctx) { // 本次请求的上下文  handleRequest(req,res)

    // ctx 上下文 将原生的req和res 都放在上下文上
    // 基于req和res在进行封装 封装两个对象 request 和response (koa自己封装的)


    // console.log(ctx.req.url)
    // console.log(ctx.req.method)
    // console.log(ctx.path)
    // console.log(ctx.query)
    // console.log(ctx.header)
    ctx.res.end('hello')
    // ctx.body = 'hello'
});

app.listen(3000, function () {
    console.log(`server start 3000`)
}); // http.createServer().listen()