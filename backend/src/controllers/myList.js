
const movies = require('../modules/movies')



const addToList =async (req,res)=>{
    try{
        const {id}= req.body
        const movie = await movies.findById(id)
        // addToList function in Users Module 
        let result = await req.user.addToList(movie._id)
        console.log(result);
        res.send({'message':result})
    }catch(e){
        res.send(e.message)
    }

}


module.exports = addToList