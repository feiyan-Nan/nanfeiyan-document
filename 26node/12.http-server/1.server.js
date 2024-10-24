const http = require('http');
const url = require('url')
const server = http.createServer((req, res) => {
    // req 可以存放 请求行  请求头  请求体 
    // res 可以写入 响应行  响应头  响应体

    // 请求行 GET / 协议版本号

    const method = req.method.toLowerCase(); // get post delete put option
    // url 包括的信息有哪些 http://username:password@localhost:3000/?a=1&b=2#xxx
    // hash 值是前端路由时需要的 ， 锚点， 服务端无法拿到锚点  无法做seo优化 
    const { pathname, query } = url.parse(req.url, true); // 获取的是 路径后面的  ？前面的

    const httpVersion = req.httpVersion
    console.log(method, pathname, query, httpVersion);

    console.log(req.headers); // 获取请求头信息  Content-Type:xxx

    let arr = [];
    // 底层是基于net模块  socket.on('data')  socket.write() 能读能写
    // http中对socket进行了封装   -> req 请求的可读流 （push(null)）   res 响应的可写流 
    req.on('data', function (chunk) { // 只有有请求数据的时候才会触发
        arr.push(chunk)
    });

    req.on('end', function () { // end 事件一定是会触发的
        let data = Buffer.concat(arr).toString();
        console.log(data, '---'); // 这里就是解析的请求体
    });

    // -----------请求信息---------------

    // 响应行的格式 http/1.1 200 OK

    res.statusCode = 200; // 状态码 不建议自定义，因为服务度和浏览器 莫名的规则
    res.statusMessage = 'custom'

    // Content-Length: 6 
    // Transfer-Encoding: chunked  用来标识此http请求有多长 ， 用来分割http请求的
    res.setHeader('Content-Type', 'text/html;charset=utf-8')


    res.write('ok')
    res.end('中文'); // 响应结束了，浏览器就认为这次事务完成了

});
// server.on('request',fn)

let port = 4000;
server.listen(port, () => { // 这个函数是一个订阅函数，只要启动成功后，就会执行此函数
    console.log('server start:' + port)
});

// 为了实现自动重启 可以安装nodemon，pm2  
// npm install nodemon -g
server.on('error', function (err) {
    if (err && err.code === 'EADDRINUSE') {
        port = port + 1
        server.listen(port)
    }
})