const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type:  String,
        required: true
    },
    address:String,

    email:{
        type:  String,
        required: true
    }
})

module.exports = mongoose.model('Publisher',PostSchema)