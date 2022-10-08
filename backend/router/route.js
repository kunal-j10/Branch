const messageController=require('../controller/messageController')
const express=require('express')
const router=express.Router()

router.get('/fetchMessages',messageController.fetchMessage)
router.post('/respond',messageController.replyMessage)
router.post('/fetchPrevMessages',messageController.fetchPrevMessages)

module.exports=router