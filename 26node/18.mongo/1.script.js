//use web

//db.student.find({})

//let data = [];
//for(let i = 0 ; i < 10; i++){
//    data.push({name:"jw" + i,age: i ,gender:1})
//}
//db.student.insertMany(data)

// 查询的时候 常见的查询 相等查询， 范围查询 ， 匹配查询
// 可以再查询的时候限制显示字段 1 表示显示  0 就表示隐藏, 01 不能通用

// 条件查询直接再第一个参数的地方 进行添加条件即可  
// 1) 并且的关系
//db.student.find({name:'jw9',age:9},{name:1,age:1})
// 2) 或的关系  匹配符号 $ 模式匹配
//db.student.find({$or:[{name:'jw9',age:9},{name:'jw7',age:7}]},{name:1,age:1})

// 3) $gt $lt $gte  不相等，在不在范围内 正则查询 like
//db.student.find({name:/jw(.)+/},{name:1,age:1})

// 嵌套文档 对象套对象  对象套数组 


//db.student.update({name:'jw'},{adress:{num:30,value:"霍营"}})

// 嵌套的文档在查询的过程中 需要通过属性来查询，不能通过完全匹配来查询
//db.student.update({"adress.value":"霍营","adress.num":30},{$set:{name:"jw"}})

// mongo 比较适合大数据量而且存储没有固定字段的数据 ， 爬虫 （在真正开发的时候 我们还是希望能约定存储的字段、默认值、类型）
//db.student.updateMany({"adress.value":"霍营","adress.num":30},{$set:{name:"zf"}})

//db.student.updateMany({"adress.value":"霍营","adress.num":30},{$set:{hobby:[1,3,5,'eat','drink',{n:1}]}})


// 对象中套用数组  和 数组中套对象用法一致
//db.student.find({"hobby.0":1})
//db.student.find({"hobby":{$all:[1,3,5]}})
//db.student.find({"hobby.n":1}) 
//db.student.update({"hobby":{$all:[1,3,5]}},{$push:{hobby:[1,2,3]}})



//db.student.find()

db.student.deleteMany({name:'zf'})

