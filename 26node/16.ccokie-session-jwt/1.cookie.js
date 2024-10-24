const Koa = require('koa');
const Router = require('koa-router');
const crypto = require('crypto');
const querystring = require('querystring')
const router = new Router();

const app = new Koa();
app.keys = ['zf']; // 提供密钥
function sign(value, secret) {
    // base64 +  / =  这东西 在传输过程中会变成  + => -  / => _  = -> '
    let content = crypto.createHmac('sha1', secret).update(value).digest('base64url')
    return content;
}
// 2x2JnfQnSthR4rkUqXfReFfQreM
app.use((ctx, next) => {
    let arr = []
    ctx.res.setCookie = function (key, value, options = {}) {
        let optionsArgs = []
        if (options.domain) { // 限制域名
            optionsArgs.push(`domain=${options.domain}`)
        }
        if (options.path) { // 险种 路径 基本不使用
            optionsArgs.push(`path=${options.path}`)
        }
        if (options.maxAge) { //  所有的max-age 都是以s为单位  // 设置cookie的有限期
            optionsArgs.push(`max-age=${options.maxAge}`)
        }
        if (options.httpOnly) { // 服务端设置后 客户端无法获取 (不能通过代码读取用户的信息 document.cookie)
            optionsArgs.push(`httpOnly=${options.httpOnly}`); // 用户可以自己改，发请求的时候也可以瞎写
            // axios.request({headers:{cookie:'xxx}})
        }
        if (options.signed) {
            // 需要对内容进行加盐 
            const v = sign(`${key}=${value}`, 'zf');
            arr.push(`${key}.sig=${v}`); // key.sign, v
        }
        arr.push(`${key}=${value}; ${optionsArgs.join('; ')}`)
        ctx.res.setHeader('Set-Cookie', arr);
    }
    ctx.req.getCookie = function (name, options = {}) {
        const cookie = ctx.req.headers['cookie'];
        const cookieObj = querystring.parse(cookie, '; ', '=')
        if (options.signed) {
            // jw  签名
            if (cookieObj[name + '.sig'] == sign(`${name}=${cookieObj[name]}`, 'zf')) {
                return cookieObj[name]
            } else {
                return '值被篡改'
            }
        }
        return cookieObj[name]
    }
    return next();
})
app.use(router.routes());
// name,value,domain,path,maxAge,httpOnly
// key=value; key=value

// md5 -> sha256（需要提供一个密钥，加盐算法）

router.get('/write', async (ctx) => {
    // domain 可以设置在哪个域名下设置cookie和读取cookie
    ctx.cookies.set('name', 'jw', { signed: true })
    // ctx.res.setCookie('name', 'jw', { signed: true }); // 给当前的信息增加一个签名，让他变得更安全
    ctx.body = 'write ok'
});

router.get('/read', async function (ctx) {
    ctx.body = ctx.cookies.get('name', { signed: true }) || '空'
})

app.listen(3000, function () {
    console.log(`server start 3000`)
})