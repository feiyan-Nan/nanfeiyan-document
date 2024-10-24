const mongoose = require('mongoose');


const ArticleSchema = mongoose.Schema({
    title: String,
    content: String,
    //  文章里面要存着，是哪个用户编写的文章
    user_id: {
        // ref: 'User', // 这个字段引用了User集合
        type: mongoose.SchemaTypes.ObjectId
    },
    cate_id: {
        // 关联分类的id
        type: mongoose.SchemaTypes.ObjectId
    }
}, {
    // 默认创建用户的时候 会添加两个字段
    timestamps: true
})


module.exports = mongoose.model('Article', ArticleSchema, 'article')
