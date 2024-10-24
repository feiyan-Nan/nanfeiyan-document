const mongoose = require('mongoose');
const CateSchema = mongoose.Schema({
    title: String,
}, {
    timestamps: true
})
module.exports = mongoose.model('Cate', CateSchema, 'cate')
