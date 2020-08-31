const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type:  String,
        required: true
    },
    parentcategory: String
})

module.exports = mongoose.model('Catagory',PostSchema)