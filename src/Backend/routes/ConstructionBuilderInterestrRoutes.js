const express = require('express')
const ConstructionBuilderInterestController = require('../controllers/ConstructionBuilderInterestController')

const constructionBuilderInterestRouter = express.Router()

// CREATE
constructionBuilderInterestRouter.get("/empreiteiro-obra-interesse-create", ConstructionBuilderInterestController.getCreateConstructionBuilderInterest)
constructionBuilderInterestRouter.post("/empreiteiro-obra-interesse", ConstructionBuilderInterestController.postCreateConstructionBuilderInterest)

// READ
constructionBuilderInterestRouter.get("/empreiteiro-obra-interesse/obra/:constructionId", ConstructionBuilderInterestController.getAllConstructionBuilderInterestByConstruction)
constructionBuilderInterestRouter.get("/empreiteiro-obra-interesse/empreiteiro/:builderId", ConstructionBuilderInterestController.getAllConstructionBuilderInterestByBuilder)
constructionBuilderInterestRouter.get("/empreiteiro-obra-interesse/:constructionId/:builderId", ConstructionBuilderInterestController.getConstructionBuilderInterest)

// UPDATE

// DELETE
constructionBuilderInterestRouter.delete("/empreiteiro-obra-interesse/:constructionId/:builderId", ConstructionBuilderInterestController.postDeleteConstructionBuilderInterest) // DELETE API

module.exports = constructionBuilderInterestRouter;