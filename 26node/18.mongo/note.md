## NoSql
传统的关系型数据库 mysql，场景，高并发写入，数据量大的时候做查询操作 （将数据库进行拆分 拆表实现优化，但是如果数据量特别大，达到一定规模后也无法扩展了） 需要使用nosql  非关系型数据库 （不建立关系，直接将数据存储到一起，提高了存储的性能，查询更方便）

常见的nosql 1） 键值对的数据库 redis 存储和读取性能是极高的 操作简单，而且容易。 日志系统、数据的缓存 （服务端渲染） 我们可以使用redis 实现缓存 
2） 文档型数据库 mongodb （更贴近于关系型数据库，优点就是可以随意存储）

> 数据关联多 选用rdb，如果数据量大，对存储性能和查询有高要求选择nosql。 在一个应用一般采用多个数据库来管理 mysql+mongo+redis

## 命令 
- show dbs 显示所有的数据库
- db 表示当前数据库
- use 来切换数据库 
- db.dropDatabase()

- 像某个集合中插入文档 会自动创建集合和数据库  
- db.createCollection('student')  

> 数据库 -> 集合 -> 文档（一条条的json  bson）  db.集合名.insert() 插入 ， 插入的时候会自动生成_id. _id 可以自己修改，但是我们一般不管理他   db.集合名.find() 查询所有 json

先创建用户 ， 能实现数据的备份和还原， mongo到处对应的数据格式 


-  db.createUser({user:"jw",pwd:"jw",roles:[{role:"dbOwner",db:"web"}]}) 创建用户


mongodump --db web --collection student --out backup 备份数据库
mongorestore backup 还原数据库
mongoexport -d web -c student --csv -f _id,name -o a.csv
mongoimport -d web -c student --type=csv --fields _id,name --file a.csv



