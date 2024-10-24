const { fork } = require('child_process');
const http = require('http')
const path = require('path');

// 有一个把门的 ， 交给其他的小弟来做
const server = http.createServer((req, res) => {
    res.end('main:' + process.pid)
}).listen(3000)


const cpus = require('os').cpus();

console.log('main', process.pid)
// 11 个
for (let i = 0; i < cpus.length - 1; i++) {
    let cp = fork('http.js', {
        cwd: path.resolve(__dirname, 'worker'),
    })
    cp.send('server', server); // send 方法可以传递一个 http服务器 还可以传递一个tcp服务
}

// 集群的原理就是创建多个服务，默认第一个工作进程就是 主服务