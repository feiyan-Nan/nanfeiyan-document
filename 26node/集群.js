const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
// Fork workers.
  console.log(`Master ${process.pid} is running`)
  for (var i = 0; i < numCPUs; i++) {
    console.log('ddd')
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
// Workers can share any TCP connection
// In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(80);
  console.log(`Worker ${process.pid} is running`)
}