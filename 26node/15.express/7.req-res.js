const express = require('express');
const app = express();
const path = require('path');

// koa-static 静态服务
app.use(express.static(__dirname));
// koa-views express内置了 模板引擎

app.get('/', function (req, res) {
    // res.send({ name: 'jw' })
    console.log(req.path);
    console.log(req.query)
    res.sendFile(path.resolve(__dirname, 'note.md'))
})

app.listen(3000)