const express = require('express')

const TagController = require('../controllers/TagController')

const tagRouter = express.Router()

// CREATE
tagRouter.get("/tags-create", TagController.getCreateTag)
tagRouter.post("/tags", TagController.postCreateTag)

// READ
tagRouter.get("/tags", TagController.getAllTag)
tagRouter.get("/tags/:id", TagController.getTag)

// UPDATE
tagRouter.put("/tags/:id", TagController.postUpdateTag) // UPDATE API
tagRouter.get("/tags/:id", TagController.getUpdateTag)
tagRouter.post("/tags/:id", TagController.postUpdateTag)

// DELETE
tagRouter.delete("/tags/:id", TagController.postDeleteTag) // DELETE API
tagRouter.get("/tags-delete/:id", TagController.getUpdateTag)
tagRouter.post("/tags-delete/:id", TagController.postUpdateTag)

module.exports = tagRouter;