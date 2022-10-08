const messageController=require('../controller/messageController')
const express=require('express')
const router=express.Router()

router.get('/fetchMessages',messageController.fetchMessage)


module.exports=router