const url = require('url');
const Layer = require('./layer');
const Route = require('./route');
const methods = require('methods')
function Router() {
    this.stack = [];
}
methods.forEach(method => {
    Router.prototype[method] = function (path, handlers) {
        // 1) 给每个路由增加route属性
        const route = new Route(); // route中要存储用户的真实回调
        route[method](handlers)
        // 2) 每次调用路由的时候都会产生一层
        const layer = new Layer(path, route.dispatch.bind(route));
        layer.route = route; // 路由中每个层都有一个route属性

        // 3）最终将这一层放到路由系统中
        this.stack.push(layer)


    }
})

Router.prototype.handle = function (req, res, out) {
    const { pathname: requestPathname } = url.parse(req.url);
    const requestMethod = req.method.toLowerCase()

    // 在外层先匹配路径

    let idx = 0;
    const next = () => {
        if (idx === this.stack.length) return out(req, res);
        let layer = this.stack[idx++];
        // 如果这一层能匹配请求路径
        if (layer.match(requestPathname)) {
            if (layer.route.methods[requestMethod]) {
                layer.handle_request(req, res, next)
            } else {
                next();
            }

        } else {
            next();
        }
    }


    next();
}
module.exports = Router;


// 路由系统 router