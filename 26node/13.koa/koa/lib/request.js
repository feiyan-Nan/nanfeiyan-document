const url = require('url')

const request = {
    get path() {
        // req?
        return url.parse(this.req.url).pathname
    },
    get query() {
        return url.parse(this.req.url, true).query
    },
    get header() {
        return this.req.headers

    },
    get headers() {
        return this.req.headers
    }
}
// ctx.req
// ctx.request.req
/* ctx.request = {
    xxx(){
        this = ctx.request
        this.req = req
    }
}
ctx.request.xxx
*/
module.exports = request