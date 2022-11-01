const express = require('express')

const BuilderController = require('../controllers/BuilderController')

const builderRouter = express.Router()

builderRouter.get("/usuario/:id", BuilderController.getBuilder)

builderRouter.get("/usuario", BuilderController.getCreateBuilder)
builderRouter.post("/usuario", BuilderController.postCreateBuilder)

builderRouter.get("/usuario/:id", BuilderController.getUpdateBuilder)
builderRouter.post("/usuario/:id", BuilderController.postUpdateBuilder)

module.exports = builderRouter;