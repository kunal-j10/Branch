const mongoose=require('mongoose')

exports.connectDb=async()=>{
    try{
        await mongoose.connect(process.env.DB)
        console.log("successfully Connecter to Db")
    }
    catch(err){
        console.log("connection to Db unsuccessful",err)
    }

}