const mongoose = require('mongoose')

const commpanySChema = new mongoose.Schema({
    name:{
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
    isOffering:{
        type:Boolean,
        default:false
    },
    companyDescription:{
        type:String,
        require:true
    },
    offer:{
        type:mongoose.Schema.ObjectId,
        ref:'Offer'
    }
})

const Model = mongoose.model('Company', commpanySChema);

module.exports = Model