const express = require('express')

const UserAdministratorController = require('../controllers/UserAdministratorController')

const userAdministratorRouter = express.Router()

// CREATE
userAdministratorRouter.get("/administradores-create", UserAdministratorController.getCreateUserAdministrator)
userAdministratorRouter.post("/administradores", UserAdministratorController.postCreateUserAdministrator)

// READ
userAdministratorRouter.get("/login-administrador", UserAdministratorController.getLogin)
userAdministratorRouter.post("/login-administrador", UserAdministratorController.postLogin)

userAdministratorRouter.get("/administradores", UserAdministratorController.getAllUserAdministrator)
userAdministratorRouter.get("/administradores/:id", UserAdministratorController.getUserAdministrator)

// UPDATE
userAdministratorRouter.put("/administradores/:id", UserAdministratorController.postUpdateUserAdministrator) // UPDATE API
userAdministratorRouter.get("/administradores/:id", UserAdministratorController.getUpdateUserAdministrator)
userAdministratorRouter.post("/administradores/:id", UserAdministratorController.postUpdateUserAdministrator)

// DELETE
userAdministratorRouter.delete("/administradores/:id", UserAdministratorController.postDeleteUserAdministrator) // DELETE API
userAdministratorRouter.get("/administradores-delete/:id", UserAdministratorController.getUpdateUserAdministrator)
userAdministratorRouter.post("/usuarios-delete/:id", UserAdministratorController.postUpdateUserAdministrator)

module.exports = userAdministratorRouter;