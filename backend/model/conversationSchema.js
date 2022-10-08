const mongoose=require('mongoose')

const conversationSchema=new mongoose.Schema({
   userId:{
     type:Number
   },
   messages:{
     type:Array
   }
})

const Conversation=mongoose.model('conversation',conversationSchema)
module.exports=Conversation