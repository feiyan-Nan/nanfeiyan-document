const { spawn } = require('child_process'); // 核心的子进程模块 
const fs = require('fs')
const path = require('path')
// spawn 产卵  fork 叉子  execFile  执行文件  exec 用于执行命令行命令的

// process.stdin  0 标准输入
// process.stdout 1 标准输出
// process.stderr 2 错误输出  流

// 默认会在这三个流中能写入 也可以读取 实现进程间通信

// node sum.js
const cp = spawn('node', ['sum.js'], {
    cwd: path.resolve(__dirname, 'worker'),
    // stdio: 'ignore' // ignore 表示的是 子进程输出我不关系
    // stdio: [process.stdin, process.stdout, 2], // 父进程和子进程共享了输入输出
    // stdio: ['pipe', 'pipe', 'pipe'] 默认就是创建管道 这种方式可以拿到子进程的输出在去处理
})

// ignore / pipe / 共享输入输出  ipc通信

// cp.stdout.on('data', function (data) {
//     console.log(data.toString())
// })

// cp.stderr.on('data', function (err) {
//     console.log(err.toString(), '错误消息')
// })

cp.on('error', function (err) {
    console.log(err, '子的错误') // 可以再外面捕获进程的错误
})
cp.on('exit', function () {
    console.log('子进程运行完毕结束了')
})
cp.on('close', function () {
    console.log('子进程运行完毕关闭了')
})

// 进程间默认没法通信，我们需要实现进程间的通信
// 默认情况下 子进程和父进程之间会创建一个管道，可以再管道中进行读取和写入