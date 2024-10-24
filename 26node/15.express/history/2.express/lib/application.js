const Router = require('./router')
const http = require('http');
function Application() { // 每个应用都配置一个独立的路由系统
    this.router = new Router();
    // this.routes = []
}
Application.prototype.get = function (path, handler) {
    // this.routes.push({
    //     path,
    //     method: 'get',
    //     handler
    // })
    this.router.get(path, handler)
}
Application.prototype.listen = function (...args) {
    // 找不到就调用此done方法 结束应用
    function done(req, res) {
        res.end(`Cannot my ${req.method} ${req.url}`)
    }
    const server = http.createServer((req, res) => {
        // 去请求里找到对应的方法和路径，到路由系统中进行匹配
        this.router.handle(req, res, done)
    });
    server.listen(...args)
}
module.exports = Application

// 应用app