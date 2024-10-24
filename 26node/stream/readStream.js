const fs = require('node:fs');

// 不写默认就是64k, 每次读取64k
const rs = fs.createReadStream('./1.txt');


rs.on('error', (err) => {
  console.error(err);
});
rs.on('data', (chunk) => {
  console.log(chunk);
});
rs.on('ready', (chunk) => {
  console.log('ready');
});
rs.on('close', (chunk) => {
  console.log('关闭文件');
});

rs.on('end', (chunk) => {
  console.log('文件读取完毕');
});

rs.on('open', (chunk) => {
  console.log('文件打开');
});