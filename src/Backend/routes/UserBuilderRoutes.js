const express = require('express')

const UserBuilderController = require('../controllers/UserBuilderController')

const userBuilderRouter = express.Router()

// CREATE
userBuilderRouter.get("/usuarios-create", UserBuilderController.getCreateUserBuilder)
userBuilderRouter.post("/usuarios", UserBuilderController.postCreateUserBuilder)

// READ
userBuilderRouter.get("/login", UserBuilderController.getLogin)
userBuilderRouter.post("/login", UserBuilderController.postLogin)

userBuilderRouter.get("/usuarios", UserBuilderController.getAllUserBuilder)
userBuilderRouter.get("/usuarios/:id", UserBuilderController.getUserBuilder)

// UPDATE
userBuilderRouter.put("/usuarios/:id", UserBuilderController.postUpdateUserBuilder) // UPDATE API
userBuilderRouter.get("/usuarios/:id", UserBuilderController.getUpdateUserBuilder)
userBuilderRouter.post("/usuarios/:id", UserBuilderController.postUpdateUserBuilder)

// DELETE
userBuilderRouter.delete("/usuarios/:id", UserBuilderController.postDeleteUserBuilder) // DELETE API
userBuilderRouter.get("/usuarios-delete/:id", UserBuilderController.getUpdateUserBuilder)
userBuilderRouter.post("/usuarios-delete/:id", UserBuilderController.postUpdateUserBuilder)

module.exports = userBuilderRouter;