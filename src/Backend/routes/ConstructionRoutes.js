const express = require('express')

const ConstructionController = require('../controllers/ContructionController')
const AuthMiddleware = require('../middlewares/AuthMiddleware')

const Router = express.Router()

// API
// Create
Router.post("/api/obras", AuthMiddleware.onlyLoggedADM, ConstructionController.create)

// Read
Router.get("/api/obras", ConstructionController.all)
Router.get("/api/obras/:id", ConstructionController.get)

// Update
Router.put("/api/obras/:id", AuthMiddleware.onlyLoggedADM, ConstructionController.update) // UPDATE API

// Delete
Router.delete("/api/obras/:id", AuthMiddleware.onlyLoggedADM, ConstructionController.delete) // DELETE API

module.exports = Router;