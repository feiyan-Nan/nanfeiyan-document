

const Application = require('./application')
// 1) 创建应用 
// 2) 路由系统
// 3) 应用本身
function createApplication() {
    return new Application()
}

module.exports = createApplication


// express 本身