> key(针对的是key设置的过期时间) value

keys * 
type key
flushdb
flushall
多个获取都是m参数
- 字符串 (最核心的) 字符串泛指 里面的number也包含了 （存储的方式都是以字符来来存储）
    - GET KEY
    - SET KEY VALUE
    - EXISTS KEY （我们希望如果用户已经发送过验证码了 就不要发送了，如果没有应该创建一个验证码）
    - DEL KEY
 *  - SETNX KEY  表示如果存在则不插入，否则插入

> 获取范围 （获取反馈的开头 GETLEN）、字符串长度（STRLEN）访问量（ INCR INCRBY DECR DECRBY ...）

对存储的数据添加过期时间 (EXPIRE , TTL/GET , PERSITS 取消过期时间)


- 哈希 (存储对象，不能是嵌套的)  hget hset (Object.keys() -> HKEYS Object.entris()-> HGETALL length-> HLEN user HDEL 删除)
- 列表 (底层实现的是双向链表 有点就是头尾取值快) 存储日志 或者维护消息队列可以的 LRANGE  LPUSH RPUSH LLEN LINDEX LSET 
    -   LREM list 数量(0 就是删除所有 >0 从头开始找到count个删除掉 <0 从尾部删除count个) 删除的是谁
- 集合 set (标签) 不能存放重复项目  SADD SMEMEBERS SCARD SISMEMEBER SREM  集合  交差并 SDIFF SUNION SINTER

- 有序集合 (排行榜  根据分数来排序) 和集合不同的是 多 了一个分数
    - ZADD ZRANGE ZRANGEBYSCORE 计算分数范围内的人   zrank 拿到自己的排名 获取自己的分数ZSCORE   ZREM ZREMRANGEBYSCORE ZREMRANGEBYRANK

redis-server (1234.conf) 为a.com服务
redis-server (1235.conf) 为b.com服务


>  多核cpu （充分理由多核cpu的 方式就是启动多个进程去监听服务） 需要再每个cpu中都开启进程.每个进程中可以创建多个线程 (node中主线程是单线程的， node中自己开启子进程来实现)

