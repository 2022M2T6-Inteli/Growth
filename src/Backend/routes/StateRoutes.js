const express = require('express')

const StateController = require('../controllers/StateController')

const stateRouter = express.Router()

// CREATE
stateRouter.get("/estados-create", StateController.getCreateState)
stateRouter.post("/estados", StateController.postCreateState)

// READ
stateRouter.get("/estados", StateController.getAllState)
stateRouter.get("/estados/:id", StateController.getState)

// UPDATE
stateRouter.put("/estados/:id", StateController.postUpdateState) // UPDATE API
stateRouter.get("/estados/:id", StateController.getUpdateState)
stateRouter.post("/estados/:id", StateController.postUpdateState)

// DELETE
stateRouter.delete("/estados/:id", StateController.postDeleteState) // DELETE API
stateRouter.get("/estados-delete/:id", StateController.getUpdateState)
stateRouter.post("/estados-delete/:id", StateController.postUpdateState)

module.exports = stateRouter;