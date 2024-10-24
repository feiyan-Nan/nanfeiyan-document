const context = require('./context');
const request = require('./request');
const response = require('./response');
// 我们希望每个应用应该是独立的，不是a放了属性，b受影响 （实现应用之间的隔离）
const http = require('http');
const EventEmitter = require('events')
class Application extends EventEmitter {
    constructor() {
        super();
        this.context = Object.create(context); // 每次都是基于这个对象创建一个全新的上下文
        this.request = Object.create(request);
        this.response = Object.create(response)
        this.middlewares = []
    }
    use(fn) {
        this.middlewares.push(fn)
    }
    createContext(req, res) {
        const ctx = Object.create(this.context);
        const request = Object.create(this.request);
        const response = Object.create(this.response);

        request.response = response;
        response.request = request
        ctx.request = request; // 扩展的
        ctx.response = response
        ctx.req = ctx.request.req = ctx.response.req = req; // 原生的
        ctx.res = ctx.response.res = ctx.request.res = res;

        ctx.app = this;
        return ctx;
    }
    compose(ctx) {
        let middlewares = this.middlewares
        let idx = -1;
        function dispatch(i) {
            // 没有中间件直接成功
            if (i <= idx) return Promise.reject(new Error('next() call multiple times'))
            if (i === middlewares.length) return Promise.resolve()
            let fn = middlewares[i];
            idx = i
            //  我们将用户的函数包装了promise
            // 而且是一个链式的调用
            try {
                // 可能用户提供的是一个普通的函数，此时没办法通过promise 来进行捕获，所以要直接try catch
                return Promise.resolve(fn(ctx, () => dispatch(i + 1)))
            } catch (err) {
                return Promise.reject(err)
            }
        }
        return dispatch(0)
    }
    handleRequest = (req, res) => {
        // 每次请求都是独立的， 不会出现 不同的请求 复用属性
        const ctx = this.createContext(req, res)

        res.statusCode = 404;

        this.compose(ctx).then(() => {
            let body = ctx.body;
            if (typeof body === 'string' || Buffer.isBuffer(body)) {
                res.end(body)
            } else {
                res.end('Not Found')
            }
        }).catch(err => {
            this.emit('error', err)
        })

    }
    listen(...args) {
        const server = http.createServer(this.handleRequest);

        server.listen(...args)
    }
}
module.exports = Application