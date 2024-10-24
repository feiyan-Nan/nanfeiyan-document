const { spawn, fork } = require('child_process')
const path = require('path')
const { nextTick } = require('process')
const cp = fork('fork.js', { // 底层调用的就是spawn
    cwd: path.resolve(__dirname, 'worker'),
    // stdio: [0, 1, 2, 'ipc'] 默认会在spawn的基础上传入stdio属性
})
// 进程间通信
cp.on('message', function (data) {
    console.log('我拿到了子进程的id:' + data)
    cp.send(process.pid, function () {
        console.log('父进程发送成功');
        setTimeout(() => {
            process.kill(data)
        }, 1000);
    })
})