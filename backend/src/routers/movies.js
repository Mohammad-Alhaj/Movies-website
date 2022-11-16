const express = require("express")
moviesRouter = express.Router()
const bearer = require('../middleware/bearer')
const moviesControllers = require('../controllers/movies_controller')

moviesRouter.get('/movies',bearer,moviesControllers.getMovies)
moviesRouter.get('/movies/:id',bearer,moviesControllers.getMoviesById)
moviesRouter.post('/add-movie',bearer,moviesControllers.addMovies)
moviesRouter.put('/update-movie/:id',bearer,moviesControllers.UpdateMovie)
moviesRouter.delete('/delete-movie/:id',bearer,moviesControllers.DeleteMovie)

module.exports = moviesRouter