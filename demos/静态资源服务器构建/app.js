const http = require('http');
const chalk = require('chalk')
const path = require('path')
const conf = require('./config/defaultConfig')
const route = require('./helper/route')


const server = http.createServer((req,res) => {
  const filePath = path.join(conf.root, req.url)
  res.setHeader('Content-Type', 'text/plain; charset=utf8');
  route(req,res, filePath)
})


server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`
  console.info(`Server running at ${chalk.green(addr)}`)
})








