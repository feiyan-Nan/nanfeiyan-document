const fs = require("fs");
const path = require("path");

// fs.rmdir("a", function (err) {
//   if (err) return console.log(err);
//   console.log("创建成功");
// });

// fs.mkdir  fs.stat

// 删除目录  树的遍历 （树的遍历方式）

// 树的遍历方式  先序遍历 、 中序遍历 、后续遍历 、 层序遍历 （删除目录需要先处理儿子 在处理父亲）

// fs.readdir("a",function (err, dirs) {
//   // 只能读取一级目录
//   dirs = dirs.map((item) => path.join("a", item));
//   dirs.map((item) => {
//     fs.stat(item, function (err, statObj) {
//       if (statObj.isFile()) {
//         fs.unlink(item, () => {});
//       } else {
//         fs.rmdir(item, () => {});
//       }
//     });
//     // 删除自己
//   });
// });

// webpack hook  串行 需要前后有关系
/*
function removeDir(filepath, callback) {
  fs.stat(filepath, function (err, statObj) {
    if (err) return callback(err);
    if (statObj.isDirectory()) {
      fs.readdir(filepath, function (err, dirs) {
        if (err) return callback(err);
        dirs = dirs.map((item) => path.join(filepath, item));
        let idx = 0; // 异步遍历 就是 递归迭代
        function next() {
          if (idx === dirs.length) return fs.rmdir(filepath, callback);
          let dir = dirs[idx++]; // 先删除第一个，第一个删除后，删除下一个
          removeDir(dir, next);
        }
        next();
      });
    } else {
      fs.unlink(filepath, callback); // 如果是文件直接删除即可
    }
  });
}

removeDir("a", function (err) {
  if (err) return console.log(err);
  console.log("删除成功");
});
*/
// 将删除的逻辑 变成并行的
/*
function removeDir(filepath, callback) {
  fs.stat(filepath, function (err, statObj) {
    if (err) return callback(err);
    if (statObj.isDirectory()) {
      fs.readdir(filepath, function (err, dirs) {
        if (err) return callback(err);
        dirs = dirs.map((item) => path.join(filepath, item));
        if (dirs.length === 0) {
          // 如果没有孩子，则直接删除即可
          return fs.rmdir(filepath, callback);
        }
        let times = 0;
        function done() {
          if (++times === dirs.length) {
            return fs.rmdir(filepath, callback);
          }
        }
        for (let i = 0; i < dirs.length; i++) {
          // 同时删除两个节点
          removeDir(dirs[i], done);
        }
      });
    } else {
      fs.unlink(filepath, callback); // 如果是文件直接删除即可
    }
  });
}

removeDir("a", function (err) {
  if (err) return console.log(err);
  console.log("删除成功");
});
*/
/*
function removeDir(filepath) {
  return new Promise((resolve, reject) => {
    fs.stat(filepath, function (err, statObj) {
      if (err) return reject(err);
      if (statObj.isDirectory()) {
        fs.readdir(filepath, function (err, dirs) {
          if (err) return reject(err);
          dirs = dirs.map((item) => removeDir(path.join(filepath, item)));

          Promise.all(dirs).then(() => fs.rmdir(filepath, resolve));
        });
      } else {
        fs.unlink(filepath, resolve); // 如果是文件直接删除即可
      }
    });
  });
}
*/
const fsPromise = require("fs/promises");
async function removeDir(filepath) {
  let statObj = await fsPromise.stat(filepath);
  if (statObj.isDirectory()) {
    let dirs = await fsPromise.readdir(filepath);
    dirs = dirs.map((item) => removeDir(path.join(filepath, item)));
    await Promise.all(dirs);
    await fsPromise.rmdir(filepath);
  } else {
    return fsPromise.unlink(filepath); // 如果是文件直接删除即可
  }
}
// removeDir("a").then(() => {
//   console.log("删除成功");
// });
// 全部采用async + await + promise

// 同步遍历树 用层序遍历比较容易   深度优先， 广度优先

// 异步可以并行删除，但是同步做删除的话就没有并行了，最容易想到的就是递归 （不递归 就用栈来模拟遍历）

function rmdirSync(filepath) {
  let stack = [filepath]; // 默认认为第一个是文件夹
  let idx = 0;
  let current;
  while ((current = stack[idx++])) {
    let statObj = fs.statSync(current);
    if (statObj.isDirectory()) {
      let dirs = fs.readdirSync(current);
      stack = [...stack, ...dirs.map((dir) => path.join(current, dir))];
    }
  }
  // [ 'a', 'a/b', 'a/b/c', 'a/b/c/d' ]
  for (let i = stack.length - 1; i >= 0; i--) {
    let statObj = fs.statSync(stack[i]);
    if (statObj.isDirectory()) {
      fs.rmdirSync(stack[i]);
    } else {
      fs.unlinkSync(stack[i]);
    }
  }
}

rmdirSync("a");
