const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        status : String
    },
    city : {
        type : String,
        required : true
    }
})

const Userdb = mongoose.model('userdb', schema);

//exports this module
module.exports = Userdb;