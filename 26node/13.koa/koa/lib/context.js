const context = {
    // get path() {
    //     return this.request.path
    // },
    // get query() {
    //     return this.request.query
    // },
}
function defineGetter(target, key) {
    // Object.defineProperty.get 方法
    context.__defineGetter__(key, function () {
        return this[target][key]
    })
}

function defineSetter(target, key) {
    // Object.defineProperty.get 方法
    context.__defineSetter__(key, function (value) {
        this[target][key] = value
    })
}

// ctx.path -> ctx.request.path
defineGetter('request', 'path')
defineGetter('request', 'query')
defineGetter('request', 'header')
defineGetter('request', 'headers')

// // ctx.body -> ctx.response.body
defineGetter('response', 'body')
// ctx.body = 123 => ctx.response.body = 123
defineSetter('response', 'body')
module.exports = context