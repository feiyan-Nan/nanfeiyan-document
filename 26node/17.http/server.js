const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
    key: fs.readFileSync('localhost-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem')
});
server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
    // stream is a Duplex 双工
    stream.respond({ // headers
        'content-type': 'text/html; charset=utf-8',
        ':status': 200
    });
    stream.end('<h1>Hello World</h1>'); // body
});

server.listen(8443);