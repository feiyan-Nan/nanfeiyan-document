const fs = require("fs");
const path = require("path");

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
