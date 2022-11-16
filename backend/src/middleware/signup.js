const express = require("express")
signupRouter = express.Router()
const basic = require('./basic')
const signup = require('../controllers/signup')


signupRouter.post('/signup',signup)

module.exports = signupRouter