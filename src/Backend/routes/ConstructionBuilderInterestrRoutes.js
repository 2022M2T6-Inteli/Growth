const express = require('express')
const Controller = require('../controllers/ConstructionBuilderInterestController')

const Router = express.Router()

// CREATE
Router.get("/api/empreiteiro-obra-interesse-create", Controller.getCreateConstructionBuilderInterest)
Router.post("/api/empreiteiro-obra-interesse", Controller.createBuilderInterest)

// READ
Router.get("/api/empreiteiro-obra-interesse/obra/:constructionId", Controller.allBuilderInterestByConstruction)
Router.get("/api/empreiteiro-obra-interesse/empreiteiro/:builderId", Controller.allBuilderInterestByBuilder)
Router.get("/api/empreiteiro-obra-interesse/:constructionId/:builderId", Controller.getBuilderInterest)

// UPDATE

// DELETE
Router.delete("/api/empreiteiro-obra-interesse/:constructionId/:builderId", Controller.deleteBuilderInterest) // DELETE API

Router.delete("/api/empreiteiro-obra-interesse/:constructionId/:builderId", Controller.deleteBuilderInterest)

Router.get("/busca", Controller.getBusca)

module.exports = Router;