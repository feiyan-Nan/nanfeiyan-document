// jwt json web token  (这里服务端不需要管理我给谁发了令牌 + 唯一标识)
// 下次来的时候 通过唯一标识来识别令牌是否正确，如果令牌正确，说明你就是真的


// token 和我们刚才说的 cookie + 签名是一样的

const Koa = require('koa');
const Router = require('koa-router');
const crypto = require('crypto');
const router = new Router();
// jsonwebtoken

// const jwt = require('jwt-simple')

const jwt = {
    sign(value, secret) {
        return crypto.createHmac('sha256', secret).update(value).digest('base64url')
    },
    toBase64(value) {
        return Buffer.from(JSON.stringify(value)).toString('base64url')
    },
    encode(payload, secret) {
        const part1 = this.toBase64({ typ: 'JWT', alg: 'HS256' });
        const part2 = this.toBase64(payload);
        const part3 = this.sign(part1 + '.' + part2, secret);
        return part1 + '.' + part2 + '.' + part3; // 服务端签发了一个令牌
    },
    decode(token, secret) {
        let [part1, part2, sign] = token.split('.');
        let newSign = this.sign(part1 + '.' + part2, secret);
        if (newSign == sign) {
            let obj = JSON.parse(Buffer.from(part2, 'base64url').toString())

            if (obj.expires > new Date(Date.now()).getTime()) {
                return obj
            } else {
                throw new Error('过期')
            }

        } else {
            throw new Error('两次token不一致')
        }
    }
}

const app = new Koa();
app.use(router.routes());

// 令牌可以放到url路径上，header  body

router.get('/login', async function (ctx) {
    // 访问的时候 给你发个令牌 
    // {typ:'JWT'}   payload编码  真正的签名
    // 服务端传递的内容 没有被加密，只是被编码，因为服务端还可以在拿到这个信息
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.h0-2PuPXIzFIGOfpA9A53UJ3K6CD8KYhSVypkzxkGG0
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.h0-2PuPXIzFIGOfpA9A53UJ3K6CD8KYhSVypkzxkGG0
    ctx.body = jwt.encode({ user: 1, expires: new Date(Date.now()).getTime() + 10000 }, 'zf')
});
router.get('/validate', async function (ctx) {
    try {
        let pyload = jwt.decode(ctx.query.auth, 'zf')
        ctx.body = pyload
    } catch (e) {
        ctx.body = e
    }
});
app.listen(3000, function () {
    console.log(`server start 3000`)
})
// cookie session jwt 权限认证的


// config.authorazation = 'Bear token'
// 保证用户登陆

// 每次发请求都携带token 

