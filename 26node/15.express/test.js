const express = require('express');
const http = require('http');
const app = express();
app.get('/api', function (req, res) {
    res.json({ name: 'jw' })
})
app.listen(4000, function () {
    console.log('server start', 4000)
})