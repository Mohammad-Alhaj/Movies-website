const Users =require('../modules/users')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports =async (req,res,next)=>{
    try{
    let bearer = req.headers.authorization.split(" ")[1]
   let check =  jwt.verify(bearer,process.env.SECRET)
    const user = await Users.findOne({username:check.username})
    if(user){
        req.user = user
        next()
    }else{
        res.send('Error')
    }
}catch(err){
res.send('You are not authorized')

    }

}