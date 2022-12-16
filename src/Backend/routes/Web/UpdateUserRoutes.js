const express = require('express')

const Controller = require('../../controllers/Web/UpdateUserController')

const AuthMiddleware = require('../../middlewares/AuthMiddleware')

const Router = express.Router()

Router.get("/contador", AuthMiddleware.onlyLoggedSite, Controller.getEdicaoUsuarioContador)
Router.post("/contador", AuthMiddleware.onlyLoggedSite, Controller.postEdicaoUsuarioContador)

Router.get("/empresa", AuthMiddleware.onlyLoggedSite, Controller.getEdicaoUsuarioEmpresa)
Router.post("/empresa", AuthMiddleware.onlyLoggedSite, Controller.postEdicaoUsuarioEmpresa)

Router.get("/dono", AuthMiddleware.onlyLoggedSite, Controller.getEdicaoUsuarioDono)
Router.get("/dono", AuthMiddleware.onlyLoggedSite, Controller.postEdicaoUsuarioDono)

Router.all("*", AuthMiddleware.onlyLoggedSite, (req, res) => {
    res.redirect("/usuario/contador")
})

module.exports = Router;