const express = require("express")
loginRouter = express.Router()
const basic = require('./basic')

loginRouter.post('/login',basic,(req,res)=>{

})

module.exports = loginRouter