const express = require('express')

const BuilderConstructionSummaryController = require('../controllers/BuilderConstructionSummaryController')

const builderConstructionSummaryRouter = express.Router()

// CREATE
builderConstructionSummaryRouter.get("/portifolio-create", BuilderConstructionSummaryController.getCreateBuilderConstructionSummary)
builderConstructionSummaryRouter.post("/portifolio", BuilderConstructionSummaryController.postCreateBuilderConstructionSummary)

// READ
builderConstructionSummaryRouter.get("/portifolio", BuilderConstructionSummaryController.getAllBuilderConstructionSummary)
builderConstructionSummaryRouter.get("/portifolio/:id", BuilderConstructionSummaryController.getBuilderConstructionSummary)

// UPDATE
builderConstructionSummaryRouter.put("/portifolio/:id", BuilderConstructionSummaryController.postUpdateBuilderConstructionSummary) // UPDATE API
builderConstructionSummaryRouter.get("/portifolio/:id", BuilderConstructionSummaryController.getUpdateBuilderConstructionSummary)
builderConstructionSummaryRouter.post("/portifolio/:id", BuilderConstructionSummaryController.postUpdateBuilderConstructionSummary)

// DELETE
builderConstructionSummaryRouter.delete("/portifolio/:id", BuilderConstructionSummaryController.postDeleteBuilderConstructionSummary) // DELETE API
builderConstructionSummaryRouter.get("/portifolio-delete/:id", BuilderConstructionSummaryController.getUpdateBuilderConstructionSummary)
builderConstructionSummaryRouter.post("/portifolio-delete/:id", BuilderConstructionSummaryController.postUpdateBuilderConstructionSummary)

module.exports = builderConstructionSummaryRouter;