const fs = require('fs')
const { promisify }  = require('util')
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir)

module.exports = async function (req, res, filePath) {
  try {
    const stats = await stat(filePath)
    // 是目录怎么处理
    if(stats.isDirectory()) {
      const files = await readdir(filePath)
      res.statusCode = 200;
      res.end(files.join(','))
    } else if(stats.isFile()) {
      res.statusCode = 200;
      fs.createReadStream(filePath).pipe(res)
    }
  } catch (e) {
    res.statusCode = 404;
    res.end(`${filePath} is not a directory or file \n ${e.toString()}`)
  }
}
