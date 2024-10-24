const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/web', function (err) {
    if (err) return console.log(err);
    console.log('数据库连接成功')
});


const User = require('./model/user');
(async () => {

    // 1) 创建逻辑
    // let arr = []
    // for (let i = 0; i < 10; i++) {
    //     arr.push({ name: ('jw' + i), pwd: 'abc', age: i, gender: 1, address: { num: 10, value: '霍营' } })
    // }
    // let r = await User.create(arr)
    // console.log(r)

    // let r = await User.create({ name: 'jw', pwd: 'abc', age: 120, gender: 1, address: { num: 10, value: '霍营' } })
    // console.log(r)

    // 2）删除逻辑
    // await User.deleteMany({})

    // 3) 查询逻辑 mongo中的原生语法 都支持 , 语法都支持
    // let users = await User.find({ name: /jw(\d)+/, age: { $lt: 5 } }, { pwd: 0 })

    let limit = 3; // 每页显示多少条
    let currentPage = 2;
    // 按照查询的规则来查询 

    // 内部会自动先排序sort + skip + limit
    let r = await User.find().sort({ age: -1 }).limit(limit).skip((currentPage - 1) * limit)

    // 让集合有关联性，可以做关联查询 

    mongoose.disconnect(); // 正常来说项目启动后，肯定不会断开
})()
// class User {
//     constructor() {
//         this.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//         this.l = 0;
//         this.s = 0;
//     }
//     find() {
//         return Promise.resolve().then(() => {
//             this.arr.slice(this).slice(0, this.l)
//         })
//     }
//     limit(value) {
//         this.l = value;
//     }
//     skip(value) {
//         this.s = value;
//     }
// }
