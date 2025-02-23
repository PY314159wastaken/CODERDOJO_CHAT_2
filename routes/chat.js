const express = require("express")
const router = express.Router()
let messages = [
    {
        user: "system",
        message: "dit is de start van de chat"
    }
]
router.get('/',(req,res)=>{
    res.json(messages)
})
module.exports = router

router.get('/',(req,res)=> {
    res.json(messages)
})
router.post('/', async(req,res)=>{
    console.log(await req.body)
    messages.push({
        user: req.body.username,
        message: req.body.message
    })
    return res.status(200).send()
})