
const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/sum') {

        // 这个计算的部分 应该拿出去来做， node中不能开启子线程，可以开启子进程
        let sum = 0;
        for (let i = 0; i < 100 * 10000 * 10000; i++) {
            sum += i
        }
        return res.end('sum:' + sum)
    } else {
        return res.end('ok')
    }
}).listen(3000, function () {
    console.log('sever start 3000')
})


// 1) 进程我们需要掌握 如何开启子进程  子进程如何通信的  多个进程如何监听同一个服务  pm2
// 2) websocket