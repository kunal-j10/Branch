const mongoose=require('mongoose')

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
   status:{
    type:String
   }
})

const Message=mongoose.model('chatdatas',messageSchema)
module.exports=Message