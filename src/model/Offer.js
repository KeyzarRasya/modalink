const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
    offeringCompany:{
        type:mongoose.Schema.ObjectId,
        require:true,
        ref:'Company'
    },
    percentage:{
        type:Number,
        require:true,
        min:0,
        max:100
    },
    bookmark:[
        {type:mongoose.Schema.ObjectId, ref:'Investor'}
    ],
    isHandshake:{
        type:Boolean,
        default:false
    }
})

const Model = mongoose.model('Offer', offerSchema);

module.exports = Model