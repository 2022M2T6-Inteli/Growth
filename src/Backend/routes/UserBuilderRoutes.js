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

router.get("/cadastro/etapa1", Controller.getCadastroEtapa1);
router.get("/cadastro/etapa2", Controller.getCadastroEtapa2);
router.get("/cadastro/etapa3", Controller.getCadastroEtapa3);
router.get("/cadastro/etapa4", Controller.getCadastroEtapa4);
router.get("/cadastro/etapa5", Controller.getCadastroEtapa5);
router.get("/cadastro/etapa6", Controller.getCadastroEtapa6);

router.get("/usuario/edicao/contador", Controller.getEdicaoUsuarioContador);
router.get("/usuario/edicao/dono", Controller.getEdicaoUsuarioDono);
router.get("/usuario/edicao/empresa", Controller.getEdicaoUsuarioEmpresa);

module.exports = router;