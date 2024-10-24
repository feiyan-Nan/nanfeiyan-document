const Router = require('./router')
const http = require('http');
const methods = require('methods');
function Application() { // 每个应用都配置一个独立的路由系统
}
Application.prototype.lazy_route = function () {
    if (!this.router) {
        this.router = new Router();
    }
}
methods.forEach(method => {
    Application.prototype[method] = function (path, ...handlers) {
        // this.routes.push({
        //     path,
        //     method: 'get',
        //     handler
        // })
        this.lazy_route();
        this.router[method](path, handlers)
    }
})

Application.prototype.listen = function (...args) {
    this.lazy_route();
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