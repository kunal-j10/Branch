const mongoose=require('mongoose')

const messageSchema=new mongoose.Schema({
   userId:{
     type:Integer
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

const message=mongoose.model('GeneralistRails_Project_MessageData',messageSchema)
exports.module=message