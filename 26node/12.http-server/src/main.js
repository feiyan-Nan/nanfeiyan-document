const os = require('os');
const http = require('http');
const url = require('url')
const path = require('path')
const fs = require('fs/promises')
const querystring = require('querystring')
const { createReadStream, existsSync, readFileSync, stat } = require('fs')
const zlib = require('zlib')
// ----------------------------
const chalk = require('chalk')
const debugDev = require('debug')('development')
const debugAll = require('debug')('*')
const mime = require('mime');
const ejs = require('ejs');

// 

// 我们准备一张图上传 百度，  www.baidu.com/xxxx   www.zhufeng.com ->  www.baidu.com/xxxx

// a.zf.cn    b.zf.cn

// referer referrer

class Server {
    constructor(options) {
        this.port = options.port;
        this.directory = options.directory
        this.address = options.address;
        this.template = readFileSync(path.resolve(__dirname, 'template.html'), 'utf8');

        // 启动服务 
        this.start()
    }
    // async stat(requestUrl) {
    //     try {
    //         const statObj = await fs.stat(requestUrl);
    //         return statObj
    //     } catch (e) {

    //         return e;
    //     }
    // }
    async processAssets(pathname, req, res) {
        const requestUrl = path.join(this.directory, pathname)
        try {
            let statObj = await fs.stat(requestUrl)
            if (statObj.isFile()) {
                this.sendFile(requestUrl, statObj, req, res)
            } else {
                this.sendDirectory(requestUrl, statObj, req, res, pathname);
            }
        } catch (e) {
            this.sendError(e, res);
        }
    }
    async processData(pathname, req, res, query) {
        let mockPath = path.join(this.directory, 'mock.js');
        if (existsSync(mockPath)) { // 如果存在mock文件
            let mockFn = require(mockPath); // 加载mock 
            req.query = query;
            req.body = await new Promise((resolve, reject) => {
                const arr = []
                req.on('data', function (chunk) {
                    arr.push(chunk)
                });
                req.on('end', function () {
                    let body = Buffer.concat(arr).toString();
                    // 正常用户发请求  会决定采用什么格式 
                    // xhr.setRequestHeader('ContentType','application/json')
                    switch (req.headers['content-type']) {
                        case 'application/json':
                            body = JSON.parse(body);
                            break;
                        case 'application/x-www-form-urlencoded':
                            // a=1 & b=2  new URL
                            body = querystring.parse(body, '&', '=')
                            break;
                    }
                    resolve(body)
                })
            })
            let flag = mockFn(pathname, req, res);// 调用函数

            if (flag) {
                return true
            }
        }
    }
    cors(req, res) {
        // 这里运行跨域  cors 跨域资源部共享，服务端设置
        if (req.headers.origin) {
            // 任何人都可以访问此路径
            res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
            res.setHeader('Access-Control-Allow-Headers', 'authorization'); // 服务端需要允许自定义header
            res.setHeader('Access-Control-Max-Age', 10); // 10s 内发一次预检请求
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS')
            // 普通请求 会变成复杂请求 
            if (req.method === 'OPTIONS') { // 允许预检请求后 真实的请求可以正常发出
                res.end()
                return true
            }
        }
    }
    handleRequest = async (req, res) => {
        // 此逻辑 处理的是静态逻辑  我把vue项目启动起来了 ， 想模拟接口数据
        let { pathname, query } = url.parse(req.url, true); // /xxx

        if (this.cors(req, res)) {
            return
        }
        let flag = await this.processData(pathname, req, res, query)
        if (flag) {
            return
        }
        this.processAssets(pathname, req, res);
        // 解析请求的信息
    }
    async sendDirectory(requestUrl, statObj, req, res, pathname) {
        // 先尝试加载html
        const homePath = path.join(requestUrl, 'index.html');
        if (existsSync(homePath)) {
            this.sendFile(homePath, statObj, req, res)
        } else {
            let dirs = await fs.readdir(requestUrl);
            const fileStatus = await Promise.all(dirs.map(async dir => await fs.stat(path.join(requestUrl, dir))))
            dirs = dirs.map((dir, index) => {
                return {
                    url: path.join(pathname, dir),
                    dir,
                    info: fileStatus[index].isFile() ? '文件' : '文件夹',
                    size: fileStatus[index].isFile() ? fileStatus[index].size : '',
                    btime: fileStatus[index].birthtime.toLocaleDateString()
                }
            });
            const content = ejs.render(this.template, { dirs });
            res.setHeader('Content-Type', 'text/html;charset = utf-8')
            res.end(content);
            // 根据模板渲染一个字符串  模板引擎的实现原理 就是字符串拼接 
            // ejs nunjucks handlerbar undescroe  jade...
        }
    }
    compress(req, res) {
        let encoding = req.headers['accept-encoding']; // 浏览器会主动给我一个压缩的方式
        if (encoding) {
            if (encoding.includes('br')) {
                res.setHeader('Content-Encoding', 'br')
                return zlib.createBrotliCompress()
            } else if (encoding.includes('gzip')) {
                res.setHeader('Content-Encoding', 'gzip')
                return zlib.createGzip()
            } else if (encoding.includes('deflate')) {
                res.setHeader('Content-Encoding', 'deflate')
                return zlib.createDeflate()
            }
        }
    }

