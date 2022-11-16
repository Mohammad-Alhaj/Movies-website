const express = require("express")
routerUser = express.Router()
const bearer = require('../middleware/bearer')
const usersControllers = require('../controllers/users_controller')

routerUser.get('/users',bearer,usersControllers.getUsers)

routerUser.post('/addUser',usersControllers.addUser)

module.exports = routerUser