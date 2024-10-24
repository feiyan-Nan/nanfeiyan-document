const fs = require("fs");
const path = require("path");

const WriteStream = require("./writeStream");
const ReadStream = require("./readStream");
const rs = new ReadStream(path.resolve(__dirname, "1.txt"), {
  highWaterMark: 4,
});
const ws = new WriteStream(path.resolve(__dirname, "2.txt"), {
  highWaterMark: 1,
});

rs.pipe(ws); // 异步的， 异步串行的

/*
rs.on("data", function (data) {
  let flag = ws.write(data); // 写入的时候 返回当前是否要继续读取  写入的数量 和 highWaterMark进行比较
  if (!flag) rs.pause();
});
rs.on("end", function () {
  // 读取完毕后
  ws.end(); // 稍后关系文件
});

ws.on("drain", function () {
  // 所有的数据都写入到文件后 会执行此方法 （必须得满足预期后才出发）

  rs.resume();
});
*/

// 读一点 写一点

// on('data') on('end') 可读流
// write  end 可写流
// pipe 从可读流 -》 可写流
