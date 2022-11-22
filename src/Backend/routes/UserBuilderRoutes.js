const express = require('express')

const Controller = require('../controllers/UserBuilderController')

const AuthMiddleware = require('../middlewares/AuthMiddleware')

const router = express.Router()

// API
// CREATE
router.post("/api/usuarios", Controller.postCreateUserBuilder)

// READ
router.post("/api/login", Controller.postLogin)

router.get("/api/usuarios", AuthMiddleware.onlyLogged, Controller.getAllUserBuilder)
router.get("/api/usuarios/:id", AuthMiddleware.onlyLogged, Controller.getUserBuilder)

// UPDATE
router.put("/api/usuarios/:id", AuthMiddleware.onlyLogged, Controller.postUpdateUserBuilder) // UPDATE API

// DELETE
router.delete("/api/usuarios/:id", AuthMiddleware.onlyLogged, Controller.postDeleteUserBuilder) // DELETE API

// SITE
router.all("/login", Controller.getLogin);

router.all("/cadastro/etapa1", Controller.getCadastroEtapa1);
router.all("/cadastro/etapa2", Controller.getCadastroEtapa2);
router.all("/cadastro/etapa3", Controller.getCadastroEtapa3);
router.all("/cadastro/etapa4", Controller.getCadastroEtapa4);
router.all("/cadastro/etapa5", Controller.getCadastroEtapa5);
router.all("/cadastro/etapa6", Controller.getCadastroEtapa6);

router.all("/usuario/edicao/contador", AuthMiddleware.onlyLoggedSite, Controller.getEdicaoUsuarioContador);
router.all("/usuario/edicao/dono", AuthMiddleware.onlyLoggedSite, Controller.getEdicaoUsuarioDono);
router.all("/usuario/edicao/empresa", AuthMiddleware.onlyLoggedSite, Controller.getEdicaoUsuarioEmpresa);

module.exports = router;