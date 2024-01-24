const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    message:{
        type:String,
        require:true,
        maxLength:100,
    }
})
module.exports = mongoose.model("Message",MessageSchema)