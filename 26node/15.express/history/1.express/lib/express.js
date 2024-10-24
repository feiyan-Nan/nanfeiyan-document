const http = require('http');
const url = require('url');
// 1) 创建应用 
// 2) 路由系统
// 3) 应用本身
function createApplication() {
    const routes = []
    return { // app
        get(path, handler) {
            routes.push({
                path,
                method: 'get',
                handler
            })
        },
        listen(...args) {
            // 找不到就调用此done方法 结束应用
            function done(req, res) {
                res.end(`Cannot my ${req.method} ${req.url}`)
            }
            const server = http.createServer((req, res) => {
                // 去请求里找到对应的方法和路径，到路由系统中进行匹配
                const { pathname: requestPathname } = url.parse(req.url);
                const requestMethod = req.method.toLowerCase();
                for (let i = 0; i < routes.length; i++) {
                    let { path, handler, method } = routes[i];
                    if (path == requestPathname && method == requestMethod) {
                        return handler(req, res)
                    }
                }
                done(req, res)
            });
            server.listen(...args)
        }
    }
}

module.exports = createApplication