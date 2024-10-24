const express = require('./express');
const app = express();
// http模块中的req和res所有支持的属性 express 都支持
// 内部对req和res也进行了一些属性扩展

// stack = []
app.get('/', function (req, res) {
    res.end('home');
});
app.get('/user', function (req, res) {
    res.end('user');
});
app.listen(3000, () => {
    console.log('server start 3000')
})