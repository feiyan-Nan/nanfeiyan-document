const { createReadStream } = require('fs')
const mime = require('mime')
const fs = require('fs/promises')
const path = require('path')
function serve(dirname) {
    return async (ctx, next) => {
        let filepath = path.join(dirname, ctx.path);
        try {
            let statObj = await fs.stat(filepath);
            console.log(filepath)
            if (statObj.isFile()) {
                ctx.type = (mime.getType(filepath) || 'text/pain') + ';charset=utf-8';
                ctx.body = createReadStream(filepath)
            } else {
                return next()
            }
        } catch (e) {
            return next();
        }
    }
}

module.exports = serve
