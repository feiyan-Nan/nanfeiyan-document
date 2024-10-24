
const http = require('http')
const path = require('path');


process.on('message', function (type, server) {
    console.log(process.pid)

    http.createServer((req, res) => {
        res.end('child:' + process.pid)
    }).listen(server)
})


// 底层就是 还是一个端口 ，只是主进程处理请求后会分发给子进程