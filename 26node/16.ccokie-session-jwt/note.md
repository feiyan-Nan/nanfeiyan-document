## cookie 和 session 及localStorage、sessionStorage做对比
localStorage、sessionStorage的区别，都是存在浏览器上 （local他的生命周期只要用户不删除一值存在，session是回话及的）

redux vuex。。。 状态管理工具，默认是将数据存储到内存中，页面刷新就丢失了。 （1）重新调用接口拿到数据 2）用户凭证）

什么时候只能用sessionStorage不能用localStorage (有一个列表页，进入到列表页面的详情页中)

- 进入到a页面（a页面的信息localStorage） 刷新 （默认会以最终的存储为结果 ，变为b的内容）
- 通过列表页面打开了b（b页面的信息localStorage） 

> 存储的方式不同 1个是只有一份localStorage  ， 每个会话都有一份sessionStorage (可以存储前端的文件，减少请求)


> 存的是本地 不会发送到服务器上， 服务端无法获取本地存储的 5M 

## cookie解决的问题
- http默认是无状态的，每次请求不知道是谁来了 使用cookie来描述信息 （默认请求的时候会携带这个cookie）
- cookie可以前端设置 也可以服务端设置 （合理设置cookie） cookie设置到了请求头上（大小限制4k）。 默认cookie也不支持跨域，cookie可以支持父子域通信 （内部可以区分哪些路径生效，哪些子域名生效）
- cookie 最终也是存到浏览器上的 （用户可以篡改  如何防止cookie被篡改  签名） cookie中不能存放敏感信息


## session（就是服务端的一个对象而已）
- 用来存放敏感信息的，但是需要给用户下发一个唯一标识，而且需要用户下次携带过来 （cookie） session基于cookie
- session的缺陷就是 （如果服务器重启数据就丢失了，需要存储session对象）

## jwt(json web token)