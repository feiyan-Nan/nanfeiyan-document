const express = require('./express');
const app = express();

// 如果 用户名 为1的时候 1 * 2 = 2  如果乘以2后 结果是2 + 10

// {username:[fn,fn],password:[fn]}   compose + 发布订阅来实现这个逻辑
app.param('username', function (req, res, next, value, key) {
    if (value == 1) {
        req.params.username *= 2
    }
    next();
})

app.param('username', function (req, res, next, value, key) {
    if (req.params.username == 2) {
        req.params.username += 10
    }
    next();
})

app.param('password', function (req, res, next, value, key) {
    console.log('password')
    next();
})


app.get('/user/:username/:password', function (req, res) {
    let { username, password } = req.params

    res.end(`${username}:${password}`)
})
app.get('/user', function (req, res) {
    res.end(`user`)
})
app.listen(3000)