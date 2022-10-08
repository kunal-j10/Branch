

exports.fetchMessage=async(req,res)=>{
    try{
         
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Err in API Call of Fetch Message"
        })
    }
}