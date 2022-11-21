const express = require('express')

const ConstructionController = require('../controllers/ContructionController')

const constructionRouter = express.Router()

// CREATE
constructionRouter.get("/api/obras-create", ConstructionController.getCreateConstruction)
constructionRouter.post("/api/obras", ConstructionController.postCreateConstruction)

// READ
constructionRouter.get("/api/obras", ConstructionController.getAllConstruction)
constructionRouter.get("/api/obras/:id", ConstructionController.getConstruction)

// UPDATE
constructionRouter.put("/api/obras/:id", ConstructionController.postUpdateConstruction) // UPDATE API
constructionRouter.get("/api/obras/:id", ConstructionController.getUpdateConstruction)
constructionRouter.post("/api/obras/:id", ConstructionController.postUpdateConstruction)

// DELETE
constructionRouter.delete("/api/obras/:id", ConstructionController.postDeleteConstruction) // DELETE API
constructionRouter.get("/api/obras-delete/:id", ConstructionController.getUpdateConstruction)
constructionRouter.post("/api/obras-delete/:id", ConstructionController.postUpdateConstruction)

module.exports = constructionRouter;