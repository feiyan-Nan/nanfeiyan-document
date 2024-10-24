/**
 * const fs = require("fs"); // 文件的流  就是为了能保证可以按照需要去获取内容
const path = require("path");
const ReadStream = require("./readStream");
const rs = fs.createReadStream(path.resolve(__dirname, "1.txt"), {
  // const rs = new ReadStream(path.resolve(__dirname, "1.txt"), {
  //   flags: "r",
  highWaterMark: 3, // 单位是字节 64 * 1024
  start: 1,
  end: 4, // 0-4 意味着读取5个字节
});

// 底层也是发布订阅
rs.on("open", function (fd) {
  console.log(fd);
});
rs.on("data", function (chunk) {
  console.log(chunk);
});
rs.on("data", function (chunk) {
  console.log(chunk);
});
rs.on("end", function () {
  // 这里需要用buffer拼接 不能采用字符串
  console.log("文件读取完毕");
});
rs.on("error", function (error) {
  console.log(error);
});
rs.on("close", function () {
  console.log("关闭文件");
});

 *
 *
 *
 */
// on('data') on('end')  可读流 一定都具备这两个方法
// on('open') on('close') 文件操作 才会有 open 和 close
// on('error')

// 1.内部就是创建了一个可读流 ：  new ReadStream
// 2. 内部会对用户的属性 进行格式化
// 3.Readble.apply(this,options) Reflect.apply
// 4.我们要自己实现一个读流，必须要继承Readble接口
// 5.maybeReadMore -> Readable.read方法 -> ReadStream._read
// 6.用户会将读取到的结果 调用父类的push传入， 内部会自动emit数据
const { Readable } = require("stream");
class MyReadStream extends Readable {
  constructor() {
    super();
    this.i = 0;
  }
  _read() {
    // 这里的实现可以是fs的实现也可以是自己的，
    if (this.i === 10) {
      this.push(null);
    } else {
      this.push(this.i++ + "");
    }
  }
}
let mrs = new MyReadStream();
mrs.on("data", function (data) {
  console.log(data);
});
mrs.on("end", function () {
  console.log("end");
});
mrs.on("pause", function () {
  console.log("pause");
});

// 以后再看到 on('data')  on('end') 就是可读流
