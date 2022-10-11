const mongoose=require('mongoose')

// Schema for all user chat data
const messageSchema=new mongoose.Schema({
   userId:{
     type:Number
   },
   timeStamp:{
     type:Date
   },
   messageBody:{
     type:String
   },
   replyBody:{
    type:String
   },
   status:{
    type:String,
   }
})

const Message=mongoose.model('chatdatas',messageSchema)
module.exports=Message