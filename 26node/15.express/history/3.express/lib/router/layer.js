// express 模型里面有两个地方使用这个layer
//  Router.stack = []  path用户写的路径 route.dispatch
//  Route.stack = []   路径没有意义 用户写的真实回调 ， 里层的layer还需要写方法
function Layer(path, handler) {
    this.path = path;
    this.handler = handler;
}
Layer.prototype.match = function (pathname) {
    // todo...
    return this.path === pathname
}
Layer.prototype.handle_request = function (req, res, next) {
    this.handler(req, res, next)
}
module.exports = Layer