const express = require('express')

const CityController = require('../controllers/CityController')

const cityRouter = express.Router()

// CREATE
cityRouter.get("/cidade-create", CityController.getCreateCity)
cityRouter.post("/cidade", CityController.postCreateCity)

// READ
cityRouter.get("/cidade", CityController.getAllCity)
cityRouter.get("/cidade/:id", CityController.getCity)

// UPDATE
cityRouter.put("/cidade/:id", CityController.postUpdateCity) // UPDATE API
cityRouter.get("/cidade/:id", CityController.getUpdateCity)
cityRouter.post("/cidade/:id", CityController.postUpdateCity)

// DELETE
cityRouter.delete("/cidade/:id", CityController.postDeleteCity) // DELETE API
cityRouter.get("/cidade-delete/:id", CityController.getUpdateCity)
cityRouter.post("/cidade-delete/:id", CityController.postUpdateCity)

module.exports = cityRouter;