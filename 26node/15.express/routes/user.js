const express = require('../express');
const router = express.Router()


const userSecond = express.Router()

userSecond.get('/add', function (req, res) {
    res.end('second/add')
})
userSecond.get('/remove', function (req, res) {
    res.end('second/remove')
})
router.use('/second', userSecond)


router.get('/add', async function (req, res) {
    res.end('user add ')
})
router.get('/remove', async function (req, res) {
    res.end('user remove ')
})

module.exports = router