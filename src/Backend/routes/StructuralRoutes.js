const express = require('express')

const Controller = require('../controllers/StructuralController')

const Router = express.Router()

// CREATE
Router.get("/busca", Controller.getBusca)

Router.get("/home", Controller.getHome)
Router.get("/", Controller.getHome)

Router.get("/institucional", Controller.getInstitucional)

Router.get("/obra/:id", Controller.getObra)

module.exports = Router;