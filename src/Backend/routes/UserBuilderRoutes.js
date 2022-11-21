const express = require('express')

const Controller = require('../controllers/UserBuilderController')

const router = express.Router()

// CREATE
router.get("/api/usuarios-create", Controller.getCreateUserBuilder)
router.post("/api/usuarios", Controller.postCreateUserBuilder)

// READ
router.get("/api/login", Controller.getLogin)
router.post("/api/login", Controller.postLogin)

router.get("/api/usuarios", Controller.getAllUserBuilder)
router.get("/api/usuarios/:id", Controller.getUserBuilder)

// UPDATE
router.put("/api/usuarios/:id", Controller.postUpdateUserBuilder) // UPDATE API
router.get("/api/usuarios/:id", Controller.getUpdateUserBuilder)
router.post("/api/usuarios/:id", Controller.postUpdateUserBuilder)

// DELETE
router.delete("/api/usuarios/:id", Controller.postDeleteUserBuilder) // DELETE API
router.get("/api/usuarios-delete/:id", Controller.getUpdateUserBuilder)
router.post("/api/usuarios-delete/:id", Controller.postUpdateUserBuilder)

router.get("/login", Controller.getLogin);




module.exports = router;