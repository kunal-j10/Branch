const express=require('express')
const app=express()
const cors=require('cors')
const dotenv=require('dotenv')
const {connectDb}=require('./db/connect')



dotenv.config()
const PORT=process.env.PORT || 5001
connectDb()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.listen(PORT,()=>console.log(`Port started in ${PORT}`))