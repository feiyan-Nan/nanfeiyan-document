const response = {
    set body(value) {
        this.res.statusCode = 200;
        if (value == null) {
            this.res.statusCode = 204;
        }
        this._body = value;
    },
    get body() {
        return this._body
    }
}

module.exports = response