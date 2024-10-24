setInterval(() => {
    require('fs').appendFileSync('1.txt', 'hello')
}, 1000);