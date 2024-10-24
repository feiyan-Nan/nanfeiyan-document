const Koa = require('koa');
const Router = require('koa-router');
const crypto = require('crypto');
const querystring = require('querystring')
const uuid = require('uuid')
const router = new Router();
const app = new Koa();
app.use(router.routes())

// 想记录用户访问服务器的次数


const sid = 'connect.sid'; // 你第一次链接我的时候 我需要给你设置一个卡号
const session = {}; // 这就是session， session会需要做持久化。 我们想共享登陆状态


// session 就是解决cookie不能存放敏感信息的问题

router.get('/visit', async function (ctx) {
    let v = ctx.cookies.get(sid); // 如果用户有sid的cookie说明来了
    let obj = session[v]; // session存放着用户访问的次数
    if (v && obj) {
        obj.visit++;
        ctx.body = '您是第' + obj.visit + '次访问，欢迎下次再来'
    } else {
        let str = ''
        if (v && !obj) {
            str = '你的卡作废了,'
        }
        let value = uuid.v4();
        ctx.cookies.set(sid, value, { maxAge: 10000 }); // 你第一次来 会得到connect.sid 发的一张卡
        session[value] = { visit: 1 }; // 记录用户访问了多少次
        ctx.body = str + '您是第一次访问，欢迎下次再来'
    }
});
// session 不用设置过期时间 ，cookie来设置
app.listen(3000, function () {
    console.log(`server start 3000`)
})