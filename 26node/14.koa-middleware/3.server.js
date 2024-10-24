const Koa = require('koa');
const app = new Koa();
const path = require('path')
const bodyparser = require('./middleware/bodyparser');
const Router = require('./middleware/router');
const serve = require('./middleware/serve');


// const views = require('koa-views');
const fs = require('fs/promises')
const router = new Router();

function views(url) {

    async function renderFile(filepath, data) {
        let template = await fs.readFile(filepath, 'utf8');
        let head = 'let str = ""\r\n with (obj) {\r\nstr = `'
        let content = template.replace(/<%=(.+?)%>/g, function () {
            return '${' + arguments[1] + '}'
        })

        content = content.replace(/<%(.+?)%>/g, function () {
            return '`\r\n' + arguments[1] + '\r\nstr += `'
        })
        let footer = '`\r\n}\r\nreturn str';
        let fn = new Function('obj', head + content + footer)

        // new Function + with + 拼接字符串
        return fn(data)
    }


    return async (ctx, next) => {
        ctx.render = async function (filename, data) {
            let filepath = path.join(url, filename + '.html');
            ctx.body = await renderFile(filepath, data)
        }
        return next()
    }
}

app.use(views(__dirname + '/views'))


app.use(bodyparser({ uploadDir: path.resolve(__dirname, 'upload') }));
// 1) 编写koa的时候所有的异步方法都要写成promise , 所有next前面都要+await
// 2) 中间件的执行过程 use, 默认从上到下执行的 （可以处理公共的逻辑）
// 3) 中间 需要继续允许向下执行 （决定是否有权限继续执行） 

app.use(serve(path.resolve(__dirname, 'upload')))
app.use(serve(__dirname))
app.use(router.routes());

router.post('/login', async (ctx, next) => {
    ctx.body = ctx.request.body
})
router.get('/', async (ctx) => {
    await ctx.render('my', {
        name: 'jw'
    });

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
// koa中静态服务中间价  koa-static
// 模板引擎
