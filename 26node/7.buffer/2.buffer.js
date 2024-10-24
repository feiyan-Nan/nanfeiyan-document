const buf1 = Buffer.from("珠");
const buf2 = Buffer.from("峰");

const bigBuffer = Buffer.alloc(6); // buffer 非常像数组 有索引有长度（索引取出来的就是对应的字节） 长度就是字节长度

Buffer.prototype.copy = function (
  target,
  targetStart,
  sourceStart = 0,
  sourceEnd = this.length
) {
  for (let i = 0; i < sourceEnd - sourceStart; i++) {
    target[targetStart + i] = this[sourceStart + i];
  }
};
// 参数太多 不方便使用
buf1.copy(bigBuffer, 0);
buf2.copy(bigBuffer, 3, 0, 3);

// console.log(bigBuffer);

Buffer.concat = function (list, len) {
  if (len == undefined) {
    len = list.reduce((t, c) => t + c.length, 0);
  }
  let buf = Buffer.alloc(len);
  let offset = 0;
  list.forEach((b) => {
    b.copy(buf, offset);
    offset += b.length; // 累加偏移量
  });
  return buf;
};

const buf = Buffer.concat([buf1, buf2, buf2]);

console.log(Buffer.isBuffer(Buffer.alloc(3)));

// const len = buf.slice(0, 3);
const buffer = buf.slice(0, 3); // 截取的是内存内容
console.log(buf);

// slice  isBuffer
// Buffer.from
// Buffer.alloc
// buf.toString()
// buf.length
// concat方法
// isBuffer
// slice 截取 比如说我们写的buffer 比较大，有的用不完我们可以截取出有用的部分
// 我们客户端给服务端传递的数据 （tcp）

// buffer 的应用
