const express = require('express')

const TagController = require('../controllers/TagController')

const tagRouter = express.Router()

// CREATE
tagRouter.get("/api/tags-create", TagController.getCreateTag)
tagRouter.post("/api/tags", TagController.postCreateTag)

// READ
tagRouter.get("/api/tags", TagController.getAllTag)
tagRouter.get("/api/tags/:id", TagController.getTag)

// UPDATE
tagRouter.put("/api/tags/:id", TagController.postUpdateTag) // UPDATE API
tagRouter.get("/api/tags/:id", TagController.getUpdateTag)
tagRouter.post("/api/tags/:id", TagController.postUpdateTag)

// DELETE
tagRouter.delete("/api/tags/:id", TagController.postDeleteTag) // DELETE API
tagRouter.get("/api/tags-delete/:id", TagController.getUpdateTag)
tagRouter.post("/api/tags-delete/:id", TagController.postUpdateTag)

module.exports = tagRouter;