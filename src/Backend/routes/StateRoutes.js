const express = require('express')

const StateController = require('../controllers/StateController')

const stateRouter = express.Router()

// CREATE
stateRouter.get("/estado-create", StateController.getCreateState)
stateRouter.post("/estado", StateController.postCreateState)

// READ
stateRouter.get("/estado", StateController.getAllState)
stateRouter.get("/estado/:id", StateController.getState)

// UPDATE
stateRouter.put("/estado/:id", StateController.postUpdateState) // UPDATE API
stateRouter.get("/estado/:id", StateController.getUpdateState)
stateRouter.post("/estado/:id", StateController.postUpdateState)

// DELETE
stateRouter.delete("/estado/:id", StateController.postDeleteState) // DELETE API
stateRouter.get("/estado-delete/:id", StateController.getUpdateState)
stateRouter.post("/estado-delete/:id", StateController.postUpdateState)

module.exports = stateRouter;