const url = require('url');

function Router() {
    this.stack = [];
}
Router.prototype.get = function (path, handler) {
    this.stack.push({
        path,
        handler,
        method: 'get'
    })
}
Router.prototype.handle = function (req, res, out) {
    const { pathname: requestPathname } = url.parse(req.url);
    const requestMethod = req.method.toLowerCase();
    for (let i = 0; i < this.stack.length; i++) {
        let { path, handler, method } = this.stack[i];
        if (path == requestPathname && method == requestMethod) {
            return handler(req, res)
        }
    }
    out(req, res);
}
module.exports = Router;


// 路由系统 router