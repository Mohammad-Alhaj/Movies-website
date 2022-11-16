const express = require('express')
const app = express()
app.use(express.json());
require('dotenv').config()
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const PORT = process.env.PORT
const URL = process.env.DATABASE_URL

const routerUser = require('./src/routers/users.js')
const routerLogin = require('./src/middleware/login')
const signupRouter= require('./src/middleware/signup')
const moviesRouter= require('./src/routers/movies')
const listRouter= require('./src/routers/addToList')





app.use(routerLogin)
app.use(routerUser)
app.use(signupRouter)
app.use(moviesRouter)
app.use(listRouter)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect(URL,{
 useUnifiedTopology: true,
useNewUrlParser: true,
}).then(

    app.listen(PORT,()=>{
        console.log(`Server listen on ${PORT}`)
    })
)