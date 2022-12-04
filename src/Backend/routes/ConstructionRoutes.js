const express = require('express')

const ConstructionController = require('../controllers/ContructionController')

const constructionRouter = express.Router()

// CREATE
constructionRouter.get("/obras-create", ConstructionController.getCreateConstruction)
constructionRouter.post("/obras", ConstructionController.postCreateConstruction)

// READ
constructionRouter.get("/obras", ConstructionController.getAllConstruction)
constructionRouter.get("/obras/:id", ConstructionController.getConstruction)

// UPDATE
constructionRouter.put("/obras/:id", ConstructionController.postUpdateConstruction) // UPDATE API
constructionRouter.get("/obras/:id", ConstructionController.getUpdateConstruction)
constructionRouter.post("/obras/:id", ConstructionController.postUpdateConstruction)

// DELETE
constructionRouter.delete("/obras/:id", ConstructionController.postDeleteConstruction) // DELETE API
constructionRouter.get("/obras-delete/:id", ConstructionController.getUpdateConstruction)
constructionRouter.post("/obras-delete/:id", ConstructionController.postUpdateConstruction)

module.exports = constructionRouter;