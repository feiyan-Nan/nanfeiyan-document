// 文件读取
const fs = require("fs"); // 文件系统模块 filesystem
const path = require("path"); // 路径模块 进行路径操作

// fs.readFile()  默认path.resolve() 会根据执行的路径来解析绝对路径
// node中的异步api 回调的第一个参数 都是err-first



// function cb(key,value){
//     obj[key] = value;
//     if(Reflect.ownKeys(obj).length === 2){
//         console.log(obj)
//     }
// }
function after(times,cb){
    let obj = {}
    return function (key,value){
        obj[key]= value;
        if(--times == 0){
            cb(obj)
        }
    }
}
let cb = after(2,(data)=>{ // 只有在两次完成后后 才能得到结果，但是无法监控中间的过程 （发布订阅）
    console.log(data)
})
fs.readFile(path.resolve(__dirname, "a.txt"), "utf-8", function (err,data) {
    cb('msg',data);
});


fs.readFile(path.resolve(__dirname, "b.txt"), "utf-8", function (err,data) {
    cb('age',data);
});


// 例如前端 并发ajax ，我们需要等待多个异步请求都完成后 将结果拿到渲染页面
// 同步 异步回调的执行结果


// 异步方法 在处理错误的情况时  必须通过回调的参数来处理