const express = require('express')

const CityController = require('../controllers/CityController')

const cityRouter = express.Router()

// CREATE
cityRouter.get("/api/cidades-create", CityController.getCreateCity)
cityRouter.post("/api/cidades", CityController.postCreateCity)

// READ
cityRouter.get("/api/cidades", CityController.getAllCity)
cityRouter.get("/api/cidades/:id", CityController.getCity)

// UPDATE
cityRouter.put("/api/cidades/:id", CityController.postUpdateCity) // UPDATE API
cityRouter.get("/api/cidades/:id", CityController.getUpdateCity)
cityRouter.post("/api/cidades/:id", CityController.postUpdateCity)

// DELETE
cityRouter.delete("/api/cidades/:id", CityController.postDeleteCity) // DELETE API
cityRouter.get("/api/cidades-delete/:id", CityController.getUpdateCity)
cityRouter.post("/api/cidades-delete/:id", CityController.postUpdateCity)

module.exports = cityRouter;