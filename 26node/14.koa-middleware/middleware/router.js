
class Router {
    constructor() {
        this.stack = []
    }
    compose(layers, out, ctx) {
        function dispatch(i) {
            if (i === layers.length) return out()
            let { callback } = layers[i];
            return Promise.resolve(callback(ctx, () => dispatch(i + 1)))
        }
        return dispatch(0)
    }
    routes() {
        return async (ctx, next) => {
            // 请求到来的时候 会执行此函数
            let requestPath = ctx.path;
            let requestMethod = ctx.method.toLowerCase()
            const stack = this.stack.filter(layer => (layer.path === requestPath) && (requestMethod === layer.method))
            return this.compose(stack, next, ctx)
        }
    }
};
class Layer {
    constructor(path, method, callback) {
        this.path = path;
        this.method = method;
        this.callback = callback
    }
}
['get', 'post', 'delete', 'put'].forEach(method => {
    Router.prototype[method] = function (path, callback) {
        this.stack.push(new Layer(path, method, callback))
    }
})


module.exports = Router