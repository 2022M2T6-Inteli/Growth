const express = require('express')

const BuilderConstructionSummaryController = require('../controllers/BuilderConstructionSummaryController')

const builderConstructionSummaryRouter = express.Router()

// CREATE
builderConstructionSummaryRouter.get("/api/portifolio-create", BuilderConstructionSummaryController.getCreateBuilderConstructionSummary)
builderConstructionSummaryRouter.post("/api/portifolio", BuilderConstructionSummaryController.postCreateBuilderConstructionSummary)

// READ
builderConstructionSummaryRouter.get("/api/portifolio", BuilderConstructionSummaryController.getAllBuilderConstructionSummary)
builderConstructionSummaryRouter.get("/api/portifolio/:id", BuilderConstructionSummaryController.getBuilderConstructionSummary)

// UPDATE
builderConstructionSummaryRouter.put("/api/portifolio/:id", BuilderConstructionSummaryController.postUpdateBuilderConstructionSummary) // UPDATE API
builderConstructionSummaryRouter.get("/api/portifolio/:id", BuilderConstructionSummaryController.getUpdateBuilderConstructionSummary)
builderConstructionSummaryRouter.post("/api/portifolio/:id", BuilderConstructionSummaryController.postUpdateBuilderConstructionSummary)

// DELETE
builderConstructionSummaryRouter.delete("/api/portifolio/:id", BuilderConstructionSummaryController.postDeleteBuilderConstructionSummary) // DELETE API
builderConstructionSummaryRouter.get("/api/portifolio-delete/:id", BuilderConstructionSummaryController.getUpdateBuilderConstructionSummary)
builderConstructionSummaryRouter.post("/api/portifolio-delete/:id", BuilderConstructionSummaryController.postUpdateBuilderConstructionSummary)

module.exports = builderConstructionSummaryRouter;