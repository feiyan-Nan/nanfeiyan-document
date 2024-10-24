const fs = require("fs");
const path = require("path");

// 做拷贝  源文件 -》 目标文件
// 当我们默认读取的时候 读取到的内容就是buffer
// 如果文件默认不存在，读取的时候会报错，但是写入的时候会清空创建
/*
fs.readFile(path.resolve(__dirname, "jw.jpeg"), function (err, data) {  // 64k以下可以采用这种方式 
  fs.writeFile(path.resolve(__dirname, "x.jpeg"), data, function (err) {});
});
*/
// 1. err 处理 如果按照这种写法 读取的时候需要处理错误 写入的时候也需要处理错误
// 2. 如果文件非常大怎么办？ 这种方式不适合会淹没可用内存
// 3. 希望精确读取做不到 （http 206 响应部分内容）

// 流式 （可以自己控制读取和写入的速率，可以要求暂停和恢复。。。。）

// 这种api用不到  fs中有流 就是对我稍后讲的api的封装

// r 读
// w 写
// r+ 能读能写 以读为准 就是读取的文件不存在会报错
// w+ 能写能读 如果文件不存在会创建
// a append追加
let buffer = Buffer.alloc(3);

// i/o操作 读取(写入到内存中) 写入操作（读取到内存中）
fs.open(path.resolve(__dirname, "1.txt"), "r", function (err, rfd) {
  fs.open(path.resolve(__dirname, "2.txt"), "w", function (err, wfd) {
    let roffset = 0;
    let woffset = 0;
    //file descriptor
    // 写入到buffer的第0个位置 写入3个 并且读取文件的位置从第0个   真实读取到的个数
    function close() {
      fs.close(wfd, function () {});
      fs.close(rfd, function () {});
    }
    function next() {
      fs.read(
        rfd,
        buffer,
        0,
        buffer.length,
        roffset,
        function (err, bytesRead) {
          if (bytesRead === 0) return close();

          // 权限符号 2写入  4 读取 1代表的是执行   666  rw-rw-rw  chmod -R 777  rwxrwxrwx
          // 将buffer 读取出来从第0个位置 读取3个， 并且写入到文件的哪个位置去
          fs.write(wfd, buffer, 0, bytesRead, woffset, function (err, written) {
            roffset += bytesRead;
            woffset += bytesRead;
            next();
          });
        }
      );
    }
    next();
  });
});
// 文件流-》就是将上述方法的读写进行了分离，并且实现了速率控制，解决嵌套问题 （这里用的是发布订阅）  流很重要

// 这样做就是读一点 写一点 ， 但是没有能控制速率
// 嵌套太多  将读写分离出来
// 回调层次太多，用户也无法拿到读取的内容
