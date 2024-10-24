const express = require('./express');
const app = express();

const user = require('./routes/user')
const article = require('./routes/article')


// /user/add -> 添加用户
// /user/remove - > 删除用户


// article/add 添加文章
// article/remove 删除文章

app.use('/user', user)
app.use('/article', article)


app.listen(3000, function () {
    console.log('server start', 3000)
})
