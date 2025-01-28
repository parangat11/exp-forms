const { Router } = require('express')
const usersController = require('../controlllers/usersController.js')
const usersRouter = Router()

usersRouter.get('/', usersController.usersListGet)
usersRouter.get('/create', usersController.usersCreateGet)
usersRouter.post('/create', usersController.usersCreatePost)

usersRouter.get('/:id/update', usersController.usersUpdateGet)
usersRouter.post('/:id/update', usersController.userUpdatePost)

module.exports = usersRouter