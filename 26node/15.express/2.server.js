const express = require('./express')
const app = express();


// app.route('/user').get((req, res) => { // restful风格比较适合
//     res.end('get /user')
// }).post((req, res) => {
//     res.end('post /user')
// })
// 路由里面在处理逻辑之前，我可能提前做一些判断
app.get('/user', function (req, res, next) {
    // 1）校验用户是否登陆
    console.log('validate login');
    next(); // 希望如何调用next 使用的事，只要调用next就会走下一个

}, function (req, res, next) {
    // 2) 校验用户是否有权限
    console.log('validate auth');
    next()
}, function (req, res, next) {
    // 3) 响应最终的结果 真正的逻辑
    req.user = 100;
    next()
});
app.get('/user', function (req, res) {
    req.user += 100
    res.end(req.user + '')
})
app.post('/home', function (req, res) {
    res.end('post home')
})
app.listen(3000, () => {
    console.log('server start 3000')
})