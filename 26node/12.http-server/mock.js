

module.exports = function (pathname, req, res) {
    // 如果用户增加了 mocks 应该先看是否能命中接口， 如果能命中就不执行静态服务了
    if (pathname === '/user') {
        if (req.method === 'GET') {
            res.end(JSON.stringify(req.query))
        } else if (req.method === 'POST') {
            res.end(JSON.stringify(req.body))
        } else if (req.method === 'DELETE') {
            res.end(JSON.stringify(req.body))
        }
        return true;
    }

}