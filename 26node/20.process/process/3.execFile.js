const { spawn, fork, execFile, exec } = require('child_process')
const path = require('path')
const { nextTick } = require('process')
const cp = exec('echo $PATH', { // 底层调用的就是spawn
    cwd: path.resolve(__dirname, 'worker'),
    // stdio: [0, 1, 2, 'ipc'] 默认会在spawn的基础上传入stdio属性
}, function (err, stdout, stderr) { // 适合小于4k大小的内容
    console.log(err, stdout)
})


// fork 和  execFile 是基于spawn的 

// exec 是基于 execfile 的 

// 底层都是基于spawn 想进程通信 pipe  ipc  回调的方式


// 操作就是 我们在后台系统中 想实现数据库的备份  mongoexport....