const express = require('express')
const Controller = require('../controllers/ConstructionBuilderInterestController')

const Router = express.Router()

// CREATE
Router.get("/api/empreiteiro-obra-interesse-create", Controller.getCreateConstructionBuilderInterest)
Router.post("/api/empreiteiro-obra-interesse", Controller.postCreateConstructionBuilderInterest)

// READ
Router.get("/api/empreiteiro-obra-interesse/obra/:constructionId", Controller.getAllConstructionBuilderInterestByConstruction)
Router.get("/api/empreiteiro-obra-interesse/empreiteiro/:builderId", Controller.getAllConstructionBuilderInterestByBuilder)
Router.get("/api/empreiteiro-obra-interesse/:constructionId/:builderId", Controller.getConstructionBuilderInterest)

// UPDATE

// DELETE
Router.delete("/api/empreiteiro-obra-interesse/:constructionId/:builderId", Controller.postDeleteConstructionBuilderInterest) // DELETE API

Router.delete("/api/empreiteiro-obra-interesse/:constructionId/:builderId", Controller.postDeleteConstructionBuilderInterest)

Router.get("/busca", Controller.getBusca)

module.exports = Router;