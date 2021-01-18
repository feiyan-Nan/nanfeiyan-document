const http = require('http');

class KKB {
  listen(...args) {
    const server = http.createServer((req, res) => {
      this.callback(req, res);
    });
    server.listen(...args);
  }

  use(callback) {
    this.callback = callback;
  }
}

const kkb = new KKB();

kkb.listen(3050, () => {
  console.log(`服务已启动`);
});

kkb.use((req, res) => {
  res.end('hello nanfeiyan');
});
