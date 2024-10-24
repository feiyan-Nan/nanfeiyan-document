const http = require('http');


for (let i = 0; i < 1000; i++) {
    http.get({ port: 4000, hostname: 'localhost' }, function (res) {
        res.on('data', function (data) {
            console.log(data.toString())
        })
    })
}