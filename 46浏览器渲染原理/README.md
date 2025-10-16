### http2.0的特征:  二进制分帧、多路复用 首部压缩,服务器推送


“重排”“重绘”


```js
let a = 1
function division(a,b){
  console.log(++a)
    return division(a,b)
}
console.log(division(1,2))
```