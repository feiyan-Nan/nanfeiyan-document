

const Application = require('./application')
const Router = require('./router')
// 1) 创建应用 
// 2) 路由系统
// 3) 应用本身
function createApplication() {
    return new Application()
}
createApplication.Router = Router
module.exports = createApplication


// express 本身