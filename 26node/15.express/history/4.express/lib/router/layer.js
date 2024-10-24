// express 模型里面有两个地方使用这个layer
//  Router.stack = []  path用户写的路径 route.dispatch
//  Route.stack = []   路径没有意义 用户写的真实回调 ， 里层的layer还需要写方法
function Layer(path, handler) {
    this.path = path;
    this.handler = handler;
}
Layer.prototype.match = function (pathname) {
    // 中间件为/ 的时候也可以执行 
    // 访问的路径 /user/add -> 中间件的路径 /use/
    if (this.path === pathname) {
        return true
    }
    if (!this.route) {
        if (this.path === '/') {
            return true;
        }
        return pathname.startsWith(this.path + '/')
    }

    // todo...
    return false
}
Layer.prototype.handle_request = function (req, res, next) {
    this.handler(req, res, next)
}
Layer.prototype.handle_error = function (err, req, res, next) {
    this.handler(err, req, res, next)
}
module.exports = Layer