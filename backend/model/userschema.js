const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
   email:{
     type:String
   },
   password:{
     type:String
   }
})

const User=mongoose.model('user',userschema)
module.exports=User