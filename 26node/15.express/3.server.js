const express = require('express')
const app = express();

// 中间件可以扩展功能，可以写一写公共逻辑，可以决定是否向下执行
// 自定的中间件一般需要在路由的前面，因为要是在访问路由之前做执行操作
// 路径不写默认就是 / 表示任何路径都可以匹配到 （匹配方式只要路径开头一致即可）

// 1) 如果以中间件路径开头则可以匹配
// 2) 如果相等可以匹配
// 3) 如果没有路径 是/ 也表示可以匹配

app.use('/', function (req, res, next) {
    console.log(1)
    req.a = 1;
    next();
}, function (req, res, next) {
    console.log(2)
    req.a++;
    next();
})

app.use(/\/user/, function (req, res, next) {
    req.a++;
    console.log(3)
    next()
})

// ...

app.get('/user1', function (req, res, next) {
    res.end('ok user' + req.a)
});

app.get('/home', function (req, res) {
    res.end('ok home' + req.a)
})



app.listen(3000, () => {
    console.log('server start 3000')
})

// 中间件、错误处理、正则路由、二期路由、路径参数