    cache(statObj, req, res) {
        res.setHeader('Cache-Control', 'max-age=10');
        const etag = statObj.size + '/' + statObj.ctime.getTime().toString(16);
        res.setHeader('Etag', etag);
        let ifNoneMatch = req.headers['if-none-match'];
        if (ifNoneMatch === etag) { // 文件没有变化
            res.statusCode = 304; // 浏览器会根据304状态码自动的找缓存区
            res.end()
            return true;
        }
        // etag可以采用 size + lastModified nginx 中这样实现的
        // 有的人可能会用文件内容生成etag （消耗性能）   etag 可信度 会比 lastModified
        /*
        // 用户第一次访问的时候 ，我可以增加一个缓存字段，让浏览器在一定时间内不在请求服务器了 （直接访问的资源不生效）
        // 默认情况下 首页不走强制缓存 （Cache-Control:no-cache）


        // 早起的expires这个字段很难保证 客户端和服务端段的时间一致
        // res.setHeader('Expires', new Date(Date.now() + 10 * 1000).toGMTString())

        // res.setHeader('Cache-Control', 'max-age=20'); // 此字段告诉客户端多少秒不要来找我了，只有第一次访问服务器，会按照第一次时间去计算
        // res.setHeader('Cache-Control', 'no-cache'); // 浏览器会缓存，但是会强制请求服务器。 每次回来服务器询问我
        // 1.)如果20s内文件变化了，无法拿到最新的文件  解决方案不采用强制缓存  图片
        // 2.)如果20s到了后，那么会重新的返回文件（但是文件其实没变化） 采用协商缓存
        // 3.)只采用协商缓存,或者只采用强制缓存

        // 协商缓存 (last-modified / if-modifiend-since  以前的) （etag / if-none-match 目前）

        // res.setHeader('Last-Modified', statObj.ctime.toGMTString()); // 第一次设置上，下一次会携带过来

        // const etag = statObj.size + '/' + statObj.ctime.getTime().toString(16);
        // res.setHeader('Etag', etag);

        // let ifNoneMatch = req.headers['if-none-match'];
        // if (ifNoneMatch === etag) { // 文件没有变化
        //     res.statusCode = 304; // 浏览器会根据304状态码自动的找缓存区
        //     res.end()
        //     return
        // }
        // let ifModifiedSince = req.headers['if-modified-since'];
        // let currentCtime = statObj.ctime.toGMTString();

        // 用最后修改时间作为 比较值会缺乏可信性，1s内改了多次就监控不到了
        // 可以采用内容比较的方式， 我每次读取文件内容 将内容摘要进行比较 （读取文件）

        // 采用文件大小 + 最后修改时间 做出一个标识Etag
        // if (currentCtime === ifModifiedSince) { // 刚才给你的和现在服务器存的是一样的
        //     res.statusCode = 304; // 浏览器会根据304状态码自动的找缓存区
        //     res.end()
        //     return
        // }
        */
    }
    sendFile(filename, statObj, req, res) {
        // 可独流 -》 可写流中 ws.write() ws.end()
        res.setHeader('Content-Type', (mime.getType(filename) || 'text/plain') + ';charset=utf-8');
        // 在发送图片的时候 对图片进行防盗链处理 
        if (/\.(jpeg)/.test(filename)) { // 如果是jpeg 则进行防盗链处理
            let referer = req.headers['referer'] || req.headers['referrer'];

            // 有人来引用这个图片了 
            if (referer) {
                let host = 'http://' + req.headers['host'];
                let r1 = url.parse(host).hostname;
                let r2 = url.parse(referer).hostname
                if (r1 !== r2 && !['http://a.zf.cn:8080/'].includes(referer)) { // 引用的人 和自己的host不一致 
                    createReadStream(path.resolve(__dirname, 'error.jpeg')).pipe(res);
                    return
                }
            }
        }
        if (this.cache(statObj, req, res)) {
            return
        }
        debugDev(filename);
        let stream = this.compress(req, res)
        if (stream) { // 如果支持压缩 则返回一个转化流
            return createReadStream(filename).pipe(stream).pipe(res);
        }
        createReadStream(filename).pipe(res)
    }
    sendError(e, res) {
        debugDev(e)
        res.end('Not Found')
    }
    start() {
        const server = http.createServer(this.handleRequest);
        server.listen(this.port, () => {
            console.log(`${chalk.yellow('Available on:')}`)
            console.log(this.address.map(address => "  " + address + ":" + chalk.green(this.port)).join('\r\n'))
            console.log(`Hit CTRL-C to stop the server`)
        })
    }
}
function createServer(userConfig) {
    // 一般会在这里对用户参数进行格式化 
    let address = Object.values(os.networkInterfaces()).flat(1).filter(net => net.family === 'IPv4').map(item => item.address)
    userConfig['address'] = address
    return new Server(userConfig)
}
module.exports = createServer