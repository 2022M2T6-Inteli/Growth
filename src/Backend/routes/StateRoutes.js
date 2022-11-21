const express = require('express')

const StateController = require('../controllers/StateController')

const stateRouter = express.Router()

// CREATE
stateRouter.get("/api/estados-create", StateController.getCreateState)
stateRouter.post("/api/estados", StateController.postCreateState)

// READ
stateRouter.get("/api/estados", StateController.getAllState)
stateRouter.get("/api/estados/:id", StateController.getState)

// UPDATE
stateRouter.put("/api/estados/:id", StateController.postUpdateState) // UPDATE API
stateRouter.get("/api/estados/:id", StateController.getUpdateState)
stateRouter.post("/api/estados/:id", StateController.postUpdateState)

// DELETE
stateRouter.delete("/api/estados/:id", StateController.postDeleteState) // DELETE API
stateRouter.get("/api/estados-delete/:id", StateController.getUpdateState)
stateRouter.post("/api/estados-delete/:id", StateController.postUpdateState)

module.exports = stateRouter;