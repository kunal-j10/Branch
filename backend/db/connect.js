const mongoose=require('mongoose')

// Connecting to Database using mongoose
exports.connectDb=async()=>{
    try{
        await mongoose.connect(process.env.DB)
        console.log("successfully Connected to Db")
    }
    catch(err){
        console.log("connection to Db unsuccessful",err)
    }

}
