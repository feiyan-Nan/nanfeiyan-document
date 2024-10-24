const pathToRegExp = require('path-to-regexp')
function Layer(path, handler) {
    this.path = path;
    this.handler = handler;
    this.regExp = pathToRegExp(this.path, (this.keys = []), { strict: true });
}
Layer.prototype.match = function (pathname) {
    if (this.path === pathname) {
        return true
    }
    let matches = pathname.match(this.regExp);
    if (matches) {
        let params = this.keys.reduce((matchObj, current, index) => (matchObj[current.name] = matches[index + 1], matchObj), {})
        this.params = params
        return true;
    }

    if (!this.route) {
        if (this.path === '/') {
            return true;
        }
        return pathname.startsWith(this.path + '/')
    }
    return false
}
Layer.prototype.handle_request = function (req, res, next) {
    this.handler(req, res, next)
}
Layer.prototype.handle_error = function (err, req, res, next) {
    this.handler(err, req, res, next)
}
module.exports = Layer