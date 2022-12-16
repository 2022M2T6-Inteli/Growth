const express = require('express')

const Controller = require('../../controllers/Web/StructuralController')

const Router = express.Router()

// CREATE
Router.get("/busca", Controller.getBusca)

Router.get("/home", Controller.getHome)
Router.get("/", Controller.getHome)

Router.get("/login", Controller.getLogin)
Router.post("/login", Controller.postLogin)


Router.get("/logout", Controller.getLogout)

Router.get("/institucional", Controller.getInstitucional)

Router.get("/obra/:id", Controller.getObra)
Router.get("/obra/:id/interesse", Controller.getCreateInteresse)

Router.all("*", (req, res) => {
    res.redirect("/");
})

module.exports = Router;