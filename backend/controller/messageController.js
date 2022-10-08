const Message=require('../model/messageSchema')

exports.fetchMessage=async(req,res)=>{
    try{
        const message=await Message.find({})
        let arr=message
        arr.sort((a,b)=>{
           return a.timeStamp>b.timeStamp?-1:1
        })
        let map=new Map()
        arr.forEach((message)=>{
           map.set(message.userId,message.messageBody)
        })

        let final=[];
        map.forEach((value,key)=>{
           final.push({userId:key,messageBody:value});
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