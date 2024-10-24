// 标准输入 监听用户输入的

// const { gzip } = require("zlib");

// process.stdin.on("data", function (chunk) {
//   // 进程的输出结果
//   process.stdout.write(chunk.toString()); // 和console.log() 底层调用的是同一个逻辑
// });

// process.stderr.on("data", function (chunk) {
//   console.log(chunk);
// });
// process.stderr.write("错误");

// process.stdin.pipe(process.stdout); // 读取 -》 写入

// 命令行交互  node核心掌握了 -》 第三方模块

// 常见的转化流 ： 1） 压缩 gzip  2） 加密
const crypto = require("crypto");

// 摘要算法： 特点不能反解， md5  (1) 不可逆 （2）不同内容摘要的结果不同 （3）不同的内容摘要的结果长度相同 （4）相同的内容摘要的结果相同)
const r1 = crypto.createHash("md5").update("hello1").digest("base64");
const r2 = crypto.createHash("md5").update("hello").digest("hex");

// 撞库 （MD5 是一个公开的摘要算法，如果知道输入和输出，是可以根据输出的结果反推输入）

const { Transform, Duplex } = require("stream");
class MyTransform extends Transform {
  _transform(chunk, encoding, clearBuffer) {
    // 集成了可读流 和 可写流
    let r = crypto.createHash("md5").update(chunk).digest("base64");
    this.push(r);
    clearBuffer();
  }
}

const zlib = require("zlib"); // gzip 特点就是对重复性能内容 压缩率高  1 -> gizp

const myTransform = new MyTransform();

class MyZip extends Transform {
  _transform(chunk, encoding, clearBuffer) {
    // 集成了可读流 和 可写流
    let r = zlib.gzipSync(chunk); // 对内容进行gzip
    this.push(r); // 结果放出去
    clearBuffer();
  }
}
// 转化流， 输入和输出都是有关联的
// process.stdin.pipe(new MyZip()).pipe(process.stdout);

// 双工流，就是读和写直接没有联系

class MyDuplex extends Duplex {
  _read() {
    console.log("_read");
  }
  _write() {
    console.log("_write");
  }
}
let myDuplex = new MyDuplex();

myDuplex.on("data", function () {});
myDuplex.write("ok");

// 四种： 读流 写流 双工流  转化流
