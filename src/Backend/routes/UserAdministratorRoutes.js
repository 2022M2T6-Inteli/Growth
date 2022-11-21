const express = require('express')

const UserAdministratorController = require('../controllers/UserAdministratorController')

const userAdministratorRouter = express.Router()

// CREATE
userAdministratorRouter.get("/api/administradores-create", UserAdministratorController.getCreateUserAdministrator)
userAdministratorRouter.post("/api/administradores", UserAdministratorController.postCreateUserAdministrator)

// READ
userAdministratorRouter.get("/api/login-administrador", UserAdministratorController.getLogin)
userAdministratorRouter.post("/api/login-administrador", UserAdministratorController.postLogin)

userAdministratorRouter.get("/api/administradores", UserAdministratorController.getAllUserAdministrator)
userAdministratorRouter.get("/api/administradores/:id", UserAdministratorController.getUserAdministrator)

// UPDATE
userAdministratorRouter.put("/api/administradores/:id", UserAdministratorController.postUpdateUserAdministrator) // UPDATE API
userAdministratorRouter.get("/api/administradores/:id", UserAdministratorController.getUpdateUserAdministrator)
userAdministratorRouter.post("/api/administradores/:id", UserAdministratorController.postUpdateUserAdministrator)

// DELETE
userAdministratorRouter.delete("/api/administradores/:id", UserAdministratorController.postDeleteUserAdministrator) // DELETE API
userAdministratorRouter.get("/api/administradores-delete/:id", UserAdministratorController.getUpdateUserAdministrator)
userAdministratorRouter.post("/api/usuarios-delete/:id", UserAdministratorController.postUpdateUserAdministrator)

module.exports = userAdministratorRouter;