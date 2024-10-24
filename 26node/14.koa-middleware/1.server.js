
// 当用户访问路径 /login -> 显示表单
// 点击提交按钮，获取用户输入的内容 
const Koa = require('koa');
const app = new Koa();
const path = require('path')
const { createReadStream } = require('fs')
const bodyparser = require('./middleware/bodyparser')
const Router = require('@koa/router');
const router = new Router();


// 1) 编写koa的时候所有的异步方法都要写成promise , 所有next前面都要+await
// 2) 中间件的执行过程 use, 默认从上到下执行的 （可以处理公共的逻辑）
// 3) 中间 需要继续允许向下执行 （决定是否有权限继续执行） 
// 4) 可以给应用扩展功能

// 专门处理 get /login
app.use(bodyparser({ uploadDir: path.resolve(__dirname, 'upload') }))
app.use(router.routes());

router.get('/login', async (ctx, next) => {
    ctx.type = 'text/html;charset=utf-8'
    ctx.body = createReadStream(path.resolve(__dirname, 'login.html'))
})
router.post('/login', async (ctx, next) => {
    ctx.body = ctx.request.body
})
// app.use(async (ctx, next) => {
//     if (ctx.path === '/login' && ctx.method === 'GET') {
//         // ctx.set('Content-Type','text/html')
//         ctx.type = 'text/html;charset=utf-8'
//         ctx.body = createReadStream(path.resolve(__dirname, 'login.html'))
//     } else {
//         return next()
//     }
// })
// app.use(async (ctx, next) => {
//     if (ctx.path === '/login' && ctx.method === 'POST') {
//         ctx.body = ctx.request.body
//     }
// })

app.listen(3000, function () {
    console.log('server start 3000')
});

// 解析请求体：koa-bodyparser
// 上传文件： @koa/multer
// koa中的路由 @koa/router
