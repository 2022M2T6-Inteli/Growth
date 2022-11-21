const express = require('express')
const ConstructionBuilderInterestController = require('../controllers/ConstructionBuilderInterestController')

const constructionBuilderInterestRouter = express.Router()

// CREATE
constructionBuilderInterestRouter.get("/api/empreiteiro-obra-interesse-create", ConstructionBuilderInterestController.getCreateConstructionBuilderInterest)
constructionBuilderInterestRouter.post("/api/empreiteiro-obra-interesse", ConstructionBuilderInterestController.postCreateConstructionBuilderInterest)

// READ
constructionBuilderInterestRouter.get("/api/empreiteiro-obra-interesse/obra/:constructionId", ConstructionBuilderInterestController.getAllConstructionBuilderInterestByConstruction)
constructionBuilderInterestRouter.get("/api/empreiteiro-obra-interesse/empreiteiro/:builderId", ConstructionBuilderInterestController.getAllConstructionBuilderInterestByBuilder)
constructionBuilderInterestRouter.get("/api/empreiteiro-obra-interesse/:constructionId/:builderId", ConstructionBuilderInterestController.getConstructionBuilderInterest)

// UPDATE

// DELETE
constructionBuilderInterestRouter.delete("/api/empreiteiro-obra-interesse/:constructionId/:builderId", ConstructionBuilderInterestController.postDeleteConstructionBuilderInterest) // DELETE API

module.exports = constructionBuilderInterestRouter;