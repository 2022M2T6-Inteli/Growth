const express = require('express')

const SummaryController = require('../controllers/BuilderConstructionSummaryController')
const AuthMiddleware = require('../middlewares/AuthMiddleware')

const Router = express.Router()

// CREATE
Router.post("/api/portifolios", AuthMiddleware.onlyLogged, SummaryController.create)

// READ
Router.get("/api/portifolios", AuthMiddleware.onlyLogged, SummaryController.all)
Router.get("/api/portifolios/:id", AuthMiddleware.onlyLogged, SummaryController.get)

// UPDATE
Router.put("/api/portifolios/:id", AuthMiddleware.onlyLogged, SummaryController.update) // UPDATE API

// DELETE
Router.delete("/api/portifolios/:id", AuthMiddleware.onlyLogged, SummaryController.delete) // DELETE API

module.exports = Router;