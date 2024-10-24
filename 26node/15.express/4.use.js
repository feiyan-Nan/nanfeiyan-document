const express = require('express')
const app = express();

// 1) 普通中间件是在router stack 中定义的可以处理公共逻辑
// 2) 错误处理中间件一般写在底部，也会注册到stack的底部 （参数是四个） , next中传递的参数是错误信息，如果内部出错，将错误抛出到外层的stack
// 3) 最终捕获异常是在router stack的底部捕获的

app.use(function (req, res, next) {
    console.log(1)
    next(new Error('呵呵'));
}, function (req, res, next) {
    console.log(2)
    next();
})

app.use('/user', function (req, res, next) {
    console.log(3)
    next()
})


app.get('/user', function (req, res, next) {
    next('error router ----')
});

app.get('/home', function (req, res) {
    res.end('ok home')
})

// 处理错误的中间件一般在最后，参数有4个

app.use('/user', (err, req, res, next) => {
    next(err)
})
app.use('/user', (err, req, res, next) => {
    res.end(err + 'my')
})

app.listen(3000, () => {
    console.log('server start 3000')

})

// 中间件、错误处理、正则路由、二期路由、路径参数