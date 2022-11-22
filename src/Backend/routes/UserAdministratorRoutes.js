const express = require('express')

const Controller = require('../controllers/UserAdministratorController')
const AuthMiddleware = require('../middlewares/AuthMiddleware')

const Router = express.Router()

// CREATE
Router.post("/api/administradores", AuthMiddleware.onlyLoggedADM, Controller.postCreateUserAdministrator)

// READ
Router.post("/api/administradores/login", Controller.postLogin)

Router.get("/api/administradores", AuthMiddleware.onlyLoggedADM, Controller.getAllUserAdministrator)
Router.get("/api/administradores/:id", AuthMiddleware.onlyLoggedADM, Controller.getUserAdministrator)

// UPDATE
Router.put("/api/administradores/:id", AuthMiddleware.onlyLoggedADM, Controller.postUpdateUserAdministrator) // UPDATE API

// DELETE
Router.delete("/api/administradores/:id", AuthMiddleware.onlyLoggedADM, Controller.postDeleteUserAdministrator) // DELETE API


module.exports = Router;