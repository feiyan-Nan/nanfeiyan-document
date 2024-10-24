// 发布 （触发功能） & 订阅（订阅一些功能）

const fs = require("fs"); // 文件系统模块 filesystem
const path = require("path"); // 路径模块 进行路径操作


let events = {
    _obj:{},
    _arr:[], // 订阅中心，将所有的事，都订阅到数组中
    on(callback){
        this._arr.push(callback);
    },
    emit(key,value){ // 事情发生后，来依次触发回调
        this._obj[key] = value;

        this._arr.forEach(cb=> cb(this._obj))

    }
}


// 可以订阅多个
events.on(()=>{ // 监控每次触发的逻辑
    console.log('读取完毕后机会触发')
})

events.on((data)=>{ // 监控所有数据读取完毕
    if(Reflect.ownKeys(data).length === 2){
        console.log('数据全部读取完毕',data)
    }
})
fs.readFile(path.resolve(__dirname, "a.txt"), "utf-8", function (err,data) {
    events.emit('msg',data);
});


fs.readFile(path.resolve(__dirname, "b.txt"), "utf-8", function (err,data) {
    events.emit('age',data);
});

/// 通过发布订阅来实现解耦合， 灵活，但是触发是需要用户自己触发的

// 观察者模式是基于发布订阅模式的  我们数据变化后可以自动通知触发发布 （vue 响应式原理）