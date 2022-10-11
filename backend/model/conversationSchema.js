const mongoose=require('mongoose')

// Schema for previous conversation with a perticular User ID
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