const fs = require("fs"); // 文件的可写流  基于stream来实现的文件可写流
const path = require("path");
const WriteStream = require("./writeStream");
const ws = fs.createWriteStream(path.resolve(__dirname, "1.txt"), {
  flags: "w",
  highWaterMark: 3,
  // 这个字段不是标识一次写多少, 而是表示要不要继续读了
  start: 0,
  //   end:
});

let idx = 0;
function write() {
  let f = ws.write("ok");
  console.log(f);
  if (f && idx++ < 10) {
    write();
  }
}
// write();

ws.on("drain", function () {
  console.log("干了");
  write();
});

// 可写流必须有两个方法 write  end

// 多线程有锁的问题 （解决同时的异步操作，核心就是排队），内部按照调用顺序来写入
//，同一个时间内,只有一个线程在执行写入操作

// 可写流源码分析

// 1) new WriteStream
// 2) writeStream 需要继承  Writeable 接口
// 3) 调用父类的Writable.prototype.write，父类的write会调用子类的_write
// 4) 我们只需要自己实现_write 即可

const { Writable } = require("stream");
class MyWriteStream extends Writable {
  constructor() {
    super();
  }
  _write(chunk, ecoding, clearBuffer) {
    console.log("chunk", chunk);
    clearBuffer(); // 递归将缓存区的内容写入
  }
}

let mws = new MyWriteStream();
mws.write("ok");
mws.write("ok");
mws.write("ok");
mws.end("!~~~"); // write + close
