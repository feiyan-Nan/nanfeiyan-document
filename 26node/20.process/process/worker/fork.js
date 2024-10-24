
let sum = 0;

for (let i = 0; i < 10 * 10000 * 10000; i++) {
    sum += i;
}

process.send(process.pid, function () {
    console.log('子进程发送成功')
})

process.on('message', function (data) {
    console.log('父进程的id', data)
})


// 进程可以实现集群  集群和分布式的区别 
// 10个开发 都独立开发项目 10个项目
// 10个开发 10个人一个项目做完 在做下一个


// 集群的底层就是多进程