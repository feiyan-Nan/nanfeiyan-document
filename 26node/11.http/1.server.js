const http = require('http');

// req 代表客户端的信息 
// res 代表服务端的信息
const server = http.createServer(function (req, res) {
    res.end('hello');
});

server.listen(3000, function () {
    console.log('listening~~~ 3000')
})

// 请求行  方法 资源路径 版本\r\n
// 请求头  key: value\r\n
// \r\n
// 请求体 自定义的内容

// 相应行  版本号 状态码 相应短语\r\n
// 响应头  key: value\r\n
// \r\n 
// 相应提 内容 明文的  应用层的目的 就是将内容表现出来

// http 基于tcp的 只是增加了 一些报文而已  （在学习报文） header。。。。


// 请求方法 GET POST PUT DELETE （restful、graphql）风格
    // 路径区分资源   ->     通过请求方法 和 路径来区分
    //  /getUser           GET /user  DELETE /user   PUT /user 根据方法来区分对应的操作
    //  /deleteUser
    //  /updateUser
    //  /addUser

    // option 请求  跨域预检请求  80 -》 3000 虽然你允许了
    // 简单请求不会发送预检请求的  get post  （在get和post的基础上增加自定义的header，就变为了复杂请求）
    // 其它的 delete put都是复杂请求 在跨域的时候 复杂请求都会发送option请求 （预检请求可以设置，有效期）


// 状态码  （状态码，可以服务端定义）
    // 1xx 101ws 基于http的，要将协议升级成ws 101
    // 2xx 200成功 204没有响应体 206部分请求
    // 3xx 301（永久重定向，尽可能减少永久重定义） 302 （临时重定向）  304 （缓存）
    // 4xx 400 参数错误 不识别的请求  401  （没有登录 没有权限）    403 （登录了没权限）  404 找不到 405 方法不支持
    // 5xx 500 服务端错误 502 网关错误，服务器当了


// 内容协商 （静态服务）