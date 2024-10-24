const Koa = require('koa');
const app = new Koa();
const path = require('path')
const { createReadStream } = require('fs')
const bodyparser = require('./middleware/bodyparser');
const Router = require('./middleware/router');

const router = new Router();
app.use(bodyparser({ uploadDir: path.resolve(__dirname, 'upload') }))


app.use(router.routes());
router.get('/login', async (ctx, next) => {
    ctx.type = 'text/html;charset=utf-8'
    console.log(1)
    await next()
})
router.get('/login', async (ctx, next) => {
    console.log(2)
    ctx.body = createReadStream(path.resolve(__dirname, 'login.html'))
})
router.post('/login', async (ctx, next) => {
    ctx.body = ctx.request.body
})
app.use(function () {
    console.log(3)
})
app.listen(3000, function () {
    console.log('server start 3000')
});



// 解析请求体：koa-bodyparser
// 上传文件： @koa/multer
// koa中的路由 @koa/router
