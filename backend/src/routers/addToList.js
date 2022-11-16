const express = require("express")
listRouter = express.Router()

const addToList = require('../controllers/myList')

const bearer = require('../middleware/bearer')

listRouter.post('/fav',bearer,addToList)

module.exports = listRouter