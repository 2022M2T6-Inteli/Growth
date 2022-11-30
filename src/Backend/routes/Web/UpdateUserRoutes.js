const express = require('express')

const Controller = require('../../controllers/Web/UpdateUserController')

const AuthMiddleware = require('../../middlewares/AuthMiddleware')

const Router = express.Router()

Router.get("/contador", AuthMiddleware.onlyLogged, Controller.getEdicaoUsuarioContador)
Router.post("/contador", AuthMiddleware.onlyLogged, Controller.getEdicaoUsuarioContador)

Router.get("/empresa", AuthMiddleware.onlyLogged, Controller.getEdicaoUsuarioEmpresa)
Router.post("/empresa", AuthMiddleware.onlyLogged, Controller.getEdicaoUsuarioEmpresa)

Router.get("/dono", AuthMiddleware.onlyLogged, Controller.getEdicaoUsuarioDono)
Router.get("/dono", AuthMiddleware.onlyLogged, Controller.getEdicaoUsuarioDono)

module.exports = Router;