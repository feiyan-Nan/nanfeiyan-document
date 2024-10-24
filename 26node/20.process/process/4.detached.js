const { spawn, fork, execFile, exec } = require('child_process')
const path = require('path')
const { nextTick } = require('process')



const cp = spawn('node', ['write.js'], { // 底层调用的就是spawn
    cwd: path.resolve(__dirname, 'worker'),
    stdio: 'ignore',
    detached: true // 告诉子进程你是独立的了
})
cp.unref(); // 咱们断开了