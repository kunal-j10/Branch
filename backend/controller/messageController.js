const Message=require('../model/messageSchema')
const Conversation=require('../model/conversationSchema')
const User = require('../model/userschema')

exports.fetchMessage=async(req,res)=>{
    try{
        const message=await Message.find({status:'pending'})
        let arr=message
        arr.sort((a,b)=>{
           return a.timeStamp>b.timeStamp?-1:1
        })
        let map=new Map()
        arr.forEach((message)=>{
           map.set(message.userId,{message:message.messageBody,messageId:message._id})
        })

        let final=[];
        map.forEach((value,key)=>{
           final.push({userId:key,messageBody:value.message,_id:value.messageId});
        })
        // console.log(final)
        res.status(200).json(final)
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Err in API Call of Fetch Message"
        })
    }
}

exports.replyMessage=async(req,res)=>{
    const {_id,reply}=req.body
    try{
        await Message.findByIdAndUpdate(_id,{replyBody:reply,status:"replied"})
        res.status(200).json({
            success:true,
            message:"Reply message Stored",

        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Err in API Call of Fetch Message"
        }) 
    }
}

exports.fetchPrevMessages=async(req,res)=>{
    const {userId}=req.body
    try{
       const prevmessages=await Message.find({userId:userId,status:"replied"})
       console.log(prevmessages)
       prevmessages.sort((a,b)=>{
        return a.timeStamp<b.timeStamp?-1:1
       })
       let arr=[]
       prevmessages.forEach((message)=>{
         arr.push({messageBody:message.messageBody,replyBody:message.replyBody})
       })
       
       res.status(200).json({
         success:true,
         message:"Previous Messsage fetched",
         prevmessages:arr
       })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Err in API Call of Fetch Message",
        }) 
    }
}

exports.Login=async(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);
    try{
          const response=await User.find({email:email,password:password})
          if(response.length==1){
            res.status(200).json({
                success:true,
                message:"Sign in successful"
            })
          }
          else{
             res.status(400).json({
                success:false,
                message:"User doesnot exists"
             })
          }
    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Err in API Call of Fetch Message",
        }) 
    }
}

exports.Signup=async(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);
    try{
          const response=await User.find({email:email})
          console.log(response)
          if(response.length==0){
             await User.create({email,password})
             res.status(200).json({
                success:true,
                message:"user created sucessfully"
             })
          }
          else{
             res.status(400).json({
                success:false,
                message:"User already exists"
             })
          }
    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Err in API Call of Fetch Message",
        }) 
    }
}