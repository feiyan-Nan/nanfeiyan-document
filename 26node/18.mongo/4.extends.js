const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/web', function (err) {
    if (err) return console.log(err);
    console.log('数据库连接成功')
});

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    pwd: {
        type: String,
        validate(value) {
            return value.length > 0
        }
    },
    age: {
        type: Number,
        default: 0,
        min: 0,
        max: 120
    },
    gender: {
        type: Number,
        enum: [0, 1]
    },
    array: [String],
    address: {
        num: Number,
        value: String
    },
}, {
    timestamps: true
})

const plugin = require('./5.plugin')
UserSchema.plugin(plugin, { xxx: 'xxx' }); // Vue.use(plugin,{a:1})


const User = mongoose.model('User', UserSchema, 'user');
(async () => {
    // 我希望name作为唯一标识来使用， 我们查询只根据name来查询
    // 1) 扩展1
    // let user = await User.findByName('jw2');

    // 2) 存储用户的密码时 我希望将密码可以自动转换成md5
    const user = await new User({ name: 'zf', pwd: 'zf' }).saveMD5('pwd')
    console.log(user.userLen)
    // 3) 希望在做操作的时候校验用户名是否存在，如果不存在则可以创建
    mongoose.disconnect()
})()