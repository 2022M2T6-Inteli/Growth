const express = require('express')

const CityController = require('../controllers/CityController')

const cityRouter = express.Router()

// CREATE
cityRouter.get("/cidades-create", CityController.getCreateCity)
cityRouter.post("/cidades", CityController.postCreateCity)

// READ
cityRouter.get("/cidades", CityController.getAllCity)
cityRouter.get("/cidades/:id", CityController.getCity)

// UPDATE
cityRouter.put("/cidades/:id", CityController.postUpdateCity) // UPDATE API
cityRouter.get("/cidades/:id", CityController.getUpdateCity)
cityRouter.post("/cidades/:id", CityController.postUpdateCity)

// DELETE
cityRouter.delete("/cidades/:id", CityController.postDeleteCity) // DELETE API
cityRouter.get("/cidades-delete/:id", CityController.getUpdateCity)
cityRouter.post("/cidades-delete/:id", CityController.postUpdateCity)

module.exports = cityRouter;