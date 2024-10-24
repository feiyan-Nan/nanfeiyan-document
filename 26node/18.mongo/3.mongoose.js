const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/web', function (err) {
    if (err) return console.log(err);
    console.log('数据库连接成功')
});
const User = require('./model/user');
const Article = require('./model/article');
const Cate = require('./model/cate');



(async () => {
    // let user = await User.findById('62ef69c8275256735421541a');

    // Article.create 相当于用整个集合来创建一个文档
    // 创建一个文档将其保存到集合中
    // let article = await new Article({ title: 'node', content: 'mongodb学习', user_id: user._id }).save()

    // let article = await Article.findById('62ef6e2c515d38e2e102a7ee') // 我现在有了文章id了 如何查询谁写的
    // let user = await User.findById({ _id: article.user_id });

    // 早期的写法，我们主动在表的字段上增加关联
    // let r = await Article.findById('62ef6e2c515d38e2e102a7ee').populate('user_id', { 'name': 1 });
    // console.log(r)


    // 复杂的查询 使用聚合查询，可以实现多表查询，分页查询，平均值、综合，分类、分组  管道
    // let article = await Article.aggregate([
    //     {
    //         $lookup: { // 查询另一张表的方式
    //             from: 'user', // 查询的另一张表是谁
    //             localField: 'user_id', // 我本地的字段 
    //             foreignField: '_id',
    //             as: 'user', // 最终显示的字段是谁
    //         }
    //     },
    //     {
    //         $lookup: { // 查询另一张表的方式
    //             from: 'cate', // 查询的另一张表是谁
    //             localField: 'cate_id', // 我本地的字段 
    //             foreignField: '_id',
    //             as: 'cate', // 最终显示的字段是谁
    //         }
    //     },
    //     {   // 根据这个匹配的结果来进行查询
    //         $match: {
    //             _id: mongoose.Types.ObjectId('62ef6e2c515d38e2e102a7ee')
    //         }
    //     },
    //     {
    //         $project: {
    //             user: {
    //                 name: 1
    //             },
    //             cate: {
    //                 title: 1
    //             }
    //         }
    //     }
    // ]);
    let user = await User.aggregate([
        {
            $match: {}
        },
        {
            // 
            $group: {
                _id: '$name', // 语文 数学 英语 根据表中的名字进行分组 ，分组后可以将年龄累加
                age: { $sum: "$age" }
            }
        },
        {
            $limit: 3
        },
        {
            $skip: 2
        }
    ])
    console.log(user)

    // $lookup  $group $match  $limit $skip


    // await Cate.create([{ title: 'a' }, { title: 'b' }])

    // await Article.findByIdAndUpdate('62ef6e2c515d38e2e102a7ee', { cate_id: '62ef71b81716345de223dadb' })
    // 用户 关联文章 文章关联分类   文章对应的分类谁
    // 用户查到 他用过哪些分类





    mongoose.disconnect()
})()