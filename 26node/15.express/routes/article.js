
const express = require('../express');
const router = express.Router()

router.get('/add', async function (req, res) {
    res.end('article add ')
})
router.get('/remove', async function (req, res) {
    res.end('article remove ')
})

module.exports = router