const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type:  String,
        required: true
    },
    isbn:{
        type:  Number,
        required: true
    },
    publisher: {
        type:  String,
        required: true
    },
    category:{
        type:  String,
    },
    price:{
        type:  String,
        required: true
    },
    year:{
        type:  Number,
    }
})

module.exports = mongoose.model('Book',PostSchema)