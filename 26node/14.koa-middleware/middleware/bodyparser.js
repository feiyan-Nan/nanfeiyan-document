const querystring = require('querystring');
const uuid = require('uuid');
const fs = require('fs')
const path = require('path')
Buffer.prototype.split = function (boundary) {
    let arr = [];
    let offset = 0; // 偏移量
    let currentBondaryPosition = 0;
    while (-1 !== (currentBondaryPosition = this.indexOf(boundary, offset))) {
        arr.push(this.slice(offset, currentBondaryPosition));
        offset = currentBondaryPosition + boundary.length;
    }
    arr.push(this.slice(offset))
    return arr;
};
function bodyparser({ uploadDir }) { // koa的中间价的写法 就是执行返回一个中间价函数
    return async (ctx, next) => {
        function parserBody(body, resolve) {
            const contentType = ctx.get('Content-Type');
            if (contentType === 'application/x-www-form-urlencoded') {
                body = querystring.parse(body.toString())
            } else if (contentType === 'application/json') {
                body = JSON.parse(body.toString())
            } else {
                if (contentType.includes('multipart/form-data')) {
                    let boundary = '--' + contentType.split('=')[1];
                    let lines = body.split(boundary).slice(1, -1);
                    body = {};
                    lines.forEach(lineBuffer => {
                        let [head, content] = lineBuffer.split('\r\n\r\n');
                        let key = head.toString().match(/name="(.+?)"/)[1];
                        if (!head.includes('filename')) {

                            body[key] = content.toString().slice(0, -2);
                        } else {
                            let content = lineBuffer.slice(head.length + 4, -2);
                            if (!content.length) {
                                return
                            }
                            let filename = uuid.v4();
                            fs.writeFileSync(path.join(uploadDir, filename), content)
                            body[key] = {
                                originName: head.toString().match(/filename="(.+?)"/)[1],
                                filename: path.join(uploadDir, filename),
                                size: content.length
                            }
                        }
                    });
                }
            }
            resolve(body)
        }



        // 我在koa的上下的request对象上增加了一个属性
        ctx.request.body = await new Promise((resolve, reject) => {
            let arr = []
            ctx.req.on('data', function (chunk) {
                arr.push(chunk);
            })
            ctx.req.on('end', function () {
                let body = Buffer.concat(arr)
                parserBody(body, resolve)
            })
        });
        return next()
    }
}

module.exports = bodyparser