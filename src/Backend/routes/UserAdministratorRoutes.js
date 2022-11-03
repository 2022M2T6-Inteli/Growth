const express = require('express')

const UserAdministratorController = require('../controllers/UserAdministratorController')

const userAdministratorRouter = express.Router()

// CREATE
userAdministratorRouter.get("/usuarios-create", UserAdministratorController.getCreateUserAdministrator)
userAdministratorRouter.post("/usuarios", UserAdministratorController.postCreateUserAdministrator)

// READ
userAdministratorRouter.get("/login", UserAdministratorController.getLogin)
userAdministratorRouter.post("/login", UserAdministratorController.postLogin)

userAdministratorRouter.get("/usuarios", UserAdministratorController.getAllUserAdministrator)
userAdministratorRouter.get("/usuarios/:id", UserAdministratorController.getUserAdministrator)

// UPDATE
userAdministratorRouter.put("/usuarios/:id", UserAdministratorController.postUpdateUserAdministrator) // UPDATE API
userAdministratorRouter.get("/usuarios/:id", UserAdministratorController.getUpdateUserAdministrator)
userAdministratorRouter.post("/usuarios/:id", UserAdministratorController.postUpdateUserAdministrator)

// DELETE
userAdministratorRouter.delete("/usuarios/:id", UserAdministratorController.postDeleteUserAdministrator) // DELETE API
userAdministratorRouter.get("/usuarios-delete/:id", UserAdministratorController.getUpdateUserAdministrator)
userAdministratorRouter.post("/usuarios-delete/:id", UserAdministratorController.postUpdateUserAdministrator)

module.exports = userAdministratorRouter;