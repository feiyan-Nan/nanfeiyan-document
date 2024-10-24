const Layer = require("./layer")
const methods = require('methods')

// 每次调用路由的时候 都会产生一个route ， 存放着用户的回调，需要提供一个dispatch方法
function Route() {
    this.stack = []
    this.methods = {}; // 用来标识当前route中存放了哪些方法
}
methods.forEach(method => {
    Route.prototype[method] = function (handlers) {
        handlers.forEach(handler => {
            const layer = new Layer('不要路径', handler)
            layer.method = method;
            this.methods[method] = true
            this.stack.push(layer);
        })
    }
})
Route.prototype.dispatch = function (req, res, out) { // 这个会被存放到外层的layer上
    let idx = 0
    const next = () => {
        if (idx === this.stack.length) return out();
        let layer = this.stack[idx++];
        const requestMethod = req.method.toLowerCase();
        if (layer.method == requestMethod) {
            layer.handle_request(req, res, next)
        } else {
            next();
        }
    }
    next()
}

module.exports = Route