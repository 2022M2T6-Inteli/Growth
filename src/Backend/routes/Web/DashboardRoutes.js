const express = require('express')

const Controller = require('../../controllers/Web/DashboardController')

const Router = express.Router()

Router.get("/", Controller.getHome);
Router.get("/home", Controller.getHome);

Router.get("/login", Controller.getHome);
Router.post("/login", Controller.getHome);

Router.get("/obras", Controller.getConstructions);
Router.get("/obras/:id", Controller.getConstruction);

Router.post("/obras", Controller.getConstruction);
Router.post("/obras/:id", Controller.getConstruction);
Router.post("/obras/:id/delete", Controller.getConstructions);

Router.get("/usuarios", Controller.getUsers);
Router.get("/usuarios/:id", Controller.getUser);

Router.post("/usuarios", Controller.getUser);
Router.post("/usuarios/:id", Controller.getUser);
Router.post("/usuarios/:id/delete", Controller.getUsers);

Router.get("/administradores", Controller.getAdministrators);
Router.get("/administradores/:id", Controller.getAdministrator);

Router.post("/administradores", Controller.getAdministrator);
Router.post("/administradores/:id", Controller.getAdministrator);
Router.post("/administradores/:id/delete", Controller.getAdministrators);

module.exports = Router;