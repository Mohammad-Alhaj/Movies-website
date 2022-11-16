const mongoose = require('mongoose')
const moviesSchema = new mongoose.Schema({
    title:String,
    description: String,
    image:String,
    category:String,
    type:String

})

module.exports = mongoose.model('Movies',moviesSchema)