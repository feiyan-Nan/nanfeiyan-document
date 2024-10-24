const fs = require("fs");
const path = require("path");
// 在文件操作中 除了 文件还有文件夹
function mkdir(url, callback) {
  let paths = url.split("/");
  let idx = 0;
  function mkdir(err) {
    if (idx === paths.length || err) return callback(err);
    const url = paths.slice(0, ++idx).join("/");
    // 创建前应该判断一下 url是否存在
    fs.stat(url, function (err, statObj) {
      //
      //   console.log(err, statObj, statObj.isFile(), statObj.isDirectory());
      if (err) {
        return fs.mkdir(url, mkdir);
      } else {
        mkdir();
      }
    });
  }
  mkdir();
}

mkdir("a/b", function (err) {
  if (err) return console.log(err);
  console.log("创建成功");
});

// fs.mkdir  fs.stat

// 删除目录  树的遍历 （树的遍历方式）
