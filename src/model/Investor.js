const mongoose = require('mongoose')

const investor = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    bookmarks:[
        {type:mongoose.Schema.ObjectId, ref:'Offer'}
    ]
})

const Model = mongoose.model('Investor', investor);

module.exports = Model