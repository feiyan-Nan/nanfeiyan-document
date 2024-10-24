const crypto = require('crypto');

function plugin(UserSchema, options) {
    // 在静态的方法上添加属性，可以通过model直接调用
    UserSchema.statics.findByName = function (username) {
        return this.findOne({ name: username })
    }
    UserSchema.pre('save', function (next) {
        console.log('save');
        if (this.name === 'zf') {
            next();
        }
        // 如果不调用next 就不会执行此方法了
    })
    UserSchema.post('save', function () {
        console.log('next', 'save')
        // 如果不调用next 就不会执行此方法了
    })
    // 虚拟属性 vue中的计算属性， 不存在 但是可以访问到
    UserSchema.virtual('userLen').get(function () {
        // 商品的价格 数量 = 总价格
        return this.name.length
    })

    // 在实例上对方法进行封装
    UserSchema.methods.saveMD5 = function (key) {
        if (this[key]) {
            // 内部自动对内容进行md5处理
            this[key] = crypto.createHash('md5').update(this[key]).digest('base64')
        }
        // this.model('User'); // 找到的是集合
        return this.save()
    }
}
module.exports = plugin