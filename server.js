const path = require("path")
const express = require("express")
const chatRoutes = require('./routes/chat')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')))
app.use('/api/chat',chatRoutes)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})
app.get('/chat',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','chat.html'))
})
app.get('/index0',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index0.html'))
})
app.listen(PORT,()=>{
    console.log("SERVER HAS STARTED");
})