const net = require('node:net');
const server = net.createServer((socket) => {

    socket.write(`
HTTP/1.1 200 ok
Content-Length: 4

hello`);
});
server.listen(3000, () => {
    console.log('server bound');
});

// http 是基于tcp处理了res
