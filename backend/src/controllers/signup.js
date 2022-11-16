const Users = require('../modules/users')


module.exports = async (req,res)=>{
    try{
        const{username,password,email}= req.body

        const addUser =await Users.create({username,password,email})
    
        res.status(201).send(addUser)

    }catch(e){
        res.send(e.message)
    }
    
}