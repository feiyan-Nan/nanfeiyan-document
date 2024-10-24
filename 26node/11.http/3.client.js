const net = require('node:net');
const client = net.createConnection({ port: 3000 }, () => {
    client.write(`
GET / HTTP/1.1
name: jw

`);
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('error', (err) => {
    console.log(err);
});
client.on('end', () => {
    console.log('disconnected from server');
});