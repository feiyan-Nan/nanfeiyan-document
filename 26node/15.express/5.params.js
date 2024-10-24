const express = require('./express');
const http = require('http')
const app = express();
const axios = require('axios')

// req.query ? 查询参数
// /user/1/2 -> {username:1,password:2}

// query 用户自己决定key的名字， params 是规定了key 的名字
app.get('/user/:username/:password', async function (req, res) {
    res.end(JSON.stringify(req.params))
    // let json = await axios.get('http://localhost:4000/api')
    // const client = http.request({
    //     method: 'get',
    //     hostname: 'localhost',
    //     port: 4000,
    //     path: '/api',
    // }, function (res) {
    //     res.on('data', function (chunk) {
    //         console.log(chunk.toString())
    //     })
    // });
    // client.end()
})
app.listen(3000, function () {
    console.log('server start', 3000)
})



// VUE2 ReactRouter path-to-regexp
// const toReg = require('path-to-regexp');
// let requestURL = '/user/1/2'
// let configURL = '/user/:username/:password';

// let keys = []
// // /^\/user\/(?:([^\/]+?))\/(?:([^\/]+?))\/?$/i 
// let reg = toReg(configURL, keys);
// console.log(reg, keys.map(item => item.name))

// 将用户的配置路径转化成正则，用此正则来捕获真实的请求路径， 用匹配的结果和收集的路径组成最终的结果
// let keys = [];
// const regExpr = configURL.replace(/:([^\/]+)/g, function () {
//     keys.push(arguments[1]);
//     return '([^\/]+)'
// })
// console.log(keys, regExpr)

// let [, ...args] = requestURL.match(new RegExp(regExpr))
// console.log(args, keys)


