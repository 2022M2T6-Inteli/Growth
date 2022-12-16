const express = require('express')

const Controller = require('../../controllers/Web/DashboardController');
const AuthMiddleware = require('../../middlewares/AuthMiddleware');

const Router = express.Router()

Router.get("/", AuthMiddleware.onlyLoggedADMSite, Controller.getHome);
Router.get("/home", AuthMiddleware.onlyLoggedADMSite, Controller.getHome);

Router.get("/obras", AuthMiddleware.onlyLoggedADMSite, Controller.getConstructions);
Router.get("/obras/:id", AuthMiddleware.onlyLoggedADMSite, Controller.getConstruction);

Router.get("/login", Controller.getLogin);
Router.post("/login", Controller.postLogin);

Router.get("/createObras", AuthMiddleware.onlyLoggedADMSite, Controller.getCreateObras);
Router.post("/createObras", AuthMiddleware.onlyLoggedADMSite, Controller.postCreateObras);

Router.post("/obras", AuthMiddleware.onlyLoggedADMSite, Controller.getConstruction);
Router.get("/obras/:id", AuthMiddleware.onlyLoggedADMSite, Controller.getConstruction);
Router.post("/obras/:id", AuthMiddleware.onlyLoggedADMSite, Controller.postUpdateConstruction);

Router.get("/obras/:id/deletar", AuthMiddleware.onlyLoggedADMSite, Controller.deleteConstruction);

Router.get("/usuarios", AuthMiddleware.onlyLoggedADMSite, Controller.getUsers);
Router.get("/usuarios/:id", AuthMiddleware.onlyLoggedADMSite, Controller.getUser);

Router.post("/usuarios", AuthMiddleware.onlyLoggedADMSite, Controller.getUser);
Router.get("/usuarios/:id", AuthMiddleware.onlyLoggedADMSite, Controller.getUpdateUser);
Router.post("/usuarios/:id", AuthMiddleware.onlyLoggedADMSite, Controller.postUpdateUser);
Router.get("/usuarios/:id/deletar", AuthMiddleware.onlyLoggedADMSite, Controller.deleteUser);

Router.get("/administradores", AuthMiddleware.onlyLoggedADMSite, Controller.getAdministrators);
Router.get("/administradores/:id", AuthMiddleware.onlyLoggedADMSite, Controller.getAdministrator);

Router.get("/criarUsuario", AuthMiddleware.onlyLoggedADMSite, Controller.getCriarUsuario);
Router.post("/criarUsuario", AuthMiddleware.onlyLoggedADMSite, Controller.postCriarUsuario);

Router.get("/criarAdm", AuthMiddleware.onlyLoggedADMSite, Controller.getCriarAdm);
Router.post("/criarAdm", AuthMiddleware.onlyLoggedADMSite, Controller.postCriarAdm);

Router.post("/administradores", AuthMiddleware.onlyLoggedADMSite, Controller.getAdministrator);
Router.get("/administradores/:id", AuthMiddleware.onlyLoggedADMSite, Controller.getUpdateAdministrator);
Router.post("/administradores/:id", AuthMiddleware.onlyLoggedADMSite, Controller.postUpdateAdministrator)
Router.get("/administradores/:id/deletar", AuthMiddleware.onlyLoggedADMSite, Controller.deleteAdministrator);

Router.get("/tags", AuthMiddleware.onlyLoggedADMSite, Controller.getListAllTags);
Router.post("/tags", AuthMiddleware.onlyLoggedADMSite, Controller.postCreateTag);
Router.post("/tags/:id", AuthMiddleware.onlyLoggedADMSite, Controller.postUpdateTag)
Router.get("/tags/:id/deletar", AuthMiddleware.onlyLoggedADMSite, Controller.getDeleteTag);

Router.all("*", (req, res) => {
    res.redirect("/dashboard/");
})

module.exports = Router;