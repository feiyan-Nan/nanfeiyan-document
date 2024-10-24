const cluster = require('cluster');
const http = require('http')
const cpus = require('os').cpus();
if (cluster.isPrimary) {
    // 主进程只负责创建工作进程 
    for (let i = 0; i < cpus.length; i++) {
        cluster.fork(); // 调用fork 后默认会在在次执行此文件
    }
} else {
    http.createServer((req, res) => {
        res.end('child:' + process.pid)
    }).listen(6666); // 内部会看如果是多个人监听了同一个端口，只有第一个会创建一个http-server，后续都没有创建
    // 底层通过ipc的方式进行通信的 
}

// 内部还是创建一个服务 后续子进程来共享这个服务， 通过轮训的方式来处理请求