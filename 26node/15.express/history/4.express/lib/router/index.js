const url = require('url');
const Layer = require('./layer');
const Route = require('./route');
const methods = require('methods')
function Router() {
    this.stack = [];
}
// 只有路由layer 才会有route属性，中间件不具备route属性
Router.prototype.use = function (path, ...handlers) {
    if (typeof path !== 'string') {
        handlers.unshift(path);
        path = '/';
    }
    handlers.forEach(handler => {
        this.stack.push(new Layer(path, handler))
    })
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
    const next = (err) => {
        if (idx === this.stack.length) return out(req, res);
        let layer = this.stack[idx++];
        if (err) {
            // 跳过路由和普通的中间件，找错误处理中间件
            if (!layer.route) {
                if (layer.handler.length === 4) { // 如果参数是四个则是错误处理中间件，将错误信息传递过去
                    layer.handle_error(err, req, res, next)
                } else {
                    // 普通的中间件
                    next(err)
                }
            } else {
                // 是路由
                next(err);
            }

        } else {

            // 无论是中间件还是路由要求路径都要匹配，路由需要匹配方法
            if (layer.match(requestPathname)) {
                if (!layer.route) { // 中间件
                    if (layer.handler.length === 4) {
                        next(); // 正常情况下不执行错误处理中间件
                    } else {
                        layer.handle_request(req, res, next)
                    }
                } else {
                    if (layer.route.methods[requestMethod]) {
                        layer.handle_request(req, res, next)
                    } else {
                        next();
                    }
                }
            } else {
                next();
            }
        }



    }


    next();
}
module.exports = Router;


// 路由系统 router