const mongoose = require('mongoose');
const randToken = require('rand-token');
const PostSchema = mongoose.Schema({
    username:{
        type:  String,
        required: true,
        unique: true,
        min:3,
        max:30
    },
    email: {
        type:  String,
        required: true,
        unique: true

    },
    password:{
        type: String,
        required: true,
        min:6,
        max:12
    },
    token: {
        type: String,
        default: ()=> {
        return randToken.generate(64);
    },
    role:{
        type:String,
        default:"guest"
    }
}
    
})

module.exports = mongoose.model('User',PostSchema